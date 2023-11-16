import { Delete, Send } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import MessageSelf from './message/MessageSelf'
import MessageOther from './message/MessageOther'
import { useParams } from 'react-router-dom'
import { callSingleUsers } from '../Axios/Axios'
import { socket } from '../App'
import { useSelector } from 'react-redux'
import Conversation from './message/Conversation'
import InputSection from './message/InputSection'

const Chatarea = () => {
  const {id}=useParams();

  const accountHolder= useSelector(state=>state.user.user);

const [user,setuser]=useState(null);

const get=async()=>{
  const res=await callSingleUsers(id);
  if(res.data.success==true){
    if(res.data.allUsers.reciver._id==accountHolder._id){
      setuser(res.data.allUsers.sender);
    }
   else {
    setuser(res.data.allUsers.reciver);
   }
  }
}


useEffect(()=>{
 get();

},[id])



/* ------------------------------------------------------------- For Online Show ------------------------------------------------- */

const allusers=useSelector(state=>state.user.allUsers);   //Online User from soket.io

const [status,setstatus]=useState(false);

const d=user&& allusers && allusers.some(val=>val.id==user._id);

useEffect(()=>{
  if(d==true){
    setstatus(true);
  }
  else if (d==false){
    setstatus(false);
  }
},[d])

/* -------------------------------------------------------------------------------------------------------------------------------- */

  return (
    <Div className='w-full h-[85vh] flex flex-col '>
{/* ------------------------------------------------------------ Header section ----------------------------------------------------- */}
<div className='h-[10%]  bg-white  px-4' >

<div className='flex w-full h-full items-center gap-4 '>
<p className='w-[3rem] h-[3rem] bg-[#dddedd] grid place-items-center rounded-full'>{user && user.name.slice(0,1)}</p>
<div className='w-full   h-full flex flex-col justify-center'>
<p className='text-lg'>{user && user.name}</p>
<p className='text-sm text-slate-400'>{status==true ? 

<div className='flex items-center gap-2'>Online <div className='bg-green-300 rounded-full w-[0.5rem] h-[0.5rem]'></div></div>
:
<div className='flex items-center gap-2 '>Offline <div className='bg-red-300 rounded-full w-[0.5rem] h-[0.5rem]'></div></div>

}</p> 
</div>



<IconButton  className='dele'>
  <Delete sx={{fontSize: 20 }} />
</IconButton>
</div>
</div>
{/* ------------------------------------------------------------ Header End ------------------------------------------------------- */}

{/* -------------------------------------------------------- Massage Section ------------------------------------------------------- */}
 <div className='h-[80%]'>
<Conversation />

</div> 
{/* ------------------------------------------------------------Message End------------------------------------------------------- */}


{/* ---------------------------------------------------------- Input Section ------------------------------------------------------- */}

<div className='h-[10%]'>
  <InputSection reciver={user} />
</div>

{/* ------------------------------------------------------------Input End ------------------------------------------------------- */}

    </Div>
  )
}

const Div=styled.section`
background-image: url('/images/background.png');
background-size: contain;

.header{
  background-color: #fff;
  display: grid;
  justify-items: center;
  align-items: center;
  .inner{
width: 90%;
display: grid;
column-gap: 1rem;
grid-template-columns: 4rem 1fr 3rem;
grid-template-rows: auto auto;
.name{
  font-size: 1.3rem;
  align-self: center;
}
.time{
  
}
.icon{
  grid-column: 1/2;
  grid-row: 3/-3;
  background-color: #e9e9e9;
  border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
}

.dele{
  grid-column: 3/4;
  grid-row: 1/2;
  
}
  }
  
  
}
.footer{
  background-color: #fff;
  padding: 1rem;
  display: flex;
  gap: 0.5rem;
  input{
    border: none;
    outline: none;
    font-size: 1.5rem;
    padding: 0.5rem;
    width: 100%;
  }
}
`


export default Chatarea