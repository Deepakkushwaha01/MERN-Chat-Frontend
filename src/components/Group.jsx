import { Search } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { styled } from 'styled-components'

const Group = () => {
  return (
    <Div>
      <div className='header'>
<img src="/images/welcome.jpg" alt="" />
<h1>Available Groups</h1>
      </div>

     <div className='input'>
      <IconButton>
        <Search sx={{fontSize: 25}} />
      </IconButton>
      <input type="text" />
     </div>

     <div className='ug-list' >
<div className='list'>
  <p className='first'>T</p>
  <p className='sec'>Test Users #1</p>
</div>
<div className='list'>
  <p className='first'>T</p>
  <p className='sec'>Test Users #1</p>
</div>
<div className='list'>
  <p className='first'>T</p>
  <p className='sec'>Test Users #1</p>
</div>
<div className='list'>
  <p className='first'>T</p>
  <p className='sec'>Test Users #1</p>
</div>
<div className='list'>
  <p className='first'>T</p>
  <p className='sec'>Test Users #1</p>
</div>
<div className='list'>
  <p className='first'>T</p>
  <p className='sec'>Test Users #1</p>
</div>
<div className='list'>
  <p className='first'>T</p>
  <p className='sec'>Test Users #1</p>
</div>
<div className='list'>
  <p className='first'>T</p>
  <p className='sec'>Test Users #1</p>
</div>
<div className='list'>
  <p className='first'>T</p>
  <p className='sec'>Test Users #1</p>
</div>
<div className='list'>
  <p className='first'>T</p>
  <p className='sec'>Test Users #1</p>
</div>
<div className='list'>
  <p className='first'>T</p>
  <p className='sec'>Test Users #1</p>
</div>
<div className='list'>
  <p className='first'>T</p>
  <p className='sec'>Test Users #1</p>
</div>
<div className='list'>
  <p className='first'>T</p>
  <p className='sec'>Test Users #1</p>
</div>


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
overflow-y: scroll;
.list{
  display: flex;
  background-color: #fff;
gap: 2rem;
border-radius: 1.3rem;
height: 6rem;
padding: 0 3rem;
align-items: center;
font-size: 1.5rem;
margin-bottom: 2rem;
.first{
  background-color: red;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  display: grid;
  align-items: center;
  justify-content: center;
}
}

}


`


export default Group
