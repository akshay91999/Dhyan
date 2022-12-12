import { validateDate } from '@mui/x-date-pickers/internals/hooks/validation/useDateValidation'
import {useState} from 'react'

export default function useForm(initialFvalues) {
  const [values,setValues]=useState(initialFvalues)
  const [errors,setErrors]=useState({})
  const handleInputChange=(e)=>{
    const{ name,value }=e.target
    
    setValues({
       
      ...values,
      [name] : value
    })
    const temp={}
    switch(name)
    {
      case 'firstname':
        temp.firstname=value.length>3?"":"first name should be greater than 3 characters";
        break;
      case 'mobile':
        temp.mobile=value.length>9?"":"mobile number needs to be greater than 9 numbers";
        break;
      case 'cprno':
        temp.cprno=value.length>5?"":"cpr number needs to be greater than 5 numbers";
        break;
      case 'visano':
        temp.visano=value.length>5?"":"visa number needs to be greater than 5 numbers";
        break;
      case 'passportno':
        temp.passportno=value.length>5?"":"passport number needs to be greater than 5 numbers";
        break;
        default:
          break;
    }
    setErrors({...temp});

   
   
    
  }
  return {
   values,
   setValues,
   errors,
   setErrors,
   handleInputChange
}
}


