import React from "react";
import { Typography } from "@mui/material";

function Typo(props) {
    const {text}=props
  return (
    <Typography
      variant="h6 "
      component="h2"
      sx={{
        pt: "2%",
        pl: "1%",
        fontSize:'h6.fontSize',
        fontWeight:"bold"
      }}
      display="inline"
    >
      {text}
    </Typography>
  );
}

export default Typo;
