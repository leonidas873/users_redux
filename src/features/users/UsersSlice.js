import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  users: [
{
  id:1,
  name:"levan",
  surname:"khaburzania",
  email:"levanixaburzania1@gmail.com",
  age:123,
  merried:"yes",
  comment:"asdfas",
  userInfo:true,
  terms:true,
  
},
{
  id:12,
  name:"asda",
  surname:"dafadfadfa",
  email:"lesfxaburzania1@gmail.com",
  age:123,
  merried:"no",
  comment:"asdfas",
  userInfo:true,
  terms:true
  
},
{
  id:13,
  name:"maxo",
  surname:"sturua",
  email:"levdaszania1@gmail.com",
  age:123,
  merried:"yes",
  comment:"dasd qweqasds",
  userInfo:true,
  terms:true
  
}


  ],

};



export const usersSlice = createSlice({
  name: 'users',
  initialState,

  reducers: {
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    deleteUser: (state, action) => {
      const updatedState = state.users.filter(user=>user.id!==action.payload)
      state.users = updatedState;
    },
    editUser:(state,action)=>{
      state.users = action.payload
    },

  },

});

export const { addUser, deleteUser, editUser } = usersSlice.actions;


export default usersSlice.reducer;