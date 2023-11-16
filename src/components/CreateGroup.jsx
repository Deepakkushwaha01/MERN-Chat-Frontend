import { AddCircle, Search } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { AddMemberData, callUsers } from '../Axios/Axios'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'


const CreateGroup = () => {

  const [onlineUser,setonlineUser]=useState(null);
  const[online,setonline]=useState(null)

const users=async()=>{
const res=await callUsers();

if(res.data.success==true){
  setonlineUser(res.data.red);
  setonline(res.data.red);
  
}else{
  
}

}

useEffect(()=>{
  users();
},[])


const sender=useSelector(state=>state.user.user);
console.log(sender)

const addMember=async(reciver)=>{

const res=await AddMemberData({sender,reciver});

console.log(res)
if(res.data.success==true){
  toast.success(`${res.data.message}`)

}else{
  toast.error(`${res.data.message}`)
}

}





const [val,setval]=useState('');



const filter=(e)=>{
setval(e.target.value);
 }



 useEffect(()=>{
 const newVal=onlineUser && onlineUser.filter((value,index)=>{
return value.name.toLowerCase().includes(val)
  });

  console.log(newVal)

  setonline(newVal);


 },[val])





  return (
    <Div>
      <div className='header'>
<img src="/images/welcome.jpg" alt="" />
<h1>All Users</h1>
      </div>

     <div className='input'>
      <IconButton>
        <Search sx={{fontSize: 25}}  />
      </IconButton>
      <input type="text"  value={val} className='text-sm h-[2rem]' onChange={filter}/>
     </div>

     <div className='ug-list   overflow-auto' >
      {
        online && online.map((val,index)=>{
          return  val._id !=sender._id && <div className='list flex justify-between'>
            <div className='flex justify-center  gap-5'>
            <p className='first'>{val.name.slice(0,1)}</p>
          <p className='sec'>{val.name}</p>
        
            </div>
          
          <IconButton onClick={()=>addMember(val)} > 
        <AddCircle sx={{ fontSize: 20 }} />
        </IconButton>
        
        </div>
        })
      }


     </div>

    </Div>
  )
}

const Div=styled.section`
display: grid;
grid-template-rows: 0.1fr 0.1fr 450px;
row-gap: 1.5rem;
.header{
  display: grid;
grid-template-columns: 0.1fr 1fr;
grid-template-rows: 5rem;
background-color: #fff;
align-items: center;
img{
  width: 100%;
  height: 100%;
  object-fit: contain;
}
h1{
  font-size: 1.5rem;
}
}
.input{
  background-color: #fff;
  display: flex;
gap: 1rem;
align-items: center;
padding: 0 1rem;
  input{
    width: 100%;
    font-size: 1.5rem;
    border: none;
    outline: none;
  }
}

.ug-list{
overflow: auto;
.list{
  display: flex;
  background-color: #fff;
gap: 2rem;
border-radius: 1.3rem;
height: 5rem;
padding: 0 2%;
align-items: center;
font-size: 1.2rem;
margin-bottom: 1rem;
.first{
  background-color: #dddedd;
  border-radius: 50%;
  width: 3.5rem;
  height: 3.5rem;
  display: grid;
  align-items: center;
  justify-content: center;
}
}

}


`


export default CreateGroup
