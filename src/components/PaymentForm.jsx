import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Textfield from "./Reusablecomponents/Textfield";
import Calender from "./Reusablecomponents/Calender";
import Dropdownlist from "./Reusablecomponents/Dropdownlist";
import { Projectsite, Trademaster } from "./Reusablecomponents/Dropdowndata";
import useForm from "./Validation/useForm";
import Btn from "./Btn";
import { validateDate } from "@mui/x-date-pickers/internals/hooks/validation/useDateValidation";

const initialFvalues = {
    trademaster: "",
    projectsite: "",
    monthofworking:"",
    hoursworked:"",
    payperhour:""
  };

const PaymentForm = (props) => {
    const {onClick}=props
    const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
    
    const validate=()=>{
        const temp={}
        temp.trademaster=values.trademaster?"":"please select an trademaster"
        temp.projectsite=values.projectsite?"":"please select an project site"
        temp.hoursworked=values.hoursworked?"":"please provide the hours worked"
        temp.payperhour=values.payperhour?"":"please provide the pay per hour details"
        setErrors({...temp})
        return Object.values(temp).every((x)=>x==="")
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
      <fieldset>
        <legend>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{pt:'2%', color: "#64b3f4" }}
          >
            salary details
          </Typography>
        </legend>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr 1fr" },
            gap: 2,
            width: "100%",
          }}
        >
          <Dropdownlist
            name="trademaster"
            label="Trade Master"
            handleInputChange={handleInputChange}
            options={Trademaster()}
            value={values.trademaster}
            error={errors.trademaster}
          />
          {/* project site */}
          <Dropdownlist
            name="projectsite"
            label="Project Site"
            handleInputChange={handleInputChange}
            options={Projectsite()}
            value={values.projectsite}
            error={errors.projectsite}
          />
            <Calender
              label="Month Of Working"
              name="monthofworking"
              views={['year', 'month']}
              inputformat="MM/YYYY"
              setValues={setValues}
              values={values}
            />
        </Box>

        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr 1fr" },
            gap: 2,
            width: "100%",
            mt: "2%",
          }}
        >
          <Textfield
            label="hours worked"
            name="hoursworked"
            type="number"
            value={values.hoursworked}
            error={errors.hoursworked}
            onChange={handleInputChange}
          
          />
          <Textfield
            label="pay per hour"
            name="payperhour"
            value={values.payperhour}
            error={errors.payperhour}
            onChange={handleInputChange}
          />
          <Typography
          sx={{ pt:1,fontWeight:'bold' }}
          >
            Total Salary: 4500
          </Typography>
        </Box>
        <Box sx={{ pt:2 }}>
        <Btn text='save' click={handlesubmit}/>
        </Box>
        
      </fieldset>
    </>
  );
};
export default PaymentForm;
