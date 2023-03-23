import React from "react";
import styled from "styled-components";

const Content = styled.div`
  margin-top: 40px;
  & > p {
    padding: 10px;
    color: white;
    background-color: #ffa500;
    border-radius: 5px;
  }
  
  & > .file {
    height: 150px;
    border: 1px dotted #ccc;
    background-color: white;
    & > input {
      display: none;
      width: 100%;
      height: 100%;
    }
    & > p {
      text-align: center;
    }
    &:hover{
      cursor: pointer;
      border: 1px dotted #1890ff;
    }
  }
`
export default function Home() {
    return (
        <>
            <Content>
                <p>请先登录再上传!!!</p>
                <div className='file'>
                    <input type="file"/>
                    <p></p>
                    <p>点击或拖曳上传图片</p>
                    <p>仅支持.png/.gif/.jpg/.svg格式的图片，图片最大1M</p>
                </div>
            </Content>
        </>
    )
}