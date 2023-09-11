import React from 'react';
import { Typography } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';
import DashboardCard from '../../components/shared/DashboardCard';

const ResultPage = () => {
  return (
    <PageContainer title="Result Page" description="this is Result page">
      <DashboardCard title="Result Page">
        <Typography>This is a Result page</Typography>
      </DashboardCard>
    </PageContainer>
  );
};

export default ResultPage;
