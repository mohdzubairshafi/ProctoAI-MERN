import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import AddQuestionForm from './components/AddQuestionForm';

const AddQuestions = () => {
  return (
    <PageContainer title="Add Questions Page" description="this is Add Questions page">
      <DashboardCard title="Add Questions Page">
        <Typography>This is a Add Questions page</Typography>
        <AddQuestionForm />
      </DashboardCard>
    </PageContainer>
  );
};

export default AddQuestions;
