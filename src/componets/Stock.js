import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 640,
  },

  green: {
    color: "green",
  },
  red: {
    color: "red",
  },
});

const Stock = ({ companyName, symbol, latestPrice, changePercent }) => {
  const classes = useStyles();
  return (
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead component="th" scope="row">
          <TableCell>{companyName}</TableCell>
          <TableCell align="right">{symbol}</TableCell>
          <TableCell align="right">{latestPrice}</TableCell>
          <TableCell
            align="right"
            className={changePercent > 0 ? classes.green : classes.red}
          >
            {"%" + changePercent.toFixed(2)}
          </TableCell>
        </TableHead>
      </Table>
    </TableContainer>
  );
};

export default Stock;
