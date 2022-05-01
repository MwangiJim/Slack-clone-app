import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { AddChannel } from '../redux/reducer.js/reducerSlice'

function ChannelPopup() {
    let dispatch = useDispatch()
    let{Channels} = useSelector((state)=>state.slackReducer)
    let[Channel,setChannel] = React.useState({
        input:''
    })
    const HandleInput =(e)=>{
        setChannel((prevState)=>{
            return{
                ...prevState,
                [e.target.name]:e.target.value
            }
        })
    }
    const CreateChannel=()=>{
        if(Channel.input){
            dispatch(AddChannel({
                NewChannel:Channel.input
            }))
            setBox((prevBox)=>!prevBox)
        }
    }
    console.log(Channels)
    let[Box,setBox] = useState(false)

    let styles = {
        display:Box?'none':'block'
    }
  return (
    <Container  style={styles}>
        <h2>Channel</h2>
        <input
         type='text'
         placeholder='Channel name'
         value={Channel.input}
         name='input'
         onChange={HandleInput}
        />
        <br/>
        <button onClick={CreateChannel}>Create Channel</button>
    </Container>
  )
}

export default ChannelPopup
let Container = styled.div`
  bottom:20%;
  left:150px;
  position:absolute;
  width:350px;
  height:140px;
  background-color:#fff;
  border-radius:5px;
  box-shadow:0 0 4px 4px #000;
  overflow:hidden;
  h2{
      width:100%;
      padding:5px 4px;
      background-color:#333;
      color:#fff;
  }
  input{
      width:80%;
      height:35px;
      border:2px solid #000;
      border-radius:8px;
      margin:4px 3px;
      padding: 0 15px;
  }
  button{
      width:40%;
      margin:2% 1%;
      border-radius:5px;
      background-color:#333;
      color:#fff;
      outline:none;
      border:none;
      cursor:pointer;
      padding:12px 0;
  }
`