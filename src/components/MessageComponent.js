import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { AddPost } from '../redux/reducer.js/reducerSlice'
import ConversationPost from './ConversationPost'

function MessageComponent() {
  let{Posts,UserCredentials} = useSelector((state)=>state.slackReducer)
  let dispatch = useDispatch()
  let[Conversation,setConversation] = React.useState({
    input:''
  })
  let date = new Date()
  let tTime = date.toLocaleTimeString()
  let tDate = date.toLocaleDateString()
  //console.log(tDate)
  const HandleInput =(e)=>{
     setConversation((prevState)=>{
       return{
         ...prevState,
         [e.target.name]:e.target.value
       }
     })
  }
  const SendPost =(e)=>{
    e.preventDefault()
   if(Conversation.input){
    dispatch(AddPost({
      time:tTime,
      text:Conversation.input,
      date:tDate
   }))
   }
  }
  return (
    <Container>
        <form onSubmit={SendPost}>
              <input
              type='text'
              placeholder='Start a Conversation'
              value={Conversation.input}
              name='input'
              onChange={HandleInput}
            />
            <button>Send</button>
          </form>       

       {/*POsts Mapping*/}
       {Posts.map((data)=>{
         return(
           <ConversationPost
             name ={UserCredentials.UserName}
             text = {data.text}
             time = {data.time}
             date = {data.date}
           />
         )
       })}
    </Container>
  )
}

export default MessageComponent
let Container = styled.div`
 flex-basis:80%;
 form{
  display:flex;
  jsutify-content:space-between;
  align-items:center;
  bottom:3%;
    left:25%;
    position:absolute;
    width:900px;
    height:45px;
    padding:0 15px;
    border-radius:5px;
    border:2px solid #000;
    input{
     width:900px;
     border:none;
     outline:none;
     height:45px;
     padding:0 15px;
     border-radius:5px;
     background:transparent;
   }
   button{
     background:transparent;
     border:none;
     outline:none;
     padding:10px 20px;
     color:#000;
     cursor:pointer;
   }
 }
`