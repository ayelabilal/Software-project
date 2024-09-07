import React, { useState } from 'react';
import { TextField, Button, Typography, Container, FormControl, MenuItem, Select, InputLabel, Box } from '@mui/material';

const FeesSubmission = ({text}) => {
    const [age, setAge] = useState('');

    const handleChange = (event) => {
      setAge(event.target.value);
    
    }
  return (
    <Container maxWidth="sm" style={{ marginTop: '50px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', boxShadow: '0px 0px 15px rgba(0,0,0,0.1)' }}>
      <Typography variant="h4" align="center" gutterBottom sx={{textDecoration:"underline"}}>
        {text}
      </Typography>
      
      <form noValidate autoComplete="off">
        <TextField
          label="Name"
          variant="outlined"
          required
          fullWidth
          margin="normal"
        />
        <TextField
          label="Class"
          variant="outlined"
          disabled
          fullWidth
          margin="normal"
        />
        <TextField
          label="Amount"
          variant="outlined"
          fullWidth
          disabled
          margin="normal"
        />

<Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Payment Method</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Payment Method"
          onChange={handleChange}
         
        >
          <MenuItem value={10}>Credit Card</MenuItem>
          <MenuItem value={20}>Debit Card</MenuItem>
          <MenuItem value={30}>Net Banking</MenuItem>
          <MenuItem value={40}>UPI</MenuItem>

        </Select>
      </FormControl>
    </Box>

        <Button
          variant="contained"
         
          fullWidth
          style={{ marginTop: '20px' ,backgroundColor:"#008000"}}
        >
          Submit Payment
        </Button>
      </form>
    </Container>
  );
};

export default FeesSubmission;