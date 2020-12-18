import React from 'react'
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import colors from './colors';

export default function Header(){
    const history = useHistory();
    return(
        <StyledHeader>
            <span onClick={()=>history.push('/')}>RepoExams</span>
        </StyledHeader>
    );
}

const StyledHeader = styled.header`
    height:70px;
    width:100%;
    position:fixed;
    top:0;
    color:#FFF;
    background: ${colors.lightblue};
    font-family: 'Righteous' , cursive;
    padding:10px;
    font-size:38px;
    display:flex;
    align-items:flex-end;
`;