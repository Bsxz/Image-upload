import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
import logoUrl from '../logo192.png'

const Head = styled.header`
  display: flex;
  align-items: center;
  padding: 10px 100px;
  background-color: #02101f;
`

const Img = styled.img`
  height: 30px;
  margin-right: 30px;
`

const StyledLink = styled(NavLink)`
  color: white;
  margin: 0 20px;

  &.active {
    color: skyblue;
    border-bottom: 1px solid skyblue;
  }
`

const Button = styled.button`
  color: white;
  padding: 6px 16px;
  border: none;
  border-radius: 1px;
  margin-left: 20px;
  background-color: #1890ff;

  &:hover {
    cursor: pointer;
    background-color: #3ba6ff;
  }
`

const Login = styled.div`
  position: absolute;
  right: 100px;
`
export const Header = () => {
    return (
        <Head>
            <Img src={logoUrl} alt="logo"/>
            <nav>
                <StyledLink to='/' className={(isActive) => (isActive ? 'active' : '')}>首页</StyledLink>
                <StyledLink to='/history' className={(isActive) => (isActive ? 'active' : '')}>上传历史</StyledLink>
                <StyledLink to='/about' className={(isActive) => (isActive ? 'active' : '')}>关于</StyledLink>
            </nav>
            <Login>
                <Button>登入</Button>
                <Button>注册</Button>
            </Login>
        </Head>
    )
}