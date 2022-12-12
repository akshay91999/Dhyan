import React, { useRef } from 'react'
import AddEmployee from './AddEmployee'
import { Route, Routes } from 'react-router-dom';
import Cardbutton from './Cardbutton';
import PayrollPage from './PayrollPage'
import Payrollprint from './Payrollprint'
import { ReportSite} from './Reportsite';


function Routing() {
    const componentRef = useRef();
  return (
    <>
      <Routes>
      <Route element={<Cardbutton/>} path="/" />
      <Route element={<AddEmployee/>} path="/addemployee" />
      <Route element={<PayrollPage/>} path="/payrollpage" />
      <Route element={<Payrollprint/>} path="/payrollprint" />
      <Route element={<ReportSite ref={componentRef}/>} path="/reportsite" />
    </Routes>
    </>
  )
}

export default Routing
