import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import PaymentProfile from "./PaymentProfile";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Btn from "./Btn";
import Textfield from "./Reusablecomponents/Textfield";
import useForm from "./Validation/useForm";
const initialFvalues={
    employeeid:''
}

const PaymentHead = (props) => {
    const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
    const {onClick}=props
    const validate=()=>{
        let temp={}
        temp.employeeid=values.employeeid?"":"please enter the employeeid"
        setErrors({...temp})
        return Object.values(temp).every((x) => x=="");
    }
    const handlesubmit=()=>{
    if(validate())
    {
        onClick()
        console.log(values)
    }
    }

  return (
    <>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { sm: "1fr 1fr 1fr" },
          gap: 3,
          width: "100%",
        }}
      >
        <Textfield
          label="empoyee id"
          name="employeeid"
          value={values.employeeid}
          error={errors.employeeid}
          onChange={handleInputChange}
        />
        <Box sx={{ display:'flex',gap:3,width:'100%',height:40}}>

        <Btn
          text='enter'
          click={handlesubmit}
        />
        </Box>
        <PaymentProfile />
      </Box>
    </>
  );
};

export default PaymentHead;
