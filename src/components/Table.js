import * as React from "react"
import { useState } from "react"
import Table from "@mui/material/Table"
import TableBody from "@mui/material/TableBody"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TableCell, { tableCellClasses } from "@mui/material/TableCell"
import Paper from "@mui/material/Paper"
import { styled } from "@mui/material/styles"
import OppCard from "./OppCard"
import * as opportunities from "../data/opportunities.json"

export default function BasicTable() {
  /* A basic table to display all non-nested information from opportunities.json */
  const data = opportunities.default
  const [open, setOpen] = useState(false)
  const [cardData, setCardData] = useState()

  function handleRowClick(event, row) {
    console.log("row", row)
    setOpen(true)
    setCardData(row)
  }

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "#74AEFA",
      color: theme.palette.common.white,
      fontSize: 18,
      "@media (max-width:600px)": {
        fontSize: 14,
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 18,
      },
      fontWeight: 600,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
      fontWeight: 500,
      color: "#0A193F",
    },
  }))

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }))

  return (
    <>
      <TableContainer component={Paper} sx={{ m: 4 }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="left">Opp Name</StyledTableCell>
              <StyledTableCell align="left">Opp Stage</StyledTableCell>
              <StyledTableCell align="center">Rep Probability</StyledTableCell>
              <StyledTableCell align="center">PX Probability</StyledTableCell>
              <StyledTableCell align="center">PX Tier</StyledTableCell>
              <StyledTableCell align="right">Amount</StyledTableCell>
              <StyledTableCell align="left">Product</StyledTableCell>
              <StyledTableCell align="left">Sales Rep</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <StyledTableRow
                onClick={(event) => handleRowClick(event, row)}
                key={row.oppId}
                sx={{
                  "&:last-child td, &:last-child th": { border: 0 },
                }}
              >
                <StyledTableCell component="th" scope="row">
                  {row.oppName}
                </StyledTableCell>
                <StyledTableCell align="left">{row.stage}</StyledTableCell>
                <StyledTableCell align="center">
                  {(row.repProbability * 100).toFixed(0)}%
                </StyledTableCell>
                <StyledTableCell align="center">
                  {(row.possibleProbability * 100).toFixed(0)}%
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row.possibleTier}
                </StyledTableCell>
                <StyledTableCell align="right">
                  ${row.amount.toFixed(2)}
                </StyledTableCell>
                <StyledTableCell align="left">{row.product}</StyledTableCell>
                <StyledTableCell align="left">
                  {row.salesRepName}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {open ? (
        <OppCard cardData={cardData} closePopup={() => setOpen(false)} />
      ) : null}
    </>
  )
}
