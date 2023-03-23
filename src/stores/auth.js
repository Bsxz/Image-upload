import {obvervable, action} from 'mobx'


class AuthStore {
    @obvervable isLogin = false;
    @obvervable isLoading = false;
    @obvervable values = {
        username: '',
        password: ''
    }

    @action setIsLogin(isLogin) {
        this.isLoading = isLogin
    }

    @action setUsername(username) {
        this.values.username = username
    }

    @action setPassword(password) {
        this.values.password = password
    }

    @action setLogin() {
        this.isLoading = true
    }

    @action register() {
        this.isLoading = false
    }

    @action logout() {
        this.isLogin = false
        this.values = {
            username: '',
            password: ''
        }
    }
}


export {AuthStore}