import React from 'react'
import { useSelector } from 'react-redux'
import Login from '../Login';
import MainContainer from '../MainContainer';

const PrivateRoute = () => {
    const user=useSelector(state=>state.user.user);
    console.log(user);
  return (
    <div className='min-h-[100vh] h-auto grid place-items-center'>
      {
        user==null ? <Login/> :<MainContainer/>
      }
    </div>
  )
}

export default PrivateRoute
