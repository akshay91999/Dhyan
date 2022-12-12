import { Box, Paper } from "@mui/material";
import React from "react";
import { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import Btn from "../components/Btn";
import SalaryTable from "../components/SalaryTable";
import SiteReportGrid from "../components/SitereportGrid";
import SiteReportHead from "../components/SitereportHead";

export const ReportSite = React.forwardRef((props, ref) => {
  const handleprint = useReactToPrint({ content: () => ref.current });

  return (
    <>
      <Box sx={{ p: 2, background: "linear-gradient(#c2e59c,#64b3f4)" }}>
        <Paper elevation={6}>
          <Box ref={ref} sx={{ p:3 }}>
          <SiteReportHead />
          <SalaryTable />
          </Box>
          <Box sx={{ p: 3 }}>
            <Btn text="Print" click={handleprint} />
          </Box>
        </Paper>
      </Box>
    </>
  );
});
