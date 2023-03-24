import React, {useRef} from "react";
import styled from "styled-components";
import {observer, useLocalStore} from "mobx-react";
import {useStore} from "../stores";

const Message = styled.div`
  margin-top: 40px;
  border: 1px solid #000;
  border-radius: 8px;
  padding: 10px;

  &:hover {
    cursor: default;
  }

  h2 {
    text-align: center;
  }

  dl {
    text-align: center;

    a {
      font-size: 12px;
      color: blue;
    }

    span {
      color: #c12c1f;
    }

    input {
      border-radius: 5px;
      margin-left: 20px;
      padding: 0 10px;
    }

    dd {
      margin-top: 10px;

      img {
        min-width: 160px;
        min-height: 80px;
      }
    }
  }
`
export default observer(() => {
    const {ImageStore} = useStore()
    const Height = useRef(null)
    const Width = useRef(null)
    const store = useLocalStore(() => (
        {
            width: '',
            setWidth(width) {
                this.width = width
            },
            get widthStr() {
                return this.width ? `w/${this.width}/` : ''
            },
            height: '',
            setHeight(height) {
                this.height = height
            },
            get heightStr() {
                return this.height ? `h/${this.height}` : ''
            },
            get fullStr() {
                return ImageStore.serverFile.attributes.url.attributes.url + `?imageView2/0/${this.widthStr}${this.heightStr}`
            }
        }
    ))

    const changeHeight = () => {
        store.setHeight(Height.current.value)
    }
    const changeWidth = () => {
        store.setWidth(Width.current.value)
    }
    return (
        <>
            <Message>
                <h2>上传结果</h2>
                <dl>
                    <dt>线上地址&nbsp;
                        <a
                            href={ImageStore.serverFile.attributes.url.attributes.url}
                            rel='noopener noreferrer' target="_blank" >{ImageStore.serverFile.attributes.url.attributes.url}</a>
                    </dt>
                    <dd>修改后大小&nbsp;
                        <a href={store.fullStr} rel='noopener noreferrer' target="_blank">{store.fullStr}</a>
                    </dd>
                    <dt>文件名&nbsp;<span>{ImageStore.serverFile.attributes.filename}</span></dt>
                    <dt className='img'>图片预览</dt>
                    <dd><img src={store.fullStr} alt='img'/></dd>
                    <dt>自定义大小</dt>
                    <dd>
                        <input type="text" ref={Width} onChange={changeWidth} placeholder='请输入图片高度'/>
                        <input type="text" ref={Height} onChange={changeHeight} placeholder='请输入图片宽度'/>
                    </dd>
                    <dd>
                        <a href={store.fullStr} rel='noopener noreferrer' target="_blank">{store.fullStr}</a>
                    </dd>
                </dl>
            </Message>
        </>
    )
})