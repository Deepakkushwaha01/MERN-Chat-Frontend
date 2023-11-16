import styled from '@emotion/styled'
import { ArrowBack } from '@mui/icons-material'
import { Box, Drawer, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from '../Feature/ThemeSlice'
import { useNavigate } from 'react-router-dom'
import { socket } from '../../App'

const SideProfile = ({open,close}) => {


const user=useSelector(state=>state.user.user);
const dispatch=useDispatch();

const navigate=useNavigate();

const toggleDrawer=()=>{
    close(false)
}

const drawerhai={
    position:'absolute',
    width:"25%",
    left:"2rem",
    top:"2.2rem",
 height:"90%",


}

const Div=styled(Box)`
    background-color: #2196f3;
    height: 15.5%;
display: flex;
gap: 2rem;
align-items: end;
padding: 2rem 2rem;
color: #ffffff;

&>svg,&>p{
    font-size: 1.7rem;
    font-weight: 500;
}
&>svg{
    cursor: pointer;
}

&>p{
    line-height: 1.8rem;
}

`



  return (
    <Drawer
    open={open}
    onClose={toggleDrawer}
    PaperProps={{sx:drawerhai}}
   style={{zIndex:"1500"}}
   hideBackdrop={true}
  >
 
<Div>
<ArrowBack onClick={()=> close(false)}   />
<Typography  >Profile</Typography>
</Div>

<div className='flex flex-col justify-between gap-8 px-4 my-4'>
<div className='flex justify-center items-center w-full'>
<img src="/images/avtar.jpg" alt="" className='w-[10rem] rounded-full shadow-2xl h-[10rem]' />
</div>

<div>
    <h1 className='text-xl'>Name: <span className='font-bold tracking-wider'>{user.name}</span></h1>
</div>

<div>
<h1 className='text-xl'>Email: <span className='font-bold tracking-wider'>{user.email}</span></h1>  
</div>

<div className='grid place-items-center'>
    <button onClick={()=>{dispatch(deleteUser()),navigate('/'),socket.disconnect();}} className='hover:scale-[1.1] duration-300 ease-in-out'>
    <img src="/images/log-out.png" alt="" className='w-[3rem]' />logout
    </button>
</div>

</div>

</Drawer>
  )
}

export default SideProfile
