import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Divider } from "@mui/material";
import { Typography } from "@mui/material";
import Typo from "../components/Typo.jsx";
import Typodata from "../components/Typodata.jsx";
import { flexbox } from "@mui/system";
import Btn from "../components/Btn.jsx";
import { useReactToPrint } from "react-to-print";

export const Payrollview=React.forwardRef((props, ref)=> {
  const handleprint =
    useReactToPrint({content:()=>ref.current})
  
  return (
    <Box
      
      // className="addemployeebox"
      sx={{ background: "linear-gradient(#c2e59c,#64b3f4)", p:"2%" }}
    >
      <Paper elevation={6} >
        <Box ref={ref} sx={{ p:"2%" }}>
        <Box sx={{ background: "#E4E6E7",mb:1,mt:1 }}>
          <Grid container spacing={2} sx={{ p: 1 }}>
            <Grid item xs={6}>
              <Typography variant="h5 " component="h2" display="inline">
                Employ ID :
              </Typography>
              <Typodata data="D23" />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h4 "
                component="h2"
                sx={{
                  pt: "1%",
                  pl: "1%",
                }}
                display="inline"
              >
                Employ Name :
              </Typography>
              <Typodata data="abc" />
            </Grid>
          </Grid>
        </Box>
        <Divider />

        <Box
          sx={{
            pb: "2%",
            lineHeight: 2,
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography
                variant="h6 "
                component="h2"
                sx={{
                  pt: "1%",
                  pl: "1%",
                  pb: "1%",
                  fontSize: "h5.fontsize",
                }}
              >
                Salary details
              </Typography>
              <Typo text="Trade master :" />
              <Typodata data="master 1" />
              <br />
              <Typo text="Project site :" />
              <Typodata data="dubai" />
              <br />
              <Typo text="Date :" />
              <Typodata data="30-11-2022" />
              <br />
              <Typo text="Hours worked :" />
              <Typodata data="5 h" />
              <br />
              <Typo text="Pay per hour :" />
              <Typodata data="200" />
              <br />
              <Typo text="Total salary :" />
              <Typodata data="1000" />
              <br />
            </Grid>
            <Grid item xs={6}>
              <Typography
                variant="h6 "
                component="h2"
                sx={{
                  pt: "2%",
                  pl: "1%",
                  pb: "1%",
                  fontSize: "h5.fontsize",
                }}
              >
                Payment reduction details
              </Typography>
              <Typo text="Advance paid :" />
              <Typodata data="500" />
              <br />
              <Typo text="WPS :" />
              <Typodata data="####" />
              <br />
              <Typo text="Fine :" />
              <Typodata data="####" />
              <br />
              <Typo text="Others :" />
              <Typodata data="####" />
              <br />
              <Typo text="Total reduction :" />
              <Typodata data="####" />
              <br />
            </Grid>
          </Grid>
        </Box>
        <Divider />
        <Box sx={{ mt:1,pt:2,pb:2,background: "#E4E6E7" }}>
          <Typography
             variant="h6 "
             component="h2"
             sx={{
               pt: "2%",
               pl: "1%",
               pb: "1%",
               fontSize: "h5.fontsize",
               display:'inline'
             }}
          >
            Net Salary
          </Typography>
          <Typodata data="15000" />
        </Box>
        </Box>
        <Box sx={{ p: "2%" }}>
          <Btn text="print" click={handleprint} />
        </Box>
      </Paper>
    </Box>
  );
})
