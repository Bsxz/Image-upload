import React from "react";
import {useNavigate} from 'react-router'
import {observer} from "mobx-react"
import {useStore} from "../stores";
import styled from "styled-components";
import {Form, Button, Input} from 'antd'
import {message} from "antd"

const Login = styled.div`
  max-width: 600px;
  padding: 20px;
  margin: 40px auto;
  box-shadow: 2px 2px 4px 1px rgba(0, 0, 0, .2);
  border-radius: 5px;
  text-align: center;
`
export default observer(() => {
    const {AuthStore} = useStore()
    const navigate = useNavigate()
    const bindChange = (values) => {
        AuthStore.setUsername(values.username)
        AuthStore.setPassword(values.password)
        AuthStore.login()
            .then(resolve => {
                message.success(`登录成功`)
                navigate('/')
            })
    };

    const validateUsername = (rule, value) => {
        if (!value) return Promise.reject('用户名不能为空')
        if (/\W/.test(value)) return Promise.reject('只能是数字下划线')
        if (value.length < 4 || value.length > 10) return Promise.reject('用户名最小长度为4，最大长度为10')
        return Promise.resolve()
    }

    return (
        <>
            <Login>
                <h1>登入</h1>
                <Form
                    name="basic"
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 10,
                    }}
                    style={{
                        maxWidth: 600,
                    }}
                    initialValues={{
                        remember: true,
                    }}
                    onFinish={bindChange}
                    autoComplete="off"
                >
                    <Form.Item
                        label="用户名"
                        name="username"
                        rules={[
                            {
                                validator: validateUsername
                            }
                        ]}
                    >
                        <Input/>
                    </Form.Item>

                    <Form.Item
                        label="密码"
                        name="password"
                        rules={[
                            {
                                required: true,
                                message: '请输入密码',
                            },
                            {
                                min: 8,
                                message: '密码长度不正确'
                            },
                            {
                                max: 14,
                                message: '密码长度不正确'
                            }
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item
                        wrapperCol={{
                            offset: 8,
                            span: 10,
                        }}
                    >
                        <Button type="primary" htmlType="submit">
                            登入
                        </Button>
                    </Form.Item>
                </Form>
            </Login>
        </>
    )
})
