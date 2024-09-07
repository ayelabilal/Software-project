import React, { useState } from 'react';
import { TextField, Button, Typography, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const SchoolStudentRegistration = ({heading}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('');
  const [classname, setClassName]= useState('')

  const navigate =useNavigate()
  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'students'), {
        firstName,
        lastName,
        email,
        gender,
        classname
      });
      
      setFirstName('');
      setLastName('');
      setEmail('');
      setGender('');
      setClassName('')

    navigate('/dashboard/students/list')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div style={{
      margin:"0 auto",
      width:"700px"
    }}>
      <Typography variant="h4" align="center" gutterBottom sx={{marginBottom:"40px",marginTop:"40px",textDecoration:"underline"}}>
       {heading}
      </Typography>
      <Typography>First Name</Typography>
      <TextField
        placeholder="First Name"
        variant="outlined"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        sx={{width:"90%", marginBottom:"20px"}}
      />
      <br/><br/>
      <Typography>Last Name</Typography>
      <TextField
        placeholder="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        sx={{width:"90%", marginBottom:"20px"}}
      />
      <br/><br/>
      <Typography>Email</Typography>
      <TextField
        placeholder="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{width:"90%", marginBottom:"20px"}}
      />

<Typography>Class</Typography>
      <TextField
        placeholder="Class"
        variant="outlined"
        value={classname}
        onChange={(e) => setClassName(e.target.value)}
        required
        sx={{width:"90%",}}
      />
      <br/><br/>
      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend">Gender</FormLabel>
        <RadioGroup
          row
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <FormControlLabel 
            value="male" 
            control={<Radio sx={{ color: "#008000", '&.Mui-checked': { color: "#008000" } }} />} 
            label="Male" 
          />
          <br/>
          <FormControlLabel 
            value="female" 
            control={<Radio sx={{ color: "#008000", '&.Mui-checked': { color: "#008000" } }} />} 
            label="Female" 
          />
        </RadioGroup>
      </FormControl>
      <br/><br/>
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{ mt: 2, backgroundColor: "#008000",width:"90%", fontSize:"18px"}}
      >
        Submit
      </Button>
    </div>
  );
};

export default SchoolStudentRegistration;