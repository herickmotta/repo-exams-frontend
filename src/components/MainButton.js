import React from 'react'
import styled from 'styled-components';
import colors from './colors';

export default function MainButton(props){
    return(
        <Button>
            {props.children}
        </Button>
    );
}

const Button = styled.button`
    display:flex;
    align-items:center;
    justify-content:center;
    text-align:center;
    margin-bottom:20px;
    width: 120px;
    border-radius:10px;
    background: ${colors.lightblue};
    color:#FFF;
    padding: 10px;
    font-size:20px;
    font-family:'Roboto', sans-serif;
    & >:first-child{
        margin-right:5px;
    }
`