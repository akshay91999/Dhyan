import React from 'react';
import {  Typography } from '@mui/material'
import Box from '@mui/material/Box';


const PaymentProfile = () => {
    return (
    <>
        <Box sx={{ display:'flex',gap:1 }}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold"}}
            >
              NAME :
            </Typography>
            <Typography variant="h6" >
            Akshay
            </Typography>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold"}}
            >
             CPR NO :
            </Typography>
            <Typography variant="h6" >
             123456789
            </Typography>
            </Box>
        
        </>
    );
}

export default PaymentProfile;
