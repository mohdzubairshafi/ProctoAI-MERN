import { configureStore } from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
import { apiSlice } from './slices/apiSlice';

const store = configureStore({
  reducer: {
    auth: authSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
  devTools: true,
});

export default store;
