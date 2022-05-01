import React from 'react'
import styled from 'styled-components'
import {Zoom} from 'react-reveal'
import { useSelector } from 'react-redux'

function ConversationPost(props) {
  let{UserCredentials} = useSelector((state)=>state.slackReducer)
  let letter = UserCredentials.UserName.charAt(0);//gets the letter at a specified index and returns it
  console.log(letter)
  return (
      <Zoom center>
    <Container>
           <User>
             <h2>{letter}</h2>
           </User>
           <Details>
               <h4>{props.name}</h4>
               <p>{props.text}</p>
           </Details>
           <small>{props.date}<p>{props.time}</p></small>
    </Container>
    </Zoom>
  )
}

export default ConversationPost
let Container = styled.div`
 display:flex;
 justify-content:left;
 padding:10px 12px;
 small{
     display:flex;
     margin:0 2%;
     justify-content:space-between;
     color:gray;
     font-size:13px;
 }
`
let User = styled.div`
height:45px;
width:45px;
border-radius:10px;
background-color: rgb(123, 62, 202);
margin:0 1%;
h2{
    color:#fff;
    font-size:30px;
    font-weight:600;
    text-align:center;
}
`
let Details = styled.div`
 text-align:left;
  h4{
      font-weight:500;
  }
`