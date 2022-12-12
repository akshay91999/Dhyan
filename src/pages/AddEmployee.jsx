import { Box, Paper, Typography } from "@mui/material";
import { flexbox } from "@mui/system";
import { DesktopDatePicker } from "@mui/x-date-pickers";
import React, { useState } from "react";
import { useEffect } from "react";
import Btn from "../components/Btn.jsx";
import Calender from "../components/Reusablecomponents/Calender.jsx";
import { getDepartmentname } from "../components/Reusablecomponents/Dropdowndata.jsx";
import Dropdownlist from "../components/Reusablecomponents/Dropdownlist.jsx";
import Textfield from "../components/Reusablecomponents/Textfield.jsx";
import useForm from "../components/Validation/useForm.jsx";
import "../pages/AddEmployee.css";

const initialFvalues = {
  firstname: "",
  lastname: "",
  mobile: "",
  cprno: "",
  cprissuedate: "",
  cprexpirydate: "",
  visatype: "",
  visano: "",
  visaissuedate: "",
  visaexpirydate: "",
  passportno: "",
  passportissuedate: "",
  passportexpirydate: "",
};

function AddEmployee() {
  const { values, setValues, errors, setErrors, handleInputChange } =
    useForm(initialFvalues);

  const [enable, setEnable] = useState(true);

  const handlesubmit = () => {
    console.log(values);
    console.log(errors);
    window.alert("successful");
  };
  const handleclear = () => {
    setValues({
      firstname: "",
      lastname: "",
      mobile: "",
      cprno: "",
      cprissuedate: "",
      cprexpirydate: "",
      visatype: "",
      visano: "",
      visaissuedate: "",
      visaexpirydate: "",
      passportno: "",
      passportissuedate: "",
      passportexpirydate: "",
    });
  };

  useEffect(() => {
    const validate = () => {
      let temp = {};
      temp.firstname =
        values.firstname.length > 3 ? "" : "This field is required";
      temp.lastname = values.lastname ? "" : "This field is required";
      temp.mobile = values.mobile.length > 9 ? "" : "This field is required";
      temp.cprno = values.cprno.length > 4 ? "" : "This field is required";
      temp.visano = values.visano ? "" : "This field is required";
      temp.passportno =
        values.passportno.length > 4 ? "" : "This field is required";
      temp.visatype = values.visatype ? "" : "please select visa type";
      temp.cprexpirydate = values.cprexpirydate
        ? ""
        : "please select cprexpiredate";
      temp.cprissuedate = values.cprissuedate
        ? ""
        : "please select cprissuedate";
      temp.visaissuedate = values.visaissuedate
        ? ""
        : "please select visaissuedate";
      temp.passportissuedate = values.passportissuedate
        ? ""
        : "please select passportissuedate";
      temp.passportexpirydate = values.passportexpirydate
        ? ""
        : "please select passportexpiredate";
      temp.visaexpirydate = values.visaexpirydate
        ? ""
        : "please select visaexpiredate";
      return Object.values(temp).every((x) => x === "");
    };
    console.log(!validate());
    setEnable(!validate());
  }, [values]);

  return (
    <>
      <Box
        // className="addemployeebox"
        sx={{ background: "linear-gradient(#c2e59c,#64b3f4)", p: "2%" }}
      >
        <Paper elevation={6} sx={{ p: "2%" }}>
          <Typography
            variant="h4"
            gutterBottom
            component="div"
            sx={{
              color: "#64b3f4",
              p: "2%",
              display: "flex",
              justifyContent: "center",
              fontFamily: "Brush Script",
            }}
          >
            Enter Employee Details
          </Typography>

          <Box
            // component="form"
            // noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr" },
              gap: 3,
              width: "100%",
            }}
          >
            <Textfield
              label="First Name"
              name="firstname"
              value={values.firstname}
              error={errors.firstname}
              onChange={handleInputChange}
            />
            <Textfield
              label="Last Name"
              name="lastname"
              value={values.lastname}
              error={errors.lastname}
              onChange={handleInputChange}
              required="false"
            />
            <Textfield
              label="Mobile"
              name="mobile"
              value={values.mobile}
              error={errors.mobile}
              onChange={handleInputChange}
              type="number"
            />
            <Textfield
              label="CPR NO"
              name="cprno"
              value={values.cprno}
              error={errors.cprno}
              onChange={handleInputChange}
            />
            <Calender
              label="Issued Date"
              name="cprissuedate"
              setValues={setValues}
              values={values}
            />
            <Calender
              label="Expiry Date"
              name="cprexpirydate"
              setValues={setValues}
              values={values}
             
            />
          </Box>
          <Box sx={{ pt: 2, pb: 2 }}>
            <Dropdownlist
              name="visatype"
              label="Visa Type"
              value={values.visatype}
              handleInputChange={handleInputChange}
              options={getDepartmentname()}
            />
          </Box>
          <Box
            component="form"
            noValidate
            sx={{
              display: "grid",
              gridTemplateColumns: { sm: "1fr 1fr 1fr" },
              gap: 3,
              width: "100%",
            }}
          >
            <Textfield
              label="Visa No"
              name="visano"
              value={values.visano}
              error={errors.visano}
              onChange={handleInputChange}
            />
            <Calender
              label="Issued Date"
              name="visaissuedate"
              setValues={setValues}
              values={values}
            />
            <Calender
              label="Expiry Date"
              name="visaexpirydate"
              setValues={setValues}
              values={values}
            />
            <Textfield
              label="Passport No"
              name="passportno"
              value={values.passportno}
              error={errors.passportno}
              onChange={handleInputChange}
            />
            <Calender
              label="Issued Date"
              name="passportissuedate"
              setValues={setValues}
              values={values}
            />
            <Calender
              label="Expiry Date"
              name="passportexpirydate"
              setValues={setValues}
              values={values}
            />
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              pt: "3%",
              pb: "2%",
              gap: 2,
            }}
          >
            <Btn text="Submit" click={handlesubmit} disabled={enable} />
            <Btn text="Reset" click={handleclear} />
          </Box>
        </Paper>
      </Box>
    </>
  );
}

export default AddEmployee;
