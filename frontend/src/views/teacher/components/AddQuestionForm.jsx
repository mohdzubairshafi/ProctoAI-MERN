import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  FormControlLabel,
  Checkbox,
  Stack,
  Select,
  MenuItem,
} from '@mui/material';
import swal from 'sweetalert';
import { useCreateQuestionMutation, useGetExamsQuery } from 'src/slices/examApiSlice';
import { toast } from 'react-toastify';

const AddQuestionForm = () => {
  const [questions, setQuestions] = useState([]);
  const [newQuestion, setNewQuestion] = useState('');
  const [newOptions, setNewOptions] = useState(['', '', '', '']);
  const [correctOptions, setCorrectOptions] = useState([false, false, false, false]);
  const [selectedExamId, setSelectedExamId] = useState('');

  const handleOptionChange = (index) => {
    const updatedCorrectOptions = [...correctOptions];
    updatedCorrectOptions[index] = !correctOptions[index];
    setCorrectOptions(updatedCorrectOptions);
  };

  const [createQuestion, { isLoading }] = useCreateQuestionMutation();
  const { data: examsData } = useGetExamsQuery();

  useEffect(() => {
    if (examsData && examsData.length > 0) {
      setSelectedExamId(examsData[0].examId);
      console.log(examsData[0].examId, 'examsData[0].examId');
    }
  }, [examsData]);

  const handleAddQuestion = async () => {
    if (newQuestion.trim() === '' || newOptions.some((option) => option.trim() === '')) {
      swal('', 'Please fill out the question and all options.', 'error');
      return;
    }

    const newQuestionObj = {
      question: newQuestion,
      options: newOptions.map((option, index) => ({
        optionText: option,
        isCorrect: correctOptions[index],
      })),
      examId: selectedExamId,
    };

    try {
      const res = await createQuestion(newQuestionObj).unwrap();
      if (res) {
        toast.success('Question added successfully!!!');
      }
      setQuestions([...questions, res]);
      setNewQuestion('');
      setNewOptions(['', '', '', '']);
      setCorrectOptions([false, false, false, false]);
    } catch (err) {
      swal('', 'Failed to create question. Please try again.', 'error');
    }
  };

  const handleSubmitQuestions = () => {
    setQuestions([]);
    setNewQuestion('');
    setNewOptions(['', '', '', '']);
    setCorrectOptions([false, false, false, false]);
  };

  return (
    <div>
      <Select
        label="Select Exam"
        value={selectedExamId}
        onChange={(e) => {
          console.log(e.target.value, 'option ID');
          setSelectedExamId(e.target.value);
        }}
        fullWidth
        sx={{ mb: 2 }}
      >
        {examsData &&
          examsData.map((exam) => (
            <MenuItem key={exam.examId} value={exam.examId}>
              {exam.examName}
            </MenuItem>
          ))}
      </Select>

      {questions.map((questionObj, questionIndex) => (
        <div key={questionIndex}>
          <TextField
            label={`Question ${questionIndex + 1}`}
            value={questionObj.question}
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
          {questionObj.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <TextField
                label={`Option ${optionIndex + 1}`}
                value={option.optionText}
                fullWidth
                InputProps={{
                  readOnly: true,
                }}
              />
              <FormControlLabel
                control={<Checkbox checked={option.isCorrect} disabled />}
                label={`Correct Option ${optionIndex + 1}`}
              />
            </div>
          ))}
        </div>
      ))}

      <TextField
        label="New Question"
        value={newQuestion}
        onChange={(e) => setNewQuestion(e.target.value)}
        fullWidth
        rows={4}
        sx={{ mb: 1 }}
      />

      {newOptions.map((option, index) => (
        <Stack
          key={index}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={1}
          mb={1}
        >
          <TextField
            label={`Option ${index + 1}`}
            value={newOptions[index]}
            onChange={(e) => {
              const updatedOptions = [...newOptions];
              updatedOptions[index] = e.target.value;
              setNewOptions(updatedOptions);
            }}
            fullWidth
            sx={{ flex: '80%' }}
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={correctOptions[index]}
                onChange={() => handleOptionChange(index)}
              />
            }
            label={`Correct Option ${index + 1}`}
          />
        </Stack>
      ))}

      <Stack mt={2} direction="row" spacing={2}>
        <Button variant="outlined" onClick={handleAddQuestion}>
          Add Question
        </Button>
        <Button variant="outlined" onClick={handleSubmitQuestions}>
          Submit Questions
        </Button>
      </Stack>
    </div>
  );
};

export default AddQuestionForm;
