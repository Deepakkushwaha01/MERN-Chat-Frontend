import React from 'react'
import { styled } from 'styled-components'

const MessageSelf = ({value}) => {
  return (
    <Div>
        <div>
        <p className='msg'>{value&& value.message}</p>
        <p className='time'>{value&& value.timestamp}</p>
        </div>
     
    </Div>
  )
}

const Div=styled.section`
display: grid;
justify-content: end;
margin: 10px;


div{
    display: inline-block;
    background-color:#D9FDD3 /* #005C4B */;
    width:200px;
    height: auto;
    border-radius: 1rem;
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
.msg{
    font-size: 1rem;

}
.time{
    font-size: 1rem;
    justify-self: flex-end;
    align-self: self-end;
}
}


`

export default MessageSelf
