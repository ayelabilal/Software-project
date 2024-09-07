import React from 'react';
import { Card, CardContent, Typography, Button, Container, Grid, Box } from '@mui/material';

const examData = [
  {
    className: 'Class 1 - Mathematics',
    date: '2024 - 08 - 15',
    startTime: '09:00 AM',
    endTime: '12:00 PM',
  },
  {
    className: 'Class 1 - English',
    date: '2024 - 08 - 16',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 2 - Science',
    date: '2024 - 08 - 17',
    startTime: '9:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 2 - Histroy',
    date: '2024 - 08 - 18',
    startTime: '9:00 AM',
    endTime: '12:00 PM',
  },
  {
    className: 'Class 3 - Geography',
    date: '2024 - 08 - 19',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 3 - Physics',
    date: '2024 - 08 - 20',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 4 - Chemistry',
    date: '2024 - 08 - 21',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 5 - Mathematics',
    date: '2024 - 08 - 23',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 5 - English',
    date: '2024 - 08 - 24',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 6 - Science',
    date: '2024 - 08 - 26',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 6 - Histroy',
    date: '2024 - 08 - 27',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 7 - Geography',
    date: '2024 - 08 - 28',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 7 - Physics',
    date: '2024 - 08 - 29',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 8 - Chemistry',
    date: '2024 - 08 - 30',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 9 - Mathematics',
    date: '2024 -09-1',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 9 - English',
    date: '2024 -09-2',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 10 - Science',
    date: '2024 -09-3',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 10 - Histroy',
    date: '2024  - 09 - 4',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 10 - Geography',
    date: '2024  - 09 - 5',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
  {
    className: 'Class 10 - Physics',
    date: '2024 - 09 - 6',
    startTime: '10:00 AM',
    endTime: '01:00 PM',
  },
];

const ExamsSchedule = ({heading}) => {
  return (
    <Box sx={{ backgroundColor: '#f5f5f5', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Box textAlign="center" mb={4}>
          <Typography variant="h4" component="h1" sx={{textDecoration:"underline"}}>
            {heading}
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {examData.map((exam, index) => (
            <Grid item xs={12} key={index}>
              <Card sx={{ boxShadow: 7 }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {exam.className}
                  </Typography>
                  <Typography color="textSecondary">
                    Date: {exam.date}
                  </Typography>
                  <Typography color="textSecondary">
                    Start Time: {exam.startTime} | End Time: {exam.endTime}
                  </Typography>
                  <Box mt={2}>
                    <Button variant="contained" sx={{backgroundColor:"#008000"}}>
                      View Details
                    </Button>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>

  );
};

export default ExamsSchedule;