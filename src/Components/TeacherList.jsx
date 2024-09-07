import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import '../App.css'
import { useNavigate } from 'react-router-dom';


const TeacherList = ({text}) => {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchTeachers = async () => {
      const querySnapshot = await getDocs(collection(db, 'Teachers'));
      const teachersList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTeachers(teachersList);
    };

    fetchTeachers();
  }, []);
  
  const handleAddSubject = () => {
    navigate('/dashboard/teachers/registration'); 
  };


  return (
    
   <div  style={{width: "150vh"}}>
    <Typography sx={{marginBottom:"50px",
    marginTop:"50px",
    fontSize:"30px",
    fontWeight:"Bold",
    textAlign:"center",
    textDecoration:"underline",
    color:"black"
    }}>
      {text}</Typography>
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
        <TableHead >
          <TableRow sx={{backgroundColor:"white"}}>
            <TableCell>ID</TableCell>
            <TableCell align="right">First Name</TableCell>
            <TableCell align="right">Last Name</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {teachers.map((teacher) => (
            <TableRow key={teacher.id}>
              <TableCell component="th" scope="row">{teacher.id}</TableCell>
              <TableCell align="right">{teacher.firstName}</TableCell>
              <TableCell align="right">{teacher.lastName}</TableCell>
              <TableCell align="right">{teacher.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
  );
};

export default TeacherList;