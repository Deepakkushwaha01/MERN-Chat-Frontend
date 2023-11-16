import { createSlice } from "@reduxjs/toolkit";


export const themeSlice=createSlice({
    name:'themeSlice',
    initialState:{
        user:null,
        allUsers:null,
        message:null
    },

    reducers:{
        addUser:(state,action)=>{
            state.user=action.payload;

        },
        deleteUser:(state,action)=>{
            state.user=null;
        },

        addAllUsers:(state,action)=>{
state.allUsers=action.payload;
        },

        addmessage:(state,action)=>{
            state.message=action.payload
        }
    }
});

export const {addUser,deleteUser,addAllUsers,addmessage}=themeSlice.actions;
export default themeSlice.reducer;