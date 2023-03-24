import React from "react"
import List from "../components/List";
import styled from "styled-components";
const StyledList = styled.div`
      margin-bottom: 40px;
    `
export default function History() {
    return (
        <>
            <StyledList>历史上传</StyledList>
            <List/>
        </>
    )
}