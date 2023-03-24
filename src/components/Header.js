import React, {useEffect} from "react";
import {Link, NavLink} from "react-router-dom";
import styled from "styled-components";
import {Button, message} from "antd";
import logoUrl from '../logo192.png'
import {observer} from "mobx-react";
import {runInAction} from "mobx";
import {useStore} from "../stores";
import {Auth} from "../modules";

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

const StyledBtn = styled(Button)`
  color: white;
  padding: 6px 16px;
  border: none;
  border-radius: 1px;
  margin-left: 20px;
  background-color: #1890ff;

  &:hover {
    color: white !important;
    cursor: pointer;
    background-color: #3ba6ff;
  }
`

const Login = styled.div`
  position: absolute;
  right: 100px;

  > span {
    color: white;
    font-size: 12px;
  }
`
export const Header = observer(() => {
    const {AuthStore,ListStore} = useStore()
    const logout = () => {
        AuthStore.isLogin = false
        ListStore.hasMore = true
        ListStore.list = []
        ListStore.page = 0
        Auth.logout()
    }

    useEffect(() => {
        if (Auth.getCurrentUser()) {
            runInAction(()=>AuthStore.isLogin = true)
            message.success(`登录成功`)
        }
    }, [AuthStore])

    return (
        <Head>
            <Img src={logoUrl} alt="logo"/>
            <nav>
                <StyledLink to='/' className={(isActive) => (isActive ? 'active' : '')}>首页</StyledLink>
                <StyledLink to='/history' className={(isActive) => (isActive ? 'active' : '')}>上传历史</StyledLink>
                <StyledLink to='/about' className={(isActive) => (isActive ? 'active' : '')}>关于</StyledLink>
            </nav>
            <Login>
                {
                    AuthStore.isLogin
                        ? <>
                            <span>{Auth.getCurrentUser().attributes.username}</span>
                            <StyledBtn onClick={logout}>注销</StyledBtn>
                        </>
                        : <>
                            <Link to='/login'><StyledBtn>登入</StyledBtn></Link>
                            <Link to='/register'><StyledBtn>注册</StyledBtn></Link>
                        </>
                }
            </Login>
        </Head>
    )
})