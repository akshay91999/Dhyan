import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Textfield from "./Reusablecomponents/Textfield";
import Btn from "./Btn";
import useForm from "./Validation/useForm";
import { useNavigate } from "react-router-dom";

const initialFvalues = {
  advancepaid: "0",
  wps: "0",
  finepaid: "0",
  others:"0",
};

const ReductionForm = () => {
  const navigate=useNavigate()
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);
    const handlesubmit=()=>{
      console.log(values)
      navigate("/payrollprint")
    }
  return (
    <>
      <fieldset>
        <legend>
          <Typography
            variant="h6"
            gutterBottom
            component="div"
            sx={{ pt: "2%", color: "#64b3f4" }}
          >
            Payment Reduction Details
          </Typography>
        </legend>
        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr " },
            gap: 2,
            width: "100%",
          }}
        >
          <Textfield
            label="Advance paid"
            name="advancepaid"
            value={values.advancepaid}
            onChange={handleInputChange}
          />

          <Textfield
            label="WPS"
            id="wps"
            name="wps"
            value={values.wps}
            onChange={handleInputChange}
          />
        </Box>

        <Box
          component="form"
          noValidate
          sx={{
            display: "grid",
            gridTemplateColumns: { sm: "1fr 1fr" },
            gap: 2,
            width: "100%",
            mt: "2%",
          }}
        >
          <Textfield
            label="Fine"
            name="finepaid"
            value={values.finepaid}
            onChange={handleInputChange}
          />
          <Textfield
            label="Others"
            name="others"
            value={values.others}
            onChange={handleInputChange}
          />
        </Box>
        <Box sx={{ display: "grid", width: "25%", mt: "2%" }}>
          <Typography sx={{ pt: 1, fontWeight: "bold" }}>
            Total Reduction : 2300
          </Typography>
        </Box>
        <Box sx={{ pt: 2 }}>
          <Btn text="save" click={handlesubmit}/>
        </Box>
      </fieldset>
    </>
  );
};

export default ReductionForm;
