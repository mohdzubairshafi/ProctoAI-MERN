import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Rating, Stack } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const imgUrl =
  'https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvbXB1dGVyJTIwc2NpZW5jZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80';
export default function ExamCard({ exam }) {
  const { subject, duration, total_que, exam_id, active_date, expire_date, type } = exam;
  console.log(subject, duration, total_que, exam_id, type, active_date, expire_date);

  // handling routes
  const navigate = useNavigate();
  const isExamActive = true; // Date.now() >= active_date && Date.now() <= expire_date;
  const handleCardClick = () => {
    if (isExamActive) {
      // Navigate to the /exam/exam_id route when the exam is active
      navigate(`/exam/${exam_id}`);
    }
    console.log('Exam not Live yet ');
  };

  return (
    <Card>
      <CardActionArea onClick={handleCardClick}>
        <CardMedia component="img" height="140" image={imgUrl} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {subject}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {type}
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1}>
            <Stack direction="row" alignItems="center">
              <Typography variant="h6"> {total_que}ques</Typography>
            </Stack>
            <Typography color="textSecondary" ml={1} sx={{}}>
              {duration}
            </Typography>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
