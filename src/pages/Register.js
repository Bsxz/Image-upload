import React from "react";
import {useNavigate} from "react-router";
import {observer} from "mobx-react"
import styled from "styled-components";
import {Form, Button, Input, message} from 'antd'
import {useStore} from "../stores";

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
        AuthStore.register()
            .then(resolve => {
                message.success(`登录成功`)
                navigate('/')
            })
            .catch(err => {
                message.error(`注册失败`)
            })
    };
    const validateUsername = (rule, value) => {
        if (!value) return Promise.reject('用户名不能为空')
        if (/\W/.test(value)) return Promise.reject('只能是数字下划线')
        if (value.length < 4 || value.length > 10) return Promise.reject('用户名最小长度为4，最大长度为10')
        return Promise.resolve()
    }

    const validateConfirm = ({getFieldValue}) => ({
        validator(rule, value) {
            if (getFieldValue('password') === value) return Promise.resolve()
            return Promise.reject('两次密码不一致')
        }
    })
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
                                message: '密码最少八位数'
                            },
                            {
                                max: 14,
                                message: '密码最多十六位数'
                            }
                        ]}
                    >
                        <Input.Password/>
                    </Form.Item>
                    <Form.Item
                        label="密码"
                        name="passwordConfirm"
                        rules={[
                            {
                                required: true,
                                message: '再次输入密码',
                            },
                            validateConfirm
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
