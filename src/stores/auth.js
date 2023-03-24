import {observable, action, makeObservable} from 'mobx'
import {Auth} from "../modules";
import {message} from "antd";


class AuthStore {
    isLogin = false;
    isLoading = false;
    values = {
        username: '',
        password: ''
    }

    constructor() {
        makeObservable(this, {
            isLogin: observable,
            isLoading: observable,
            values: observable,
            setUsername: action,
            setPassword: action,
            setIsLogin: action,
            login: action,
            setLogin: action,
            register: action,
            logout: action
        })
    }

    setUsername(username) {
        this.values.username = username
    }

    setPassword(password) {
        this.values.password = password
    }

    setIsLogin(isLogin) {
        this.isLoading = isLogin
    }

    login = () => {
        return new Promise((resolve, reject) => {
            Auth.login(this.values.username, this.values.password)
                .then(user => {
                    this.isLogin = true
                    resolve(user)
                })
                .catch(error => {
                    message.error(`用户名不存或用户名密码出错`)
                    reject('登入失败')
                })
        })
    }


    setLogin() {
        this.isLoading = true
    }

    register() {
        return new Promise((resolve, reject) => {
            Auth.register(this.values.username, this.values.password)
                .then(user => {
                    resolve(user)
                    this.login()
                })
                .catch(error => {
                    message.error(`注册失败`)
                    reject('注册失败')
                })
        })
    }

    logout() {
        this.isLogin = false
        this.values = {
            username: '',
            password: ''
        }
    }
}


export default AuthStore