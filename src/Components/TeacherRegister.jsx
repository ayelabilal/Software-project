import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  RadioGroup,
  FormControlLabel,
  Radio,
  FormControl,
  FormLabel,
} from "@mui/material";
import { db } from "../config/firebase";
import { collection, addDoc } from "firebase/firestore";
import { Navigate, useNavigate } from "react-router-dom";

const TeacherRegister = ({ heading }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [classname, setClassName] = useState("");
  const navigate =useNavigate()

  const handleSubmit = async () => {
    try {
      await addDoc(collection(db, "Teachers"), {
        firstName,
        lastName,
        email,
        gender,
        classname,
      });
      // Reset form
      setFirstName("");
      setLastName("");
      setEmail("");
      setGender("");
      setClassName("");

      navigate('/dashboard/teachers/list')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  return (
    <div
      style={{
        margin: "0 auto",
       height:"auto",
      width:"800px"
      }}
    >
      <Typography
        variant="h4"
        align="center"
        gutterBottom
        sx={{
          marginBottom: "40px",
          marginTop: "40px",
          textDecoration: "underline",
          color:"black"
        }}
      >
        {heading}
      </Typography>
      <Typography sx={{color:"black"}}>First Name:</Typography>
      <TextField
        placeholder="First Name"
        variant="outlined"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        sx={{ width: "90%", marginBottom: "20px" }}
      />
      <br />
      <br />
      <Typography sx={{color:"black"}}>Last Name:</Typography>
      <TextField
        placeholder="Last Name"
        variant="outlined"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
        sx={{ width: "90%", marginBottom: "20px" }}
      />
      <br />
      <br />
      <Typography sx={{color:"black"}}>Email:</Typography>
      <TextField
        placeholder="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        sx={{ width: "90%", marginBottom: "20px" }}
      />

      <Typography sx={{color:"black"}}>Class:</Typography>
      <TextField
        placeholder="Class"
        variant="outlined"
        value={classname}
        onChange={(e) => setClassName(e.target.value)}
        required
        sx={{ width: "90%" }}
      />
      <br />
      <br />
      <FormControl component="fieldset" fullWidth>
        <FormLabel component="legend" sx={{color:"black"}}>Gender</FormLabel>
        <RadioGroup
          row
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <FormControlLabel
          sx={{color:"black"}}
            value="male"
            control={
              <Radio
                sx={{ color: "#008000", "&.Mui-checked": { color: "#008000" } }}
              />
            }
            label="Male"
          />
          <br />
          <FormControlLabel
          sx={{color:"black"}}
            value="female"
            control={
              <Radio
                sx={{ color: "#008000", "&.Mui-checked": { color: "#008000" } }}
              />
            }
            label="Female"
          />
        </RadioGroup>
      </FormControl>
      <br />
      <br />
      <Button
        variant="contained"
        onClick={handleSubmit}
        sx={{
          mt: 2,
          backgroundColor: "#008000",
          width: "90%",
          fontSize: "18px",
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default TeacherRegister;
