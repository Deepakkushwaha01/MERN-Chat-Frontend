import axios from 'axios';
import { toast } from 'react-toastify';

export const loginAxios=async(data)=>{
  
try {
    
 const login=await axios.post(`${import.meta.env.VITE_BACKEND}/login`,data); 
 return login
} 
catch (error) {
    
    if (error.response) {
       
        toast.error(`${error.response.data.message}`)
     /*    console.log(error.response.data);
        console.log(error.response.status); */
      
    }
  }
}



export const registerAxios=async(data)=>{
  try {
    const register=await axios.post(`${import.meta.env.VITE_BACKEND}/register`,data); 
    return register;

} catch (error) {
    if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);}
  }
   }





   export const callUsers=async()=>{
    try {

    const res=await axios.get(`${import.meta.env.VITE_BACKEND}/getusers`);
    return res;
      
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);}
  }
    }



    export const callSingleUsers=async(id)=>{
      try {

      const res=await axios.get(`${import.meta.env.VITE_BACKEND}/singlecontroller/${id}`);
      return res;
        
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
        
        }
    }
      }



    
    export const AddMemberData=async(data)=>{
      try {
  
      const res=await axios.post(`${import.meta.env.VITE_BACKEND}/addMember`,data);
      return res;
        
      } catch (error) {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);}
    }
      }


      export const GetMemberData=async(sender,reciver)=>{
        try {
    
        const res=await axios.get(`${import.meta.env.VITE_BACKEND}/getmember?sender=${sender}`);
        return res;
          
        } catch (error) {
          if (error.response) {
      
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);}
      }
        }



 /* ---------------------------------------------------------- For Message ------------------------------------------------- */

export const AddMessage =async(data)=>{
  try {
    const res=await axios.post(`${import.meta.env.VITE_BACKEND}/addMessage`,data);
    return res;
  } catch (error) {
    if (error.response) {
      
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);}
}
  }

export const GetMessage=async(id)=>{
  try {
    const res=await axios.get(`${import.meta.env.VITE_BACKEND}/getmessage?id=${id}`);
    return res;
  } catch (error) {
    if (error.response) {
      
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);}
}
  }
