import React from 'react';
import { Box, Typography, Card, Grid, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const FeeCard = ({ className, monthlyFee, yearlyFee }) => {
 const navigate = useNavigate()
 const handleAddSubject = () => {
  navigate('/dashboard/fees/list'); 
};
 
  return (
    <Card 
      sx={{
        padding: '30px',
        marginBottom: '16px',
        borderRadius: '16px',
        width: "800px",
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.2)' 
      }}
    >
      <Typography textAlign="center" sx={{ color: "black", fontSize: "20px" }}>
        {className}
      </Typography>
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '30px' }}>
        <Button
          variant="contained"
          sx={{ backgroundColor: "#008000" }}
          onClick={handleAddSubject} 
        >
          Pay Fees
        </Button>
      </div>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={6}>
          <Typography sx={{ color: "#008000", fontSize: "20px" }}>
            Monthly Fee:
          </Typography>
          <Typography sx={{ color: "black", fontSize: "20px" }}>
            Yearly Fee:
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Box textAlign="right">
            <Typography sx={{ color: "#008000", fontSize: "20px" }}>
              Rs:{monthlyFee}
            </Typography>
            <Typography sx={{ color: "black", fontSize: "20px" }}>
              Rs:{yearlyFee}
            </Typography>
           
       
     
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
};

const FeeStructure= ({ heading }) => {
  return (
    <Box 
      sx={{ 
        width: '100%', 
        margin: 'auto', 
        paddingTop: '40px', 
        backgroundColor: '#f0f0f0', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <Box>
        <Typography 
          variant="h4" 
          align="center" 
          gutterBottom 
          sx={{ textDecoration: "underline",marginBottom:"40px" }}
        >
          {heading}
        </Typography>
        <FeeCard className="Class 1" monthlyFee={500} yearlyFee={6000} />
        <FeeCard className="Class 2" monthlyFee={600} yearlyFee={7200} />
        <FeeCard className="Class 3" monthlyFee={700} yearlyFee={8400} />
        <FeeCard className="Class 4" monthlyFee={800} yearlyFee={9600} />
        <FeeCard className="Class 5" monthlyFee={900} yearlyFee={10800} />
        <FeeCard className="Class 6" monthlyFee={1000} yearlyFee={12000} />
        <FeeCard className="Class 7" monthlyFee={1100} yearlyFee={13200} />
        <FeeCard className="Class 8" monthlyFee={1200} yearlyFee={14400} />
        <FeeCard className="Class 9" monthlyFee={1300} yearlyFee={15600} />
        <FeeCard className="Class 10" monthlyFee={1400} yearlyFee={16800} />


      </Box>
    </Box>
  );
};

export default FeeStructure;