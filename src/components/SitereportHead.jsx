import { Box, Typography } from '@mui/material';
import React from 'react';
import Calender from './Reusablecomponents/Calender';
import { Projectsite } from './Reusablecomponents/Dropdowndata';
import Dropdownlist from './Reusablecomponents/Dropdownlist';
import useForm from './Validation/useForm';

const initialFvalues={
    projectsite:"",
    monthofworking:""
}

const SiteReportHead = () => {
    const {values,setValues,handleInputChange,errors}=useForm(initialFvalues)
    return (
        <div>
            
           <Typography className='companyname' variant="h3" align="center">Dhyan Construction</Typography>
           <Box sx={{ width:'100%',display:'flex',justifyContent:'center' }}>
           <Typography variant="h6" width="20%" align="center" gutterBottom>Dubai Road P O kallisseri 670324</Typography>
           </Box>
           <Box sx={{ display:'grid',gridTemplateColumns:{sm:'1fr 1fr 1fr'},gap:2,pt:3, pb:3 }}>
           <Dropdownlist
            name="projectsite"
            label="Project Site"
            handleInputChange={handleInputChange}
            options={Projectsite()}
            value={values.projectsite}
            error={errors.projectsite}
          />
          <Typography variant="h6" align="center" sx={{ fontWeight:"bold" }}>PAY OUT</Typography>          <Calender
              label="Month Of Working"
              name="monthofworking"
              views={['year', 'month']}
              inputformat="MM/YYYY"
              setValues={setValues}
              values={values}
            />
          </Box>
        </div>
    );
}

export default SiteReportHead;
