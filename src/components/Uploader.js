import React from 'react'
import {InboxOutlined} from "@ant-design/icons"
import {message, Upload, Spin} from "antd"
import {useStore} from "../stores"
import {observer} from "mobx-react"
import {Auth} from "../modules";

const Component = observer((props) => {
    const {ImageStore} = useStore()
    const {Dragger} = Upload
    const options = {
        beforeUpload: (file) => {
            ImageStore.file = file
            ImageStore.filename = file.name
            props.setIsUpload(isUpload => isUpload = false)
            if (!/(png$)|(jpg$)|(jpeg$)|(gif$)|(svg$)/ig.test(file.type)) {
                message.error(`只能上传png/jpg/jpeg/svg/gif格式的图片`)
                return false
            }
            if (file.size > 1024 * 1024) {
                message.error(`文件过大`)
                return false
            }
            ImageStore.upload().then(resolve => {
                message.success(`上传成功`)
                props.setIsUpload(isUpload => !isUpload)
            }).catch(err => {
                message.error(`上传失败`)
            })
            return false;
        },
        showUploadList: false,
        disabled: !Auth.getCurrentUser()
    }

    return (
        <>
            <Spin tip="上传中" spinning={ImageStore.isUpload}>
                <Dragger {...options}>
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined/>
                    </p>
                    <p className="ant-upload-text">点击或拖动图片上传</p>
                    <p className="ant-upload-hint">
                        先注册登入再上传，支持git、png、jpg、svg、jpeg，最大图片尺寸1M。
                    </p>
                </Dragger>
            </Spin>
        </>
    )
})

export default Component