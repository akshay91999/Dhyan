import { Box } from "@mui/system";
import React, { useRef } from "react";
import ReactToPrint, { useReactToPrint } from "react-to-print";
import Btn from "../components/Btn";
import {Payrollview} from "./payrollview";

function Payrollprint() {
  let componentRef = useRef();
//   const handleprint =
//     useReactToPrint({content:()=>componentRef.current})
  
  return (
    <div>
      <Payrollview ref={componentRef} />
      {/* <Box sx={{ p: "1%" }}>
          <Btn text="print" click={handleprint} />
        </Box> */}
    </div>
  );
}

export default Payrollprint;
