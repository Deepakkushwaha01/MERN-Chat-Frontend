import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { styled } from 'styled-components'

const Userlist = (conversation) => {

  const accountHolder= useSelector(state=>state.user.user);

const {reciver}=conversation;

const lastmessage= useSelector(state=>state.user.message);

  const navigate=useNavigate();


  return (
    <Div  className='border-b-2' onClick={()=>navigate(`chat/${conversation._id}`)} >
    <div className='flex  h-[4rem] items-center gap-2 p-1 '>

 <p className=' bg-[#dddedd] text-white w-[4rem] h-[3rem] grid place-items-center font-bold text-2xl rounded-full'>
  {reciver.name[0]}</p>

<div className='w-full h-full flex flex-col '>
<p className='text-[1rem]'>{accountHolder.name==reciver.name ?conversation.sender.name:reciver.name }</p>
<p className='text-slate-300'>{reciver&& lastmessage&& lastmessage.reciver==reciver._id? <div>{`${lastmessage.message.slice(0,10)}...`}</div>:""}</p>
</div>


</div> 
    </Div>
  )
}

const Div=styled.section`

`


export default Userlist