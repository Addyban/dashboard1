import React from 'react';
import { useSelector } from 'react-redux';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const UserTable = () => {
  const { likedUsers } = useSelector((state) => state.users);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>User Name</TableCell>
            <TableCell>Registered Email</TableCell>
            <TableCell>Registered Mobile</TableCell>
            <TableCell>Gender</TableCell>
            <TableCell>Country</TableCell>
            <TableCell>City</TableCell>
            <TableCell>Active Time</TableCell>
            <TableCell>Last Seen</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {likedUsers.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
              <TableCell>{user.gender}</TableCell>
              <TableCell>{user.country}</TableCell>
              <TableCell>{user.city}</TableCell>
              <TableCell>{user.activeTime}</TableCell>
              <TableCell>{user.lastSeen}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserTable;
