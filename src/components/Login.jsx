import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { styled } from "styled-components";
import { useNavigate } from "react-router-dom";
import { loginAxios } from "../Axios/Axios";
import { toast } from "react-toastify";
import { useDispatch } from 'react-redux';
import { addUser } from "./Feature/ThemeSlice";
import { socket } from "../App";


const Login = () => {
  const navigate = useNavigate();

  const [data, newdata] = useState({ email: "", password: "" });

  const changehanlder = (e) => {
    newdata({ ...data, [e.target.name]: e.target.value });
  }

  const dispatch=useDispatch();

  const sendData=async()=>{
  const res=await loginAxios(data);

  if(res.data.success==true){
    toast.success(`${res.data.message}`)
    await dispatch(addUser(res.data.sendUserData));
    newdata({ email: "", password: "" });
socket.emit("login",{id:res.data.sendUserData._id,name:res.data.sendUserData.name})
  }

  }


  return (
    <Main>
      <div className="img">
        <img src="/images/welcome.jpg" alt="" className="imgg" />
      </div>
      <div className="login">
        <h1>Login to your Account</h1>
        <TextField
          id="outlined-basic"
          onChange={changehanlder}
          name="email"
          value={data.email}
          label="Enter Email"
          sx={{ width: 300 }}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          onChange={changehanlder}
          name="password"
          autoComplete='true'
          value={data.password}
          label="Enter User Password"
          sx={{ width: 300 }}
          type="password"
          /* autoComplete="current-password" */
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={() => sendData()}
          size="large"
        >
          Login
        </Button>

        <p>
          Create an account?{" "}
          <span onClick={() => navigate("register")}>register here</span>
        </p>
      </div>
    </Main>
  );
};

const Main = styled.section`
  height: 90vh;
  width: 90vw;
  background-color: #f4f4f8;
  border-radius: 1rem;
  display: grid;
  grid-template-columns: 0.7fr 1fr;
  padding: 1rem;
  .img {
    background-color: #fff;
    display: grid;
    .imgg {
      width: 100%;
      height: 100%;
      object-fit: fit;
      align-self: center;
    }
  }

  .login {
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    h1 {
      color: #007cff;
    }
    p {
      font-size: 1.5rem;
      span {
        color: #007cff;
        font-size: 1.5rem;
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;

export default Login;
