import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import questions from './questionData';
import { Container } from '@mui/material';

export default function MultipleChoiceQuestion() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  const [isLastQuestion, setIsLastQuestion] = useState(false); // New state for isLastQuestion
  const [isFinishTest, setisFinishTest] = useState(false); // New state for isLastQuestion

  useEffect(() => {
    // Check if currentQuestion is the last question whenever it changes
    setIsLastQuestion(currentQuestion === questions.length - 1);
  }, [currentQuestion]);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleNextQuestion = () => {
    const isCorrect =
      questions[currentQuestion].options.find((option) => option.isCorrect).id === selectedOption;
    if (isCorrect) {
      setScore(score + 1);
    }

    setSelectedOption(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Handle quiz completion, e.g., show results
      setisFinishTest(true);
    }
  };

  // const isLastQuestion = currentQuestion === questions.length - 1;
  console.log('LAST QUESTION ON: ', isLastQuestion, currentQuestion, questions.length);
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" mb={3}>
          Question {currentQuestion + 1}:
        </Typography>
        <Typography variant="body1" mb={3}>
          {questions[currentQuestion].question}
        </Typography>
        <Box mb={3}>
          <FormControl component="fieldset">
            <RadioGroup
              aria-label="quiz"
              name="quiz"
              value={selectedOption}
              onChange={handleOptionChange}
            >
              {questions[currentQuestion].options.map((option) => (
                <FormControlLabel
                  key={option.id}
                  value={option.id}
                  control={<Radio />}
                  label={option.text}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
        <Stack direction="row" spacing={2} justifyContent="space-between">
          <Button
            variant="contained"
            color="primary"
            onClick={handleNextQuestion}
            disabled={selectedOption === null}
            style={{ marginLeft: 'auto' }}
          >
            {isLastQuestion ? 'Finish' : 'Next Question'}
          </Button>
          {isFinishTest && (
            <Typography variant="body2" style={{ marginTop: '16px' }}>
              Your Score: {score} out of {questions.length}
            </Typography>
          )}
        </Stack>
      </CardContent>
    </Card>
  );
}
