import {observable, action, makeObservable} from 'mobx'
import {message} from "antd";
import {Uploader} from "../modules";

class ListStore {
    list = []
    isLoading = false
    hasMore = true
    page = 0
    limit = 10

    append(newList) {
        this.list = this.list.concat(newList)
    }

    find() {
        this.isLoading = true
        Uploader.find({page: this.page, limit: this.limit})
            .then(list => {
                this.append(list)
                if (list.length < (this.limit * this.page)) this.hasMore = false
            })
            .catch(err => {
                message.error(`加载失败`)
            })
            .finally(() => {
                this.isLoading = false
            })
    }

    constructor() {
        makeObservable(this, {
            list: observable,
            isLoading: observable,
            hasMore: observable,
            page: observable,
            limit: observable,
            append: action,
            find: action
        })
    }
}

export default ListStore
