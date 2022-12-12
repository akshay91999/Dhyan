import React from "react";
import { Typography } from "@mui/material";

function Typodata(props) {
  const { data } = props;
  return (
    <Typography
      variant="h6 "
      component="h2"
      sx={{
        pt: "2%",
        pl: "1%",
        fontSize:'h6.fontSize',
        fontWeight:"regular",       
      }}
      display="inline"
      
    >
      {data}
    </Typography>
  );
}

export default Typodata;
