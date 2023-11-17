import React, { useEffect, useState } from 'react'
import { IconButton } from '@mui/material'
import {  Send } from '@mui/icons-material'
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AddMessage } from '../../Axios/Axios';
import { socket } from '../../App';
import { addmessage } from '../Feature/ThemeSlice';

const InputSection = ({reciver}) => {


  const {id}=useParams();


  const accountHolder= useSelector(state=>state.user.user);


const [inputVal,setinputVal]=useState({
  conversationID:null,
  sender:null,
  reciver:null,
  message:""
})


useEffect(()=>{
  reciver && setinputVal({
    ...inputVal,
    reciver:reciver._id
  })
},[reciver])

useEffect(()=>{

  id && accountHolder && setinputVal({
  ...inputVal,
  conversationID:id,
  sender:accountHolder._id
})

},[id,accountHolder])


const dispatch=useDispatch();

/* ------------------------------------------- */
const sendMessage=async()=>{
const res=await AddMessage(inputVal);
if(res.data.success==true){
 setinputVal({
 ...inputVal,
  message:""
 }) 
}


socket.on("chat",(newMessage)=>{
 dispatch(addmessage(newMessage))
}) 

}
/* -------------------------------- */

const setval=(e)=>{

  setinputVal({...inputVal,message:e.target.value})
}

const handle=(e)=>{

if(e.key=='Enter'){
  sendMessage()
}
}
  
  return (
    <div className='bg-white h-[4rem] flex px-4'>
    <input type="text" placeholder='Type a message' value={inputVal.message} onKeyUp={handle} onChange={setval} className='w-full h-full outline-none' />
    
    <div onClick={()=>sendMessage()} className='grid place-items-center '>
    <IconButton>
    <Send sx={{fontSize:20}} />
    </IconButton>
    </div>
    
    </div>
  )
}

export default InputSection
