import React, { useEffect, useRef, useState } from 'react'
import MessageSelf from './MessageSelf'
import MessageOther from './MessageOther'
import { useSelector } from 'react-redux'
import { GetMemberData, GetMessage } from '../../Axios/Axios'
import { useParams } from 'react-router-dom'
import { socket } from "../../App";


const Conversation = () => {
  const {id}=useParams();

const[AllMessages,setAllMessages]=useState(null);
const accountHolder= useSelector(state=>state.user.user);

const chatContainerRef = useRef(null);





const scrollToBottom = () => {
  const container = chatContainerRef.current;
  if (container) {
    container.scrollTop = container.scrollHeight;
  }

  container?.scrollIntoView({transition:'smooth'})

};



const get=async()=>{
  const res=await  GetMessage(id);

  if(res.data.success==true){
    setAllMessages(res.data.get)
  }
}

useEffect(()=>{
  get();
},[id])


useEffect(()=>{
  scrollToBottom();
},[AllMessages])

const message=useSelector(state=>state.user.message)


useEffect(()=>{

  if(message != null){
    setAllMessages((prevMessages) => [...prevMessages, message]);
  }



},[message])



    return (
    <div ref={chatContainerRef} className='overflow-y-auto h-full'>
      {
        AllMessages && AllMessages.length!=0 && AllMessages.map((val,index)=>{
if(val.sender==accountHolder._id){
  return <MessageSelf key={index} value={val} />
}else{
  return <MessageOther key={index} value={val}/>
}
        })
      }

    </div>
  )
}

export default Conversation
