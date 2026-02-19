import { createSlice } from "@reduxjs/toolkit";
import authReducer from "./authslice";

const initialState = {
  status :false,
  userdData : null,
}

const authSlice = createSlice({
  name : "auth",
  initialState, 
  reducers : {
    login : (state, action) => {
      state.status = true;
      state.userdData = action.payload;
    },
    logout : (state) => {
      state.status = false;
      state.userdData = null; 
    }
  }
})

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
console.log(authReducer);
