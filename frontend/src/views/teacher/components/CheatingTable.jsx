import React, { useEffect, useState } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  TextField,
  Select,
  MenuItem,
} from '@mui/material';
import { useGetExamsQuery } from 'src/slices/examApiSlice';
import { useGetCheatingLogsQuery } from 'src/slices/cheatingLogApiSlice';

export default function CheatingTable() {
  const [filter, setFilter] = useState('');
  const [selectedExamId, setSelectedExamId] = useState('');
  const [cheatingLogs, setCheatingLogs] = useState([]);

  const { data: examsData } = useGetExamsQuery();
  const { data: cheatingLogsData, isLoading } = useGetCheatingLogsQuery(selectedExamId);

  useEffect(() => {
    if (examsData && examsData.length > 0) {
      setSelectedExamId(examsData[0].examId);
    }
  }, [examsData]);

  useEffect(() => {
    if (cheatingLogsData) {
      setCheatingLogs(cheatingLogsData);
    }
  }, [cheatingLogsData]);

  const filteredUsers = cheatingLogs.filter(
    (log) =>
      log.username.toLowerCase().includes(filter.toLowerCase()) ||
      log.email.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <Box>
      <Select
        label="Select Exam"
        value={selectedExamId}
        onChange={(e) => {
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
      <TextField
        label="Filter by Name or Email"
        variant="outlined"
        fullWidth
        margin="normal"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Sno</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>No Face Count</TableCell>
              <TableCell>Multiple Face Count</TableCell>
              <TableCell>Cell Phone Count</TableCell>
              <TableCell>Prohibited Object Count</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((log, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{log.username}</TableCell>
                <TableCell>{log.email}</TableCell>
                <TableCell>{log.noFaceCount}</TableCell>
                <TableCell>{log.multipleFaceCount}</TableCell>
                <TableCell>{log.cellPhoneCount}</TableCell>
                <TableCell>{log.prohibitedObjectCount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
