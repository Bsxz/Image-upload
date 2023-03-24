import {createContext, useContext} from "react";
import AuthStore from './auth';
import ImageStore from './image'
import ListStore from './list'

const context = createContext({
    AuthStore: new AuthStore(),
    ImageStore: new ImageStore(),
    ListStore: new ListStore()
})

export const useStore = () => useContext(context)
