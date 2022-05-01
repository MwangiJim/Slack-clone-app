import { faClock, faQuestionCircle } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'


function Header() {
    let{UserCredentials} = useSelector((state)=>state.slackReducer)
    let letter = UserCredentials.UserName.charAt(0)
  return (
    <Container>
          <LeftSide>
              <h2>{letter}</h2>
          </LeftSide>
          <Center>
              <FontAwesomeIcon icon={faClock} />
              <div className='input__section'>
                   <FontAwesomeIcon icon={faSearch}/>
                   <input
                    placeholder='Search JIMFAM'
                   />   
              </div>
          </Center>
              <FontAwesomeIcon icon={faQuestionCircle} className='question'/>
    </Container>
  )
}

export default Header
let Container = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 background-color:rgb(70,28,110);
 padding:6px 0;
 color:#fff;
 .question{
     margin:0 1%;
 }
`
let LeftSide = styled.div`
 height:35px;
 width:35px;
 border-radius:50%;
 background-color: rgb(123, 62, 202);
 margin:0 1%;
 h2{
     color:#fff;
     font-size:20px;
     font-weight:600;
     text-align:center;
 }
`
let Center = styled.div`
 display:flex;
 justify-content:space-between;
 align-items:center;
 .input__section{
     display:flex;
     justify-content:left;
     align-items:center;
     background:transparent;
     padding:0 10px;
     width:700px;
     height:30px;
     border-radius:6px;
     border:2px solid gray;
     margin: 0 20px;
     input{
         background:transparent;
         outline:none;
         border:none;
         width:700px;
         height:30px;
         padding: 0 10px;
     }
 }
`