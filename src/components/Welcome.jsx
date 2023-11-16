import React from 'react'
import { styled } from 'styled-components'

const Welcome = () => {
  return (
    <Div>
        <img src='/images/welcome.jpg'/>
    </Div>
  )
}

const Div=styled.section`
overflow: hidden;
background-color: #fff;
border-radius: 1rem;
img{
    height:100%;
    width:100%;
   object-fit :contain ;
}
`



export default Welcome