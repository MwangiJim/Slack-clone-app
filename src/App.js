import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import GoogleSignIn from './components/GoogleSignIn';
import { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';


function App() {
  let auth = getAuth()
  let[user,setUser] = useState(null)
  useEffect(()=>{
    onAuthStateChanged(auth,(AuthUser)=>{
      if(AuthUser){
        setUser(AuthUser)
        console.log('You are Logged In!!!')
        console.log(AuthUser)
      }
      else{
        setUser(null)
        console.log('You are logged out!!!!')
      }
    })
  },[])
  return (
    <div className="App">
      <Header/>
     {user? <Home/>:<GoogleSignIn/>}
    </div>
  );
}

export default App;