import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { registerAxios } from "../Axios/Axios";
import { toast } from "react-toastify";

const Register = () => {
  const navigate = useNavigate();

  const [data, newdata] = useState({ email: "", password: "", name: "" });

  const changehanlder = (e) => {
    newdata({ ...data, [e.target.name]: e.target.value });
  };
  console.log(data);

const sendData=async()=>{
  const res =await registerAxios(data);
  console.log(res);
  if(res.data.success==true){
    toast.success(`${res.data.message}`);
    newdata({email: "", password: "", name: "" });
  }
  else if(res.data.success==true){
    toast.error(`${res.data.message}`);
    newdata({email: "", password: "", name: "" });
  }
}



  return (
    <Main>
      <div className="img">
        <img src="/images/welcome.jpg" alt="" className="imgg" />
      </div>
      <div className="login">
        <h1 className="text-lg">Register your Account</h1>
        <TextField
          id="outlined-basic"
          onChange={changehanlder}
          name="name"
          value={data.name}
          label="Enter User Name"
          sx={{ width: 300 }}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          onChange={changehanlder}
          name="email"
          value={data.email}
          label="Enter Email Address"
          sx={{ width: 300 }}
          variant="outlined"
        />
        <TextField
          id="outlined-basic"
          onChange={changehanlder}
          name="password"
          value={data.password}
          label="Enter User Password"
          sx={{ width: 300 }}
          type="password"
          autoComplete="current-password"
          variant="outlined"
        />
        <Button
          variant="contained"
          onClick={() =>sendData() }
          size="large"
        >
          Sign Up
        </Button>

        <p>
          Already have a account?{" "}
          <span onClick={() => navigate("/")}>Login</span>
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

export default Register;
