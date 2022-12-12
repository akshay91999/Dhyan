import React from 'react'
import Button from '@mui/material/Button';
function Btn(props) {
  const {click,text,type,disabled}=props
  return (
    <>
    
    <Button className='addemployeebutton' onClick={click}  variant="contained" type={type} disabled={disabled} >{text}</Button>
    </>
  )
}

export default Btn