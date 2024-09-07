import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { auth, db } from '../config/firebase'; // Adjust path if necessary
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import img1 from '../assets/wall.png';

const Container = styled(Box)({
  display: 'flex',
  height: '100vh',
  width: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

const BorderContainer = styled(Box)({
  display: 'flex',
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  backgroundColor: '#fff',
});

const ImageContainer = styled(Box)({
  flex: 1,
  backgroundImage: `url(${img1})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  borderRight: '2px solid #ccc',
});

const FormContainer = styled(Box)({
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#f5f5f5',
});

const SignUpForm = styled(Box)({
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#f5f5f5',
});

export default function Signup() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSignup = async () => {
    setError(''); 
    try {
      
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

     
      await setDoc(doc(db, 'users', user.uid), {
        firstName,
        lastName,
        email,
      });

      
      const userObj = {
        firstName,
        lastName,
        email,
      };
      localStorage.setItem("userData", JSON.stringify(userObj));

      
      navigate('/');
    } catch (error) {
      setError("Error during sign-up: " + error.message);
    }
  };

  return (
    <Container>
      <BorderContainer>
        <ImageContainer />
        <FormContainer>
          <SignUpForm>
            <Typography component="h1" variant="h4" sx={{ textAlign: "center", marginBottom: "50px" }}>
              Sign Up
            </Typography>
            {error && <Typography color="error" sx={{ marginBottom: "20px", textAlign: "center" }}>{error}</Typography>}
            <TextField
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First Name"
              variant="outlined"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required 
              sx={{
                width:"120%"
              }}
            />
            <TextField
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last Name"
              variant="outlined"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              sx={{
                width:"120%"
              }}
            />
           
            <TextField
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              sx={{
                width:"120%"
              }}
            />
            <TextField
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              sx={{
                width:"120%"
              }}
            />
            <Button
              type="button"
              variant="contained"
              sx={{ background: "#008000", margin: "0 auto", width: "120%" }}
              onClick={handleSignup}
            >
              Sign Up
            </Button>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Typography>Already have an account?</Typography>
              <Typography
                onClick={() => navigate('/')}
                sx={{ cursor: 'pointer', color: '#008000', textDecoration: 'underline' }}
              >
                Login
              </Typography>
            </Stack>
          </SignUpForm>
        </FormContainer>
      </BorderContainer>
    </Container>
  );
}