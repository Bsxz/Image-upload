import React, {useEffect} from "react"
import List from "../components/List";
import styled from "styled-components";
import {useStore} from "../stores";

const StyledList = styled.div`
  margin-bottom: 40px;
`
export default function History() {
    const {ListStore} = useStore()
    useEffect(() => {
        return () => {
            ListStore.remove()
        }
    })
    return (
        <>
            <StyledList>历史上传</StyledList>
            <List/>
        </>
    )
}