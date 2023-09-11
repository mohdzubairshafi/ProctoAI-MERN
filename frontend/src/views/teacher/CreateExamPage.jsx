import React from 'react';
import { Grid, Box, Card, Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import ExamForm from './components/ExamForm';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useUpdateUserMutation } from '../../slices/usersApiSlice';
import { setCredentials } from '../../slices/authSlice';

const examValidationSchema = yup.object({
  examName: yup.string().required('Exam Name is required'),
  totalQuestions: yup
    .number()
    .typeError('Total Number of Questions must be a number')
    .integer('Total Number of Questions must be an integer')
    .positive('Total Number of Questions must be positive')
    .required('Total Number of Questions is required'),
  duration: yup
    .number()
    .typeError('Exam Duration must be a number')
    .integer('Exam Duration must be an integer')
    .min(1, 'Exam Duration must be at least 1 minute')
    .required('Exam Duration is required'),
  // liveLink: yup.string().url('Live Link must be a valid URL').required('Live Link is required'),
  liveDate: yup.date().required('Live Date and Time is required'),
  deadDate: yup.date().required('Dead Date and Time is required'),
});

const CreateExamPage = () => {
  const { userInfo } = useSelector((state) => state.auth);

  const initialExamValues = {
    examName: '',
    totalQuestions: '',
    duration: '',
    // liveLink: '',
    liveDate: '',
    deadDate: '',
  };

  const formik = useFormik({
    initialValues: initialExamValues,
    validationSchema: examValidationSchema,
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  // const dispatch = useDispatch();
  // const [updateProfile, { isLoading }] = useUpdateUserMutation();

  const handleSubmit = async (values) => {
    console.log('Exam data: ', values);

    try {
      // const res = await updateProfile({
      //   _id: userInfo._id,
      //   ...values,
      // }).unwrap();
      // dispatch(setCredentials(res));
      toast.success('Exam Created successfully');
    } catch (err) {
      toast.error(err?.data?.message || err.error);
    }
  };

  return (
    <PageContainer title="CreateExamPage" description="This is CreateExamPage page">
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
            lg={12}
            xl={6}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '100%', maxWidth: '500px' }}>
              <ExamForm
                formik={formik}
                onSubmit={handleSubmit}
                title={
                  <Typography variant="h3" textAlign="center" color="textPrimary" mb={1}>
                    Create Exam
                  </Typography>
                }
              />
            </Card>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default CreateExamPage;
