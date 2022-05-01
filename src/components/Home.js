import React from 'react'
import styled from 'styled-components'
import LeftSideBar from './LeftSideBar'
import MessageComponent from './MessageComponent'
import { BrowserRouter, Routes, Route, } from "react-router-dom";

function Home() {
  return (
    <Container>
     <BrowserRouter>
       <LeftSideBar/>
        <Routes>
          <Route path='/message' element={<MessageComponent/>}></Route>
        </Routes>
     </BrowserRouter>  
    </Container>
  )
}

export default Home
let Container = styled.div`
 display:flex;
 justify-content:space-between;
 width:100%;
`