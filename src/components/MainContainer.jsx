import React from 'react'
import { styled } from 'styled-components'
import Sidebar from './Sidebar'
import Chatarea from './Chatarea'
import Welcome from './Welcome'

import OnlineUsers from './OnlineUsers'
import CreateGroup from './CreateGroup'
import Group from './Group'
import { Outlet } from 'react-router-dom'

const MainContainer = () => {
  return (
    <Main>
<Sidebar/>
<Outlet/>


{/* 
 <Welcome/> 
<Chatarea/>
<CreateGroup/> 
 <Group/> 
 <OnlineUsers/>  */}
    </Main>
  )
}


const Main=styled.section`
height: 90vh;
max-height: 90vh;
width: 90vw;
background-color: #F4F4F8;
border-radius: 1rem;
display: grid;
grid-template-columns: 0.3fr 1fr;

padding: 1rem;
column-gap: 1rem;
`


export default MainContainer