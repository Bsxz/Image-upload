import {observable, action, makeObservable, runInAction} from 'mobx'
import {message} from "antd";
import {Uploader} from "../modules";

class ListStore {
    list = []
    isLoading = false
    hasMore = true
    page = 0
    limit = 10

    constructor() {
        makeObservable(this, {
            list: observable,
            isLoading: observable,
            hasMore: observable,
            page: observable,
            limit: observable,
            append: action,
            find: action,
            remove: action
        })
    }

    remove() {
        this.list = []
        this.page = 0
        this.hasMore = true
    }

    append(newList) {
        this.list = this.list.concat(newList)
        this.page += 1
    }

    find() {
        this.isLoading = true
        Uploader.find({page: this.page, limit: this.limit})
            .then(list => {
                this.append(list)
                if (list.length < this.limit) runInAction(() => this.hasMore = false)
            })
            .catch(err => {
                message.error(`加载失败`)
            })
            .finally(() => {
                runInAction(() => this.isLoading = false)
            })
    }
}

export default ListStore
