import React, { useState } from "react";
import PaymentForm from "../components/PaymentForm";
import ReductionForm from "../components/ReductionForm";
import PaymentHead from "../components/PaymentHead";
import { Box } from "@mui/system";
import { Paper } from "@mui/material";


const PayrollPage = () => {
  const [payform,setPayForm]=useState(false)
  const [reductionform,setReductionform]=useState(false)
  // for handling enter pressing in paymenthead component

  const payheadenter=()=>{
    setPayForm(true)
  }
// for handling save button pressing in paymentform component
  const payformsave=()=>{
    setReductionform(true)
  }
  return (
    <>
       <Box
        // className="addemployeebox"
        sx={{ background: "linear-gradient(#c2e59c,#64b3f4)", p: "2%" }}
      >
        <Paper elevation={6} sx={{ p: "2%" }}>
          <PaymentHead onClick={payheadenter}/>
          {payform?<PaymentForm onClick={payformsave}/>:null}
          {reductionform?<ReductionForm />:null}
        </Paper>
      </Box>
    </>
  );
};

export default PayrollPage;
