import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../components/colors';
import {FiSend,FiSearch} from 'react-icons/fi'
export default function Home(){
    return(
        <StyledHome>
            <Link to='/search'>
                <FiSearch/> Search
            </Link>
            <Link to='/send'>
                <FiSend/> Send
            </Link>
        </StyledHome>
    );
}

const StyledHome = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height:100vw;
    a{
        text-align:center;
        margin-bottom:20px;
        width: 120px;
        border-radius:10px;
        display:block;
        background: ${colors.lightblue};
        color:#FFF;
        padding: 15px;
        font-size:20px;
        font-family:'Roboto', sans-serif;
    }
`

