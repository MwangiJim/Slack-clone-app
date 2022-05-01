import React from 'react'
import styled from 'styled-components'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { UserCred } from '../redux/reducer.js/reducerSlice'
import { db } from '../firebase'
import { useSelector } from 'react-redux'

function GoogleSignIn() {
    let auth = getAuth()
    let{ UserCredentials}=useSelector((state)=>state.slackReducer)
    let dispatch = useDispatch()
    let provider = new GoogleAuthProvider()
    const SignInWithGoogle=()=>{
        signInWithPopup(auth,provider)
        .then((data)=>{
           dispatch(UserCred({
              Email:data.user.email,
              UserName:data.user.displayName,
              Photo:data.user.photoURL
           }))
        })
    }
    console.log(UserCredentials)
  return (
    <Container>
        <Form>
            <img src='/Images/download.png'/>
            <h2>Sign in to the CABFEEFAM</h2>
            <p>cabfee.slack.com</p>

            <button onClick={SignInWithGoogle}>Sign in with Google</button>
        </Form>
    </Container>
  )
}

export default GoogleSignIn
let Container = styled.div`
  width:100%;
  height:100vh;
  top:0;
  left:0;
  position:fixed;
  z-index:50;
  background-color:#fff;
`
let Form = styled.div`
 width:450px;
 height:300px;
 top:50%;
 left:50%;
 position:absolute;
 transform:translate(-50%,-50%);
 background-color:#fff;
 box-shadow:0 0 2px 2px #333;
 img{
     width:230px;
     left:5%;
     position:relative;
 }
 text-align:center;
 button{
     margin:5% 0;
     background-color:green;
     outline:none;
     border:none;
     color:#fff;
     border-radius:5px;
     padding:12px 50px;
     cursor:pointer;
 }
`