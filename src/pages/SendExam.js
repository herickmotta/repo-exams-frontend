import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { FiSend } from 'react-icons/fi';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../components/colors';
import MainButton from '../components/MainButton';

export default function SendExam(){
    const [year,setYear] = useState('');
    const [periodsList,setPeriodsList] = useState([]);
    const [professorsList,setProfessorsList] = useState([]);
    const [subjectsList,setSubjectsList] = useState([]);
    const [periodId,setPeriod] = useState();
    const [subjectId,setSubjectId] = useState("null");
    const [professorId,setProfessorId] = useState("null");
    const [examUrl,setExamUrl] = useState('');
    const [buttonDisabled,setButtonDisabled] = useState(false);
    const history = useHistory();
    function submitForm(e){
        if(subjectId === "null"){
            return alert("Please select a subject")
        } else if(professorId === "null"){
            return alert("Please select a professor")
        } else if(setButtonDisabled){
            return;
        }
        setButtonDisabled(true);
        const req = axios.post("http://localhost:3000/api/exams",{
            year,
            subjectId,
            professorId,
            periodId,
            URL: examUrl
        });
        req.then((response)=>{
            alert('sucess');
            setButtonDisabled(false);
        }).catch(e=>{
            console.log(e.response.message);
            setButtonDisabled(false);
        });

    }
    
    useEffect(() => {
        getPeriods();
        getProfessors();
        getSubjects();
    }, [])

    useEffect(() => {
        getProfessors();
    }, [subjectId])

    useEffect(() => {
        getSubjects();
    }, [professorId])

    function getPeriods(){
        const req = axios.get("http://localhost:3000/api/periods");
        req.then(response => setPeriodsList(response.data));
        req.catch(e=>console.log(e));
    }
    function getProfessors(){
        const req = axios.get(`http://localhost:3000/api/professors/subject/${subjectId}`);
        req.then(response => setProfessorsList(response.data));
        req.catch(e=>console.log(e));
    }
    function getSubjects(){
        const req = axios.get(`http://localhost:3000/api/subjects/professor/${professorId}`);
        req.then(response => setSubjectsList(response.data));
        req.catch(e=>console.log(e));
    }

    return(
        <StyledSend>
            <h1>Send a Exam</h1>
            <StyledForm onSubmit={submitForm}>
                <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    name="year"
                    placeholder="Year"
                    required

                />
                <select defaultValue="" onChange={(e)=>setPeriod(e.target.value)} name="period">
                    <option value="" hidden disabled>Select Period</option>
                    {
                        periodsList.map((p)=>{
                            return <option key={p.id} value={p.id}>{p.name}</option>
                        })
                    }
                </select>
                <select defaultValue="null" onChange={(e)=>setSubjectId(e.target.value)} name="subject">
                    <option value="null">Select Subject</option>
                    {
                        subjectsList.map((s)=>{
                            return <option key={s.id} value={s.id}>{s.name}</option>
                        })
                    }
                </select>
                <select defaultValue="null" onChange={(e)=>setProfessorId(e.target.value)} name="professor">
                    <option value="null" >Select Professor</option>
                    {
                        professorsList.map((p)=>{
                            return <option key={p.id} value={p.id}>{p.name}</option>
                        })
                    }
                </select>
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
            <MainButton>
                <span  onClick={()=>history.push('/')} >Back</span>
            </MainButton>
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
    input,select{
        background:#FFF;
        height:38px;
        width:100%;
        font-size:18px;
        border-radius:5px;
        padding:0 15px;
        margin-bottom:10px;
        color:#333;
        border:none;
        &::placeholder{
            font-size:18px;
            color:#333;
        }
    }
    button{
        margin-top:20px;
    }
`