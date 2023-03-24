import {observable, action, makeObservable} from 'mobx'
import {Uploader} from "../modules";
import {message} from "antd";

class imageStore {
    filename = ''
    file = null
    serverFile = null
    isUpload = false

    constructor() {
        makeObservable(this, {
            filename: observable,
            file: observable,
            serverFile: observable,
            isUpload: observable,
            setFileName: action,
            setFile: action,
            upload: action
        })
    }

    setFileName(filename) {
        this.filename = filename
    }

    setFile(file) {
        this.file = file
    }

    upload() {
        this.isUpload = true
        this.serverFile = false
        return new Promise((resolve, reject) => {
            Uploader.add(this.file, this.filename)
                .then(serverFile => {
                    this.serverFile = serverFile
                    resolve(serverFile)
                })
                .catch(err => {
                    reject(err)
                    message.error(`上传失败`)
                })
                .finally(() => {
                    this.isUpload = false
                })
        })
    }

}


export default imageStore