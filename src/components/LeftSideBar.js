import { faEnvelopeOpen, faMessage } from '@fortawesome/free-regular-svg-icons'
import { faArrowDown, faArrowUp, faBoxesStacked, faDisplay, faFile, faHashtag, faPencil, faPencilSquare, faPeopleGroup, faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import ChannelPopup from './ChannelPopup'
import { Link } from 'react-router-dom'

function LeftSideBar() {
    let{Channels,UserCredentials} = useSelector((state)=>state.slackReducer)
    let[Display,setDisplay] = useState(false)
    const ShowPopUp =()=>{
        setDisplay((prevForm)=>!prevForm)
    }
  return (
    <Container>
       <Header>
          <Left>
              <h2>CABFEE REACT HQ</h2>
              <Name>
                  <span></span>
                  <small>{UserCredentials.UserName}</small>
              </Name>
          </Left>
          <FontAwesomeIcon icon={faPencil } className='pencil'/>
       </Header>
       <Line>
           <FontAwesomeIcon icon={faMessage}/>
           <p>Threads</p>
       </Line>
       <Line>
           <FontAwesomeIcon icon={faDisplay}/>
           <p>Mentions & reactions</p>
       </Line>
       <Line>
           <FontAwesomeIcon icon={faEnvelopeOpen}/>
           <p>Saved items</p>
       </Line>
       <Line>
           <FontAwesomeIcon icon={faMessage}/>
           <p>Channel browser</p>
       </Line>
       <Line>
           <FontAwesomeIcon icon={faPeopleGroup}/>
           <p>People & user groups</p>
       </Line>
       <Line>
           <FontAwesomeIcon icon={faBoxesStacked}/>
           <p>Threads</p>
       </Line>
       <Line>
           <FontAwesomeIcon icon={faFile}/>
           <p>File browser</p>
       </Line>
       <Line>
           <FontAwesomeIcon icon={faArrowUp}/>
           <p>Show less</p>
       </Line>
       <Channel>
           <FontAwesomeIcon icon={faArrowDown}/>
           <p>Channels</p>
       </Channel>
       <Line onClick={ShowPopUp}>
           <FontAwesomeIcon icon={faPlus}/>
           <p>AddChannel</p>
       </Line>
       {Channels.map((data)=>{
           return(
            <Link to={`/message`}>
            <Line>
               <FontAwesomeIcon icon={faHashtag}/>
               <p>{data.NewChannel}</p>
             </Line>
             </Link>
           )
       })}
       {Display?<ChannelPopup/>:''}
    </Container>
  )
}

export default LeftSideBar
let Container = styled.div`
 flex-basis:20%;
 background-color:rgb(70,28,110);
 height:92.5vh;
 max-height:92.5vh;
 overflow-y:scroll;
 ::-webkit-scrollbar{
     width:5px;
     background-color:#fff;
     border-radius:8px;
 }
 ::-webkit-scrollbar-thumb{
     width:5px;
     background-color:#333;
     border-radius:8px;
 }
 ::-webkit-scrollbar-track{
     width:5px;
     background-color:#fff;
     border-radius:8px;
 }
`
let Header = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 h2{
     font-weight:600;
     font-size:17px;
 }
 margin: 1% 2%;
 color:#fff;
 .pencil{
     font-size:20px;
 }
 border-top:1px solid gray;
 border-bottom:1px solid gray;
 padding: 15px 0;
`
let Left = styled.div`
 text-align:left;
 h2{
     font-weight:500;
 }
`
let Name = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
 span{
     height:8px;
     width:8px;
     border-radius:50%;
     display:block;
     background-color:green;
 }
 small{
     font-weight:300;
     margin: 0 1%;
 }
`
let Line = styled.div`
 display:flex;
 justify-content:left;
 align-items:center;
 color:#fff;
 font-size:14px;
 cursor:pointer;
 margin:2% 1%;
 p{
     margin: 0 5%;
 }
 padding:8px 12px;
`
let Channel = styled.div`
display:flex;
justify-content:left;
align-items:center;
color:#fff;
p{
    margin: 0 5%;
}
padding:15px 12px;
border-bottom:1px solid gray;
margin:1% 0;
border-top:1px solid gray;
`