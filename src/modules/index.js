import AV, {Query, User} from "leancloud-storage";

AV.init({
    appId: "lWKvbJN3T1x0zPAMir4WIEx8-gzGzoHsz",
    appKey: "19aaVkeH4EBvRLOlmx3VKL0i",
    serverURL: "https://lwkvbjn3.lc-cn-n1-shared.com",
});

const user = new User()
export const Auth = {
    register(username, password) {
        user.setUsername(username)
        user.setPassword(password)
        return new Promise((resolve, reject) => {
            user.signUp().then(user => {
                resolve(user)
            }, err => reject('注册失败'))
        })
    },
    login(username, password) {
        return new Promise((resolve, reject) => {
            User.logIn(username, password)
                .then(
                    loginedUser => resolve(loginedUser), error => reject('登入失败')
                )
        })
    },
    logout() {
        User.logOut()
    },
    getCurrentUser() {
        return User.current()
    }
}

export const Uploader = {
    add(file, filename) {
        const item = new AV.Object('Image')
        const avFile = new AV.File(filename, file)
        item.set('filename', filename)
        item.set('owner', AV.User.current())
        item.set('url', avFile)
        return new Promise((resolve, reject) => {
            item.save()
                .then(serverFile => {
                    resolve(serverFile)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    find({page = 0, limit = 0}) {
        const query = new Query('Image')
        query.include('owner')
        query.limit(limit)
        query.skip(page * limit)
        query.equalTo('owner', User.current())
        return new Promise((resolve, reject) => {
            query.find()
                .then(list => {
                    resolve(list)
                })
                .catch(err => reject(err))
        })
    }

}
