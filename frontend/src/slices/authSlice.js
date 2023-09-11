import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  //check if userifo present in local storage use it else null
  userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // set  userinfo in local storage
    setCredentials: (state, action) => {
      state.userInfo = action.payload;
      localStorage.setItem('userInfo', JSON.stringify(action.payload));
    },
    // clear local storage it different from actual logout which send to backend
    // it just clear credential form local storage it like frontend logout
    logout: (state, action) => {
      state.userInfo = null;
      localStorage.removeItem('userInfo');
    },
  },
});

// export actions
export const { setCredentials, logout } = authSlice.actions;

export default authSlice.reducer;
