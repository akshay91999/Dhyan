import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Btn from "./Btn";
import { Box } from "@mui/system";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const rows = [
  {
    id: 1,
    name: "Akshay",
    contact: "7994138160",
    projectsite: "qatar",
    trade: "govindan",
    hour: "25",
    rph: "400",
    salary: "5000",
    wps: "300",
    advance:'500',
    fine:'200',
    others:'100',
    netsalary:'5000'
  },
  {
    id: 1,
    name: "Akshay",
    contact: "7994138160",
    projectsite: "qatar",
    trade: "govindan",
    hour: "25",
    rph: "400",
    salary: "5000",
    wps: "300",
    advance:'500',
    fine:'200',
    others:'100',
    netsalary:'5000'
  },
  {
    id: 1,
    name: "Akshay",
    contact: "7994138160",
    projectsite: "qatar",
    trade: "govindan",
    hour: "25",
    rph: "400",
    salary: "5000",
    wps: "300",
    advance:'500',
    fine:'200',
    others:'100',
    netsalary:'5000'
  },
  {
    id: 1,
    name: "Akshay",
    contact: "7994138160",
    projectsite: "qatar",
    trade: "govindan",
    hour: "25",
    rph: "400",
    salary: "5000",
    wps: "300",
    advance:'500',
    fine:'200',
    others:'100',
    netsalary:'5000'
  },
  {
    id: 1,
    name: "Akshay",
    contact: "7994138160",
    projectsite: "qatar",
    trade: "govindan",
    hour: "25",
    rph: "400",
    salary: "5000",
    wps: "300",
    advance:'500',
    fine:'200',
    others:'100',
    netsalary:'5000'
  },
  {
    id: 2,
    name: "Akshay",
    contact: "7994138160",
    projectsite: "qatar",
    trade: "govindan",
    hour: "25",
    rph: "400",
    salary: "5000",
    wps: "300",
    advance:'500',
    fine:'200',
    others:'100',
    netsalary:'5000'
  },
  {
    id: 3,
    name: "Akshay",
    contact: "7994138160",
    projectsite: "qatar",
    trade: "govindan",
    hour: "25",
    rph: "400",
    salary: "5000",
    wps: "300",
    advance:'500',
    fine:'200',
    others:'100',
    netsalary:'5000'
  },
  {
    id: 4,
    name: "Akshay",
    contact: "7994138160",
    projectsite: "qatar",
    trade: "govindan",
    hour: "25",
    rph: "400",
    salary: "5000",
    wps: "300",
    advance:'500',
    fine:'200',
    others:'100',
    netsalary:'5000'
  },
  {
    id: 5,
    name: "Akshay",
    contact: "7994138160",
    projectsite: "qatar",
    trade: "govindan",
    hour: "25",
    rph: "400",
    salary: "5000",
    wps: "300",
    advance:'500',
    fine:'200',
    others:'100',
    netsalary:'5000'
  },
];

export default function SalaryTable() {
    const handleprint=()=>{
        window.print()
    }
  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">ID</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Project Site</StyledTableCell>
            <StyledTableCell align="center">Trade Master</StyledTableCell>
            <StyledTableCell align="center">Total Hour</StyledTableCell>
            <StyledTableCell align="center">Rate Per Hour</StyledTableCell>
            <StyledTableCell align="center">Salary</StyledTableCell>
            <StyledTableCell align="center">Wps</StyledTableCell>
            <StyledTableCell align="center">Advance</StyledTableCell>
            <StyledTableCell align="center">Fine</StyledTableCell>
            <StyledTableCell align="center">Others</StyledTableCell>
            <StyledTableCell align="center">Salary</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell align="center">{row.id}</StyledTableCell>
              <StyledTableCell align="center">{row.name}</StyledTableCell>
              <StyledTableCell align="center">{row.contact}</StyledTableCell>
              <StyledTableCell align="center">{row.projectsite}</StyledTableCell>
              <StyledTableCell align="center">{row.trade}</StyledTableCell>
              <StyledTableCell align="center">{row.hour}</StyledTableCell>
              <StyledTableCell align="center">{row.rph}</StyledTableCell>
              <StyledTableCell align="center">{row.salary}</StyledTableCell>
              <StyledTableCell align="center">{row.wps}</StyledTableCell>
              <StyledTableCell align="center">{row.advance}</StyledTableCell>
              <StyledTableCell align="center">{row.fine}</StyledTableCell>
              <StyledTableCell align="center">{row.others}</StyledTableCell>
              <StyledTableCell align="center">{row.netsalary}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
