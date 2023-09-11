import React from 'react';
import Grid from '@mui/material/Grid';
import Avatar from '@mui/material/Avatar';
import questions from './questionData';
import BlankCard from 'src/components/shared/BlankCard';
import { Box, Button, Stack, Typography } from '@mui/material';
const NumberOfQuestions = () => {
  const totalQuestions = 35; //questions.length;
  // Generate an array of question numbers from 1 to totalQuestions
  const questionNumbers = Array.from({ length: totalQuestions }, (_, index) => index + 1);
  console.log(questionNumbers, 'QUESNUMB');
  const handleQuestionButtonClick = (questionNumber) => {
    // Set the current question to the selected question number
    // setCurrentQuestion(questionNumber);
    console.log(questionNumber);
  };

  // Create an array of rows, each containing up to 4 question numbers
  const rows = [];
  for (let i = 0; i < questionNumbers.length; i += 5) {
    rows.push(questionNumbers.slice(i, i + 5));
  }

  return (
    <
      // sx={{
      //   display: 'flex',
      //   flexDirection: 'column',
      //   alignItems: 'end', // Center content horizontally
      //   justifyContent: 'center', // Center content vertically
      //   height: '100%', // Set a height to the parent container
      // }}
    >
      <Box
        position="sticky"
        top="0"
        zIndex={1}
        bgcolor="white" // Set background color as needed
        paddingY="10px" // Add padding to top and bottom as needed
        width="100%"
        px={3}
        mb={10}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Typography variant="h6">Questions: 1/10</Typography>
          <Typography variant="h6">Timer</Typography>
          <Button variant="contained" color="error">
            Finish Test
          </Button>
        </Stack>
      </Box>

      <Box maxHeight="270px">
        <Grid container spacing={1}>
          {rows.map((row, rowIndex) => (
            <Grid key={rowIndex} item xs={12}>
              <Stack direction="row" justifyContent="flex-start">
                {row.map((questionNumber) => (
                  <Avatar
                    key={questionNumber}
                    variant="rounded"
                    style={{
                      width: '40px',
                      height: '40px',
                      fontSize: '20px',
                      cursor: 'pointer',
                      margin: '3px',
                      background: '#ccc',
                    }}
                    onClick={() => handleQuestionButtonClick(questionNumber)}
                  >
                    {questionNumber}
                  </Avatar>
                ))}
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default NumberOfQuestions;
