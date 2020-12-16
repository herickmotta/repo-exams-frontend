import React,{useState} from 'react'
import { FiSend } from 'react-icons/fi';
import styled from 'styled-components';
import colors from '../components/colors';
import MainButton from '../components/MainButton';

export default function SendExam(){
    const [year,setYear] = useState('');
    const [period,setPeriod] = useState('');
    const [subject,setSubject] = useState('');
    const [professor,setProfessor] = useState('');
    const [examUrl,setExamUrl] = useState('');
    return(
        <StyledSend>
            <h1>Send a Exam</h1>
            <StyledForm>
                <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    name="year"
                    placeholder="Year"
                    required
                />
                <input
                    type="text"
                    value={period}
                    onChange={(e) => setPeriod(e.target.value)}
                    name="period"
                    placeholder="Period"
                    required
                />
                <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    name="subject"
                    placeholder="Subject"
                    required
                />
                <input
                    type="text"
                    value={professor}
                    onChange={(e) => setProfessor(e.target.value)}
                    name="professor"
                    placeholder="Professor"
                    required
                />
                <input
                    type="url"
                    value={examUrl}
                    onChange={(e) => setExamUrl(e.target.value)}
                    name="examurl"
                    placeholder="URL"
                    required
                />

                <MainButton>
                    <FiSend/>
                    Send
                </MainButton>
            </StyledForm>
        </StyledSend>
    );
}

const StyledSend = styled.div`
    width: 100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family:'Roboto',sans-serif;
    font-weight:bold;
    color: ${colors.lightblue};
    font-size:28px;
    h1{
        margin: 20px 0;
    }
`

const StyledForm = styled.form`
    font-weight:normal;
    display:flex;
    flex-direction:column;
    align-items:center;
    width:80%;
    input{
        background:#FFF;
        height:38px;
        width:100%;
        font-size:18px;
        border-radius:5px;
        padding:15px;
        margin-bottom:10px;
        color:#333;
        &::placeholder{
            font-size:18px;
            color:#333;
        }
    }
    button{
        margin-top:20px;
    }
`