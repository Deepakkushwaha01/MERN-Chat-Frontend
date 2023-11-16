import { styled } from "styled-components"

import MainContainer from "./components/MainContainer"
import Login from "./components/Login"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Welcome from "./components/Welcome"
import Chatarea from "./components/Chatarea"
import CreateGroup from "./components/CreateGroup"
import Group from "./components/Group"
import OnlineUsers from "./components/OnlineUsers"
import { Provider, useDispatch, useSelector } from "react-redux"
import { store } from "./components/Feature/Store"
import Register from "./components/Register"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PrivateRoute from "./components/Helper/PrivateRoute"
import io from 'socket.io-client';
import { useEffect } from "react"
import { addAllUsers } from "./components/Feature/ThemeSlice"

console.log(`${import.meta.env.VITE_BackEND}`)


export  const socket = io.connect('http://localhost:8000');

const App=()=>{

  const user= useSelector(state=>state.user.user);

  const dispatch=useDispatch();

  socket.on('updateUsers',(data)=>{
    
    dispatch(addAllUsers(data));
  })



  useEffect(() => {
    // Add 'beforeunload' event listener to handle cleanup
    const handleBeforeUnload = (event) => {
      // Disconnect the socket before the component unmounts
      socket.disconnect();
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    // Clean up the 'beforeunload' event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);




  return (
    <Div>

{/* {<MainContainer/>} */}
{/* <Login/> */}

<BrowserRouter>
<Provider store={store} >
<Routes>
  <Route path="/" element={user==null?<Login/>:<MainContainer/>} />
  <Route path="/register" element={<Register/>} />

  <Route path="" element={<MainContainer/>} >
<Route  path="/" element={<Welcome/>}  />
<Route  path="chat/:id" element={<Chatarea/>}  />
<Route  path="create-group" element={<CreateGroup/>}  />
<Route  path="group" element={<Group/>}  />
<Route  path="online-users" element={<OnlineUsers/>}  />
  </Route>


</Routes>
</Provider>
</BrowserRouter>
<ToastContainer/>

    </Div>
  )
}

const Div=styled.div`
height: 100vh;
background-color: #dddedd;
display: flex;
justify-content: center;
align-items: center;
`

export default App

