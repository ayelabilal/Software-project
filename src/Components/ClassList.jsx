
import React, { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Button } from '@mui/material';
import { db } from '../config/firebase';
import { collection, getDocs } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';



const ClassList = ({text}) => {
  const [classlist, setClasstlist] = useState([]);
  const navigate = useNavigate()

  useEffect(() => {
    const fetchClasses = async () => {
      const querySnapshot = await getDocs(collection(db, 'class admission'));
      const classList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setClasstlist(classList);
    };

    fetchClasses();
  }, []);
  const handleAddSubject = () => {
    navigate('/dashboard/class/add'); 
  };



  return (
    
   <div  style={{width: "150vh"}}>
    <Typography sx={{marginBottom:"50px",
    marginTop:"50px",
    fontSize:"30px",

    textAlign:"center",
    textDecoration:"underline"
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
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Phone Number</TableCell>



          </TableRow>
        </TableHead>
        <TableBody>
          {classlist.map((classli) => (
            <TableRow key={classli.id}>
              <TableCell component="th" scope="row">{classli.id}</TableCell>
              <TableCell align="right">{classli.firstName}</TableCell>
              <TableCell align="right">{classli.lastName}</TableCell>
              <TableCell align="right">{classli.email}</TableCell>
              <TableCell align="right">{classli.gender}</TableCell>
              <TableCell align="right">{classli.phoneno}</TableCell>

              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    
    </div>
  );
};

export default ClassList;
