import React from 'react';
import {
  Box,
  Typography,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@mui/material';

const CreateExam = ({ formik, title, subtitle, subtext }) => {
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } = formik;

  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}

      {subtext}

      <Box component="form">
        <TextField
          id="examName"
          name="examName"
          label="Exam Name"
          variant="outlined"
          value={values.examName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.examName && errors.examName ? true : false}
          helperText={touched.examName && errors.examName ? errors.examName : null}
          fullWidth
          required
          margin="normal"
        />

        <TextField
          id="totalQuestions"
          name="totalQuestions"
          label="Total Number of Questions"
          type="number"
          variant="outlined"
          value={values.totalQuestions}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.totalQuestions && errors.totalQuestions ? true : false}
          helperText={
            touched.totalQuestions && errors.totalQuestions ? errors.totalQuestions : null
          }
          fullWidth
          required
          margin="normal"
        />

        <TextField
          id="duration"
          name="duration"
          label="Exam Duration (minutes)"
          type="number"
          variant="outlined"
          value={values.duration}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.duration && errors.duration ? true : false}
          helperText={touched.duration && errors.duration ? errors.duration : null}
          fullWidth
          required
          margin="normal"
        />

        {/* <TextField
          id="liveLink"
          name="liveLink"
          label="Live Link"
          variant="outlined"
          value={values.liveLink}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.liveLink && errors.liveLink ? true : false}
          helperText={touched.liveLink && errors.liveLink ? errors.liveLink : null}
          fullWidth
          required
          margin="normal"
        /> */}

        <TextField
          id="liveDate"
          name="liveDate"
          label="Live Date and Time"
          type="datetime-local"
          variant="outlined"
          value={values.liveDate}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.liveDate && errors.liveDate ? true : false}
          helperText={touched.liveDate && errors.liveDate ? errors.liveDate : null}
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <TextField
          id="deadDate"
          name="deadDate"
          label="Dead Date and Time"
          type="datetime-local"
          variant="outlined"
          value={values.deadDate}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.deadDate && errors.deadDate ? true : false}
          helperText={touched.deadDate && errors.deadDate ? errors.deadDate : null}
          fullWidth
          required
          margin="normal"
          InputLabelProps={{
            shrink: true,
          }}
        />

        <Button color="primary" variant="contained" size="large" fullWidth onClick={handleSubmit}>
          Create Exam
        </Button>
      </Box>

      {subtitle}
    </>
  );
};

export default CreateExam;
