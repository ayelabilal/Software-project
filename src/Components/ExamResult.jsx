import React from 'react';
import { Card, CardContent, Typography, Container, Grid, Box } from '@mui/material';

const examResults = [
  {
    className: 'Class 1 Results',
    columns: ['Student Name', 'Roll Number', 'Grade'],
  },
  {
    className: 'Class 2 Results',
    columns: ['Student Name', 'Roll Number', 'Grade'],
  },
  {
    className: 'Class 3 Results',
    columns: ['Student Name', 'Roll Number', 'Grade'],
  },
  {
    className: 'Class 4 Results',
    columns: ['Student Name', 'Roll Number', 'Grade'],
  },
  {
    className: 'Class 5 Results',
    columns: ['Student Name', 'Roll Number', 'Grade'],
  },
  {
    className: 'Class 6 Results',
    columns: ['Student Name', 'Roll Number', 'Grade'],
  },
  {
    className: 'Class 7 Results',
    columns: ['Student Name', 'Roll Number', 'Grade'],
  },
  {
    className: 'Class 8 Results',
    columns: ['Student Name', 'Roll Number', 'Grade'],
  },
  {
    className: 'Class 9 Results',
    columns: ['Student Name', 'Roll Number', 'Grade'],
  },
  {
    className: 'Class 10 Results',
    columns: ['Student Name', 'Roll Number', 'Grade'],
  },
];

const ExamResult = ({text}) => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" sx={{textDecoration:"underline"}}>
          {text}
          </Typography>
        </Box>
        <Grid container spacing={7}>
          {examResults.map((result, index) => (
            <Grid item xs={12} key={index}>
              <Box mb={2}>
                <Typography variant="h6" component="h2" sx={{fontSize:"18px",color:"black"}}>
                  {result.className}
                </Typography>
              </Box>
              <Card sx={{ backgroundColor: '#F0F0F0',}}>
                <CardContent>
                  <Grid container justifyContent="space-between">
                    {result.columns.map((column, idx) => (
                      <Grid item key={idx}>
                        <Typography variant="body1" fontWeight="bold" sx={{fontSize:"15px",color:"black"}}>
                          {column}
                        </Typography>
                      </Grid>
                    ))}
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ExamResult;