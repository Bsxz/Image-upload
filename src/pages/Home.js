import React, {useState} from "react";
import styled from "styled-components";
import {observer} from "mobx-react";
import {Auth} from '../modules'
import Uploader from '../components/Uploader'
import Message from "../components/Message";
import {useStore} from "../stores";

const Content = styled.div`
  margin-top: 40px;

  > p {
    background-color: #ffa500;
    border-radius: 3px;
    padding: 10px 20px;
  }
`


export default observer(() => {
        const [isUpload, setIsUpload] = useState(false)
        const {AuthStore} = useStore()
        return (
            <>
                <Content>
                    {AuthStore.isLogin && Auth.getCurrentUser() ? null : <p>请先登录再上传!!!</p>}
                    <Uploader setIsUpload={setIsUpload}/>
                    {isUpload ? <Message/> : null}
                </Content>
            </>
        )
    }
)