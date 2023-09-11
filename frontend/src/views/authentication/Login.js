import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Box, Card, Stack, Typography } from '@mui/material';

// components
import PageContainer from 'src/components/container/PageContainer';
import Logo from 'src/layouts/full/shared/logo/Logo';
import AuthLogin from './auth/AuthLogin';
// Form Validation And Control
import { useFormik } from 'formik';
import * as yup from 'yup';

// Auth Functionality
// to dispatch action and get data from state we need reducer function
import { useDispatch, useSelector } from 'react-redux';
// import login api function /mutation
import { useLoginMutation } from './../../slices/usersApiSlice';
// import set credential to save data we get after calling api
import { setCredentials } from './../../slices/authSlice';
import { toast } from 'react-toastify';
import Loader from './Loader';

const userValidationSchema = yup.object({
  email: yup.string('Enter your email').email('Enter a valid email').required('Email is required'),
  password: yup
    .string('Enter your password')
    .min(2, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
});
const initialUserValues = {
  email: '',
  password: '',
};

const Login = () => {
  const formik = useFormik({
    initialValues: initialUserValues,
    validationSchema: userValidationSchema,
    onSubmit: (values, action) => {
      console.log('🚀 ~ file: Registration.jsx ~ line 11 ~ Registration ~ values', values);
      handleSubmit(values);
      // action.resetForm();
    },
  });

  // Backend Api Handling

  // initialize navigate and dispatch
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // login mutation ,we can all this login any name
  const [login, { isLoading }] = useLoginMutation();

  // get userinfo state from auth state
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    // if userinfo present we dont need login redirect to /
    if (userInfo) {
      navigate('/');
    }
  }, [navigate, userInfo]);

  const handleSubmit = async ({ email, password }) => {
    // Now you can access 'email', 'password' here
    console.log('THis is My formHandle Function');
    console.log('Email:', email);
    console.log('Password:', password);
    // After a successful API call, you can reset the form
    // login logic here
    // we care calling login function which is in user apiSlice
    // unwrap  unwrap the promise which login return
    try {
      const res = await login({ email, password }).unwrap();
      // setting user to local storage
      dispatch(setCredentials({ ...res }));
      formik.resetForm();
      // After a successful login, get the stored location
      const redirectLocation = JSON.parse(localStorage.getItem('redirectLocation'));
      console.log('redict after login ', redirectLocation);
      if (redirectLocation) {
        localStorage.removeItem('redirectLocation'); // Remove the stored location
        console.log(
          'redict after login path  ',
          redirectLocation.pathname,
          typeof redirectLocation.pathname,
        );
        navigate(redirectLocation.pathname); // Redirect the user to the stored location
      } else {
        // If no stored location, navigate to a default route
        navigate('/');
      }
      // Now, navigate to the "Dashboard" page
      // navigate('/');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
      // console.log(err?.data?.message || err.error);
    }
  };

  return (
    <PageContainer title="Login" description="this is Login page">
      <Box
        sx={{
          position: 'relative',
          '&:before': {
            content: '""',
            background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
            backgroundSize: '400% 400%',
            animation: 'gradient 15s ease infinite',
            position: 'absolute',
            height: '100%',
            width: '100%',
            opacity: '0.3',
          },
        }}
      >
        <Grid container spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
          <Grid
            item
            xs={12}
            sm={12}
            lg={4}
            xl={3}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
              <Box display="flex" alignItems="center" justifyContent="center">
                <Logo />
              </Box>
              <AuthLogin
                formik={formik}
                subtext={
                  <Typography variant="subtitle1" textAlign="center" color="textSecondary" mb={1}>
                    CONDUCT SECURE ONLINE EXAMS NOW
                  </Typography>
                }
                subtitle={
                  <Stack direction="row" spacing={1} justifyContent="center" mt={3}>
                    <Typography color="textSecondary" variant="h6" fontWeight="500">
                      New to Modernize?
                    </Typography>
                    <Typography
                      component={Link}
                      to="/auth/register"
                      fontWeight="500"
                      sx={{
                        textDecoration: 'none',
                        color: 'primary.main',
                      }}
                    >
                      Create an account
                    </Typography>
                    {isLoading && <Loader />}
                  </Stack>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default Login;
