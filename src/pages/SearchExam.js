import axios from 'axios';
import React,{useState,useEffect} from 'react'
import styled from 'styled-components';
import colors from '../components/colors';
import ItemList from '../components/ItemList'

export default function SearchExam() {
    const [listBy,setListBy] = useState('subject');
    const [list,setList] = useState([]);
    useEffect(()=>{
        console.log('me chamou')
        getExams();
    },[listBy]);

    console.log(listBy);
    function getExams(){
        const req = axios.get(`http://localhost:3000/api/exams?listBy=${listBy}`);
        req.then((response)=>{
            setList(response.data);
        }).catch(e=>console.log(e));
    }
    return (
        <StyledSearch>
            <h1>Search a Exam</h1>
            <ListByBox>
                <div>List by:</div>
                <select defaultValue="subject" onChange={(e) => setListBy(e.target.value)} name="listBy">
                    <option value="subject">Subject</option>
                    <option value="professor">Professor</option>
                </select>
            </ListByBox>

            <ExamRepository>
                {list.length === 0 
                    ?
                    <EmptyBox>No exams found :(</EmptyBox>
                    :
                    list.map(item=>
                        <ItemList
                            listBy={listBy}
                            key={item.id}
                            item={item}
                        />
                    )
                }
            </ExamRepository>
        </StyledSearch>
    );
}

const StyledSearch = styled.div`
    width: 100vw;
    display:flex;
    flex-direction:column;
    align-items:center;
    font-family:'Roboto',sans-serif;
    font-weight:bold;
    h1{
        margin: 20px 0;
        color: ${colors.lightblue};
        font-size:28px;
    }
`

const ExamRepository = styled.div`
    display:flex;
    flex-direction:column;
    background: #FFF;
    width:80%;
    border-radius:10px;
    margin: 15px 0;
    min-height:200px;
`
const EmptyBox = styled.div`
    flex-grow:1;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight: normal;
    opacity:60%;
`
const ListByBox =  styled.div`
    display:flex;
    align-items:center;
    color: #FFF;
    background: ${colors.lightblue};
    padding: 5px 10px;
    border-radius:10px;
    font-size: 18px;
    font-weight: normal;
    & >div{
        margin-right:5px;
    }
    select{
        background:inherit;
        color:inherit;
        border:none;
        font-size:inherit;
        font-weight:bold;
        &:active,&:focus{
            outline:none;
            border:none;
        }
    }
`