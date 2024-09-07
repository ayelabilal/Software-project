import React, { useState } from 'react';
import { Box, Button, TextField, Typography, Stack } from '@mui/material';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword } from "firebase/auth";
import img1 from '../assets/wall.png'

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

const SignInForm = styled(Box)({
  width: '100%',
  maxWidth: '400px',
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '20px',
  borderRadius: '8px',
  backgroundColor: '#f5f5f5',
});

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async () => {
    setError(''); 
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      navigate('/dashboard');
    } catch (error) {
      setError("Error during login: " + error.message);
    }
  };

  const handleSignUpClick = () => {
    navigate('/signup');
  };

  return (
    <Container>
      <BorderContainer>
        <ImageContainer />
        <FormContainer>
          <SignInForm>
            <Typography component="h1" variant="h4" sx={{ textAlign: "center", marginBottom: "50px" }}>
              Login
            </Typography>
            {error && <Typography color="error" sx={{ marginBottom: "20px", textAlign: "center" }}>{error}</Typography>}
           
           
            <TextField
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              sx={{ width: "120%" }}
              required
            />
            <TextField
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              sx={{ width: "120%", marginBottom: "40px" }}
              required
            />
            <Button
              type="button"
              variant="contained"
              sx={{ background: "#008000", margin: "0 auto", width: "120%" }}
              onClick={handleLogin}
            >
              Login
            </Button>
            <Stack direction="row" spacing={2} justifyContent="center">
              <Typography>Don't have an account?</Typography>
              <Typography
                onClick={handleSignUpClick}
                sx={{ cursor: 'pointer', color: '#008000', textDecoration: 'underline' }}
              >
                Sign up
              </Typography>
            </Stack>
          </SignInForm>
        </FormContainer>
      </BorderContainer>
    </Container>
  );
}