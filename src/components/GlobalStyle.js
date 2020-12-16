import React from 'react'
import styled from 'styled-components';
import Header from './Header';

export default function GlobalStyle(props){
    return (
        <StyledBody>
            <Header/>
            {props.children}
        </StyledBody>
    );

    
}

const StyledBody = styled.div`
    padding-top:70px;
    width: 100%;
    min-height: 100vh;
    background: rgb(222,222,222);
`