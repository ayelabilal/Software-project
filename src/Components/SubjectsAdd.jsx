
import React, { useState } from 'react';
import { TextField, Button, Typography, RadioGroup, FormControlLabel, Radio, FormControl, FormLabel } from '@mui/material';
import { db } from '../config/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const SubjectsAdd = ({heading}) => {
  const [subjectName, setSubjectName] = useState('');
  const [group, setGroup] = useState('');
  const [classname, setClassName]= useState('')
  const navigate =useNavigate()

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, 'add subjects'), {
        subjectName,
        group,
        classname
      });
     
      setSubjectName('');
      setGroup('');
      setClassName('')
      navigate('/dashboard/subjects/list')
    } 
    
    catch (e) {
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
      <Typography>Subject Name</Typography>
      <TextField
        placeholder="Enter Your Subject Name"
        variant="outlined"
        value={subjectName}
        onChange={(e) => setSubjectName(e.target.value)}
        required
        sx={{width:"90%", marginBottom:"20px"}}
      />
      <br/><br/>

<Typography>Class</Typography>
      <TextField
        placeholder="Enter Your Class"
        variant="outlined"
        value={classname}
        onChange={(e) => setClassName(e.target.value)}
        required
        sx={{width:"90%",}}
      />
      <br/><br/>
      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend">Select Group</FormLabel>
        <RadioGroup
          row
          value={group}
          onChange={(e) => setGroup(e.target.value)}
        >
          <FormControlLabel 
            value="General Science" 
            control={<Radio sx={{ color: "#008000", '&.Mui-checked': { color: "#008000" } }} />} 
            label="General Science" 
          />
          <br/>
          <FormControlLabel 
            value="Pre-Engineering" 
            control={<Radio sx={{ color: "#008000", '&.Mui-checked': { color: "#008000" } }} />} 
            label="Pre-Engineering" 
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

export default SubjectsAdd;
