import React from 'react';
import { Link } from 'react-router-dom';
import { CardContent, Typography, Grid, Rating, Tooltip, Fab } from '@mui/material';
import img1 from 'src/assets/images/products/s4.jpg';
import img2 from 'src/assets/images/products/s5.jpg';
import img3 from 'src/assets/images/products/s7.jpg';
import img4 from 'src/assets/images/products/s11.jpg';
import { Stack } from '@mui/system';
import { IconPlayerPlayFilled } from '@tabler/icons-react';
import BlankCard from '../../../components/shared/BlankCard';
import ExamCard from './ExamCard';

const userExam = [
  {
    exam_id: 1,
    subject: 'Theory Of Computation',
    duration: '30min',
    active_date: '10 Sept 2023',
    total_que: 30,
    expire_date: '11 sept 2023',
    Exam_link_code: 133,
    type: 'MCQ',
  },
  {
    exam_id: 2,
    subject: 'Theory Of Computation',
    duration: '30min',
    active_date: '10 Sept 2023',
    total_que: 30,
    expire_date: '11 sept 2023',
    Exam_link_code: 3233,
    type: 'MCQ',
  },
  {
    exam_id: 3,
    subject: 'Theory Of Computation',
    duration: '30min',
    active_date: '10 Sept 2023',
    total_que: 30,
    expire_date: '11 sept 2023',
    Exam_link_code: 123,
    type: 'MCQ',
  },
  {
    exam_id: 4,
    subject: 'Theory Of Computation',
    duration: '30min',
    active_date: '10 Sept 2023',
    total_que: 30,
    expire_date: '11 sept 2023',
    Exam_link_code: 233,
    type: 'MCQ',
  },
];

const Exams = () => {
  return (
    <Grid container spacing={3}>
      {userExam.map((exam, index) => (
        <Grid item sm={6} md={4} lg={3} key={index}>
          <BlankCard>
            <ExamCard exam={exam} />
          </BlankCard>
        </Grid>
      ))}
    </Grid>
  );
};

export default Exams;
