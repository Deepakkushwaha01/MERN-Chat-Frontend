import { AddCircle, Search } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { styled } from 'styled-components'
import { AddMemberData, callUsers } from '../Axios/Axios'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

const OnlineUsers = () => {

  const allOnline=useSelector(state=>state.user.allUsers);

const[online,setonline]=useState(null)

useEffect(()=>{

 allOnline && setonline(allOnline)

},[allOnline])

const [val,setval]=useState('');

 const filter=(e)=>{
setval(e.target.value);
 }

 useEffect(()=>{
 const newVal=allOnline && allOnline.filter((value,index)=>{
return value.name.toLowerCase().includes(val)
  });

  console.log(newVal)

  setonline(newVal);


 },[val])

  return (
    <Div>
      <div className='header'>
<img src="/images/welcome.jpg" alt="" />
<h1> <div className='flex items-center gap-2'>Online Users <div className='bg-green-300 rounded-full w-[0.5rem] h-[0.5rem]'></div></div></h1>
      </div>

     <div className='input'>
      <IconButton>
        <Search sx={{fontSize: 25}}   />
      </IconButton>
      <input type="text" value={val} className='text-sm h-[2rem]' onChange={filter} />
     </div>

    <div className='h-full max-h-auto overflow-y-auto flex flex-col gap-[1rem]'>
{
  online && online.map((val,index)=>{
    return <div key={index} className='bg-white h-[4rem] rounded-md flex gap-[1vw] px-4'>
<div className=' w-[5%] grid place-items-center'>
  
  <div className='bg-[#dddedd] rounded-full w-[3rem] h-[3rem] grid place-items-center '>
{ val.name.slice(0,1) }

  </div>

</div>

<div className='mt-2 flex justify-start w-full gap-[1rem]'>
{
  val.name
}<div className='bg-green-300 mt-2 rounded-full w-[0.5rem] h-[0.5rem]'></div>
</div>


    </div>
  })
}
    </div>


     

    </Div>
  )
}

const Div=styled.section`
display: flex;
flex-direction: column;
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
  height: 4rem;
  border-radius: 5rem;
  display: flex;
gap: 1rem;
align-items: center;
padding: 0 1rem;
  input{
    width: 100%;
    font-size: 1rem;
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
margin-bottom: 2rem;
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


export default OnlineUsers
