import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';
import CheatingTable from './components/CheatingTable';

const ExamLogPage = () => {
  return (
    <PageContainer title="ExamLog Page" description="this is ExamLog page">
      <DashboardCard title="ExamLog Page">
        <Typography>This is a ExamLog page</Typography>
        <CheatingTable />
      </DashboardCard>
    </PageContainer>
  );
};

export default ExamLogPage;
