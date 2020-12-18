import React,{useState} from 'react'
import styled from 'styled-components';

export default function ItemList(props) {
    const {item,listBy} = props;
    const [isActive, setIsActive] = useState(false);

    function openURL(url){
        window.open(url,'_blank','location=yes,height=570,width=520,scrollbars=yes,status=yes');
    }

    return (
        <Item >
            <button className="title" onClick={()=>setIsActive(isActive ? false : true)}>
                <div>{item.name}</div>
                <div>{item.exams.length}</div>
            </button>
            <ul className={isActive ? "dropDown active" : "dropDown"}>
                {item.exams.map(e =>
                    <li onClick={()=> openURL(e.URL)}>
                        {`${e.year}.${e.period} - ${listBy === 'subject' ? e.professor : e.subject}`}
                    </li>
                )}
            </ul>
        </Item>
    )
}

const Item = styled.div`
    .title{
        width:100%;
        color:#333;
        font-size:12px;
        font-weight:normal;
        border-radius:5px;
        background: rgba(200,200,200,1);
        display:flex;
        justify-content:space-between;
        margin: 1px;
        padding:3px;
    }
    .dropDown{
        height:0;
        display:hidden;
        flex-direction:column;
        li{
            font-size:12px;
            font-weight:normal;
            padding:3px;
        }
    }
    .active{
        height:initial;
        display:initial;
    }
`