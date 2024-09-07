import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';
import '../App.css';

const SubjectList = ({ text }) => {
  const [subjects, setSubject] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    const fetchSubjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'add subjects'));
      const subjectList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setSubject(subjectList);
    };

    fetchSubjects();
  }, []);

  const handleAddSubject = () => {
    navigate('/dashboard/subjects/add'); 
  };

  return (
    <div style={{width: "150vh"}}>
      <Typography
        sx={{
          marginBottom: "50px",
          marginTop: "50px",
          fontSize: "30px",
          fontWeight: "Bold",
          textAlign: "center",
          textDecoration:"underline"
        }}
      >
        {text}
      </Typography>

      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '50px' }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#008000" }}
          onClick={handleAddSubject} 
        >
          Add
        </Button>
      </div>

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: "white" }}>
              <TableCell>ID</TableCell>
              <TableCell align="right">Subject Name</TableCell>
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Group</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {subjects.map((subject) => (
              <TableRow key={subject.id}>
                <TableCell component="th" scope="row">{subject.id}</TableCell>
                <TableCell align="right">{subject.subjectName}</TableCell>
                <TableCell align="right">{subject.classname}</TableCell>
                <TableCell align="right">{subject.group}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default SubjectList;