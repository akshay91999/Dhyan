import React, { useEffect, useState } from "react";
import { Box, IconButton, Paper, Tooltip, Typography } from "@mui/material";
import { DataGrid, GridActionsCellItem, GridToolbar } from "@mui/x-data-grid";
import Avatar from "@mui/material/Avatar";


const columns = [
  { field: "id", width: 50, headerClassName: "super-app-theme--header",align:"center",headerAlign: "center"},
  
  {
    field: "name",
    headerName: "Employee Name",
    width: 150,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },
  {
    field: "projectsite",
    headerName: "Project Site",
    width: 150,
    headerClassName: "super-app-theme--header",
    // hide: true,
    align:"center",
    headerAlign: "center"
  },
  {
    field: "contactnumber",
    headerName: "Contact",
    width: 150,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },
  {
    field: "trademaster",
    headerName: "Trade master",
    width: 150,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },
  // { field: "VisitorName", width: 250, headerClassName: "super-app-theme--header" },
  {
    field: "month",
    headerName: "Month",
    width: 100,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },
  {
    field: "hours",
    headerName: "Hours",
    width: 100,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },
  {
    field: "rateperhour",
    headerName: "Rate per Hour",
    width: 150,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },{
    field: "totalsalary",
    headerName: "Total salary",
    width: 150,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },{
    field: "advance",
    headerName: "Advance",
    width: 100,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },{
    field: "wps",
    headerName: "WPS",
    width: 100,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },{
    field: "fine",
    headerName: "Fine",
    width: 100,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },{
    field: "others",
    headerName: "Others",
    width: 100,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },{
    field: "totalreduction",
    headerName: "Total Reduction",
    width: 150,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },{
    field: "net salary",
    headerName: "Net Salary",
    width: 150,
    headerClassName: "super-app-theme--header",
    align:"center",
    headerAlign: "center"
  },
];
export default function SiteReportGrid() {
  const rows=[];
  const [pageSize,setPageSize]=useState(5)

  return (
    <>
      <Paper elevation={4} sx={{ m: "2%", p: "2%" }}>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#1565C0", pb: "2%" }}
        >
          Employee List
        </Typography>

        <Box
          sx={{
            height: "60vh",
            width: "100%",
            "& .super-app-theme--header": {
              background: "linear-gradient(#8B8B8B,#1565C0)",
            },
          }}
        >
          <DataGrid
            columns={columns}
            rows={rows}
            components={{ Toolbar: GridToolbar }}
            pageSize={pageSize}
            onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
            rowsPerPageOptions={[5, 10, 20]}
            pagination
            sx={{
              boxShadow: 2,
              border: 2,
              borderColor: "primary.light",
              "& .MuiDataGrid-cell:hover": {
                color: "primary.main",
              },
            }}
          />
        </Box>
      </Paper>
    </>
  );
}
