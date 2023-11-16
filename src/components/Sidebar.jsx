import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import {  AddCircle, GroupAdd, Nightlight, PersonAdd, Search } from '@mui/icons-material';
import Userlist from './Userlist';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import SideProfile from './dd/SideProfile';
import { GetMemberData } from '../Axios/Axios';


const Sidebar = () => {

    const navigate=useNavigate();

    const [open,close]=useState(false);

    const [conversation,setconversation]=useState(null);
    const[online,setonline]=useState(null)

 const sender= useSelector(state=>state.user.user._id);



 const getMember=async()=>{
 const res=await GetMemberData(sender); 

 if(res.data.success==true){
  console.log("ww")
    setconversation(res.data.get);
    setonline(res.data.get);
 }
}

useEffect(()=>{
getMember();

},[]) 




  return (
    <Div>
{/* ------------------------------------------------- Upper Sidbar ----------------------------------------------------------------- */}
<div className='flex justify-between bg-white items-center rounded-md  shadows'>
<div >
<IconButton onClick={()=>close(true)}>
<AccountCircleIcon  className='w-full h-full'  />
</IconButton>
</div>



<div>
<IconButton onClick={()=>{navigate("online-users")}}>
<PersonAdd  sx={{ fontSize: 20 }} />
</IconButton>



<IconButton  onClick={()=>{navigate("create-group")}}> 
<AddCircle sx={{ fontSize: 20 }} />
</IconButton>

<IconButton  onClick={()=>{dispatch(toogletheme())}} >
<Nightlight sx={{ fontSize: 20 }} />
</IconButton>
</div>

</div>
{/* ---------------------------------------------- End Upper Sidbar ----------------------------------------------------------------- */}
<div className='w-full h-full relative'>
    <SideProfile open={open} close={close} />
</div>
{/* ----------------------------------------------- Middle Sidbar ------------------------------------------------------------------ */}   
   

{/* -------------------------------------------- End Middle Sidbar ------------------------------------------------------------------ */}   
   
 <div className='bg-white shadows rounded-md p-3 flex flex-col gap-5'>
 {
    conversation && conversation.length>0 && conversation.map((val,index)=>{
        return <Userlist key={index} {...val}/>
    } )
 }

 </div>  
   </Div>
  )
}

const Div=styled.section`
margin: 0.5rem;
display: grid;
grid-template-rows: 0.1fr 0fr  1fr;
row-gap: 1.5rem;

.shadows{
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
}



`
export const callagain=()=>{
  console.log("working")
  getMember();
}

export default Sidebar