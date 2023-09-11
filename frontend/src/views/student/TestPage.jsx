import React from 'react';
import { Grid, Box, Card, Container, Typography, Stack } from '@mui/material';
import PageContainer from 'src/components/container/PageContainer';

// components
import BlankCard from './../../components/shared/BlankCard';
import MultipleChoiceQuestion from './Components/MultipleChoiceQuestion';
import NumberOfQuestions from './Components/NumberOfQuestions';
import WebCam from './Components/WebCam';

const TestPage = () => {
  return (
    <PageContainer title="TestPage" description="this is TestPage">
      <Box pt="3rem">
        <Grid container spacing={3}>
          <Grid item xs={12} md={7} lg={7}>
            <BlankCard>
              <Box
                width="100%"
                minHeight="400px" // Adjust the height as needed
                boxShadow={3} // You can adjust the shadow level (0-24) as needed
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
              >
                <Container maxWidth="md">
                  <MultipleChoiceQuestion />
                </Container>
              </Box>
            </BlankCard>
          </Grid>
          <Grid item xs={12} md={5} lg={5}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <BlankCard>
                  <Box
                    maxHeight="300px"
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'end', // Center content horizontally
                      justifyContent: 'center', // Center content vertically
                      overflowY: 'auto',
                      height: '100%', // Set a height to the parent container
                    }}
                  >
                    {/* Remove the Container component */}
                    <NumberOfQuestions />
                  </Box>
                </BlankCard>
              </Grid>
              <Grid item xs={12}>
                <BlankCard>
                  <Box
                    width="100%"
                    maxHeight="300px" // Adjust the height as needed
                    boxShadow={3} // You can adjust the shadow level (0-24) as needed
                    display="flex"
                    flexDirection="column"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Container maxWidth="md">
                      <WebCam />
                    </Container>
                  </Box>
                </BlankCard>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </PageContainer>
  );
};

export default TestPage;
