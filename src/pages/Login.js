import React from "react";
import {observer} from 'mobx'
import {useStore} from "../stores";

export default observer(() => {
    const {AuthStore} = useStore()
    console.log(AuthStore)
    return (
        <>
            <h1>Login</h1>
        </>
    )
})
