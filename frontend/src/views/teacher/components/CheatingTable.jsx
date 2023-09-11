import React, { useState } from 'react';
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
} from '@mui/material';

function createData(
  name,
  email,
  tabChange,
  prohibitedKeyPress,
  multipleFaceDetected,
  mobileFound,
  prohibitedObjectDetected,
) {
  return {
    name,
    email,
    tabChange,
    prohibitedKeyPress,
    multipleFaceDetected,
    mobileFound,
    prohibitedObjectDetected,
  };
}

const users = [
  createData('User 1', 'user1@example.com', 4, 2, 5, 1, 3),
  createData('User 2', 'user2@example.com', 2, 3, 1, 5, 4),
  createData('User 3', 'user3@example.com', 5, 1, 3, 2, 4),
  createData('User 4', 'user4@example.com', 3, 4, 2, 4, 5),
  createData('User 5', 'user5@example.com', 1, 5, 4, 3, 2),
];

export default function CheatingTable() {
  const [filter, setFilter] = useState('');
  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.toLowerCase()) ||
      user.email.toLowerCase().includes(filter.toLowerCase()),
  );

  return (
    <Box>
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
              <TableCell>Tab Change</TableCell>
              <TableCell>Prohibited Key Press</TableCell>
              <TableCell>Multiple Face Detected</TableCell>
              <TableCell>Mobile Found</TableCell>
              <TableCell>Prohibited Object Detected</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user, index) => (
              <TableRow key={index}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.tabChange}</TableCell>
                <TableCell>{user.prohibitedKeyPress}</TableCell>
                <TableCell>{user.multipleFaceDetected}</TableCell>
                <TableCell>{user.mobileFound}</TableCell>
                <TableCell>{user.prohibitedObjectDetected}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
