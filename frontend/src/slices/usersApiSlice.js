import { apiSlice } from './apiSlice';
const USERS_URL = '/api/users';

// inject endpoint we can create our enpoint here
// and the got injected in api slice endpoints part
// now in form we just have to hit this login action
export const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    //Login Api
    login: builder.mutation({
      //data contain email,password

      query: (data) => ({
        // backend url
        url: `${USERS_URL}/auth`,
        method: 'POST',
        body: data,
      }),
    }),
    //Register Mutation Api
    register: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}`,
        method: 'POST',
        body: data,
      }),
    }),
    // LogOut Api
    logout: builder.mutation({
      query: () => ({
        url: `${USERS_URL}/logout`,
        method: 'POST',
      }),
    }),
    updateUser: builder.mutation({
      query: (data) => ({
        url: `${USERS_URL}/profile`,
        method: 'PUT',
        body: data,
      }),
    }),
  }),
});

// it specify convention to export them
// like for mutation we have to add use + name + Mutation
// like for query we have to add use + name + query
export const { useLoginMutation, useLogoutMutation, useRegisterMutation, useUpdateUserMutation } =
  userApiSlice;
