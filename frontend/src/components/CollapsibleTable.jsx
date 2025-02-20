import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Stack } from "@mui/material";
import {
  Check,
  CheckRounded,
  Delete,
  Edit,
  LeakAdd,
  LeakRemove,
  Undo,
  Visibility,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Grid from "@mui/material/Grid2";
import TablePagination from "@mui/material/TablePagination";
import { useState } from "react";
import CustomAlert from "./CustomAlert";

// Row.propTypes = {
//   row: PropTypes.shape({
//     calories: PropTypes.number.isRequired,
//     carbs: PropTypes.number.isRequired,
//     fat: PropTypes.number.isRequired,
//     history: PropTypes.arrayOf(
//       PropTypes.shape({
//         amount: PropTypes.number.isRequired,
//         customerId: PropTypes.string.isRequired,
//         date: PropTypes.string.isRequired,
//       }),
//     ).isRequired,
//     name: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//     protein: PropTypes.number.isRequired,
//   }).isRequired,
// };

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0, 3.99),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3, 4.99),
//   createData('Eclair', 262, 16.0, 24, 6.0, 3.79),
//   createData('Cupcake', 305, 3.7, 67, 4.3, 2.5),
//   createData('Gingerbread', 356, 16.0, 49, 3.9, 1.5),
// ];

export default function CollapsibleTable({ rows, columns, func }) {
  const [page, setPage] = useState(0);
  const [deleteId, setDeleteId] = useState(0);
  const [alertOpen, setAlertopen] = useState(false);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  function alertAction(id) {
    setDeleteId(id);
    console.log(deleteId);
    setAlertopen(true);
  }
  function alertClose(id) {
    setAlertopen(false);
  }
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  function Row(props) {
    const { row } = props;
    const [open, setOpen] = useState(false);

    return (
      <React.Fragment>
        <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
          <TableCell>
            <IconButton
              aria-label="expand row"
              size="small"
              onClick={() => setOpen(!open)}
            >
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.name}
          </TableCell>
          <TableCell align="right">{row.location}</TableCell>
          <TableCell align="right">{row.mac}</TableCell>
          <TableCell align="right">{row.type}</TableCell>
          <TableCell align="right">
            {row.active ? <LeakAdd /> : <LeakRemove />}
          </TableCell>
          <TableCell align="right">{row.model}</TableCell>
          <TableCell align="right">{row.serial_no}</TableCell>
          <TableCell align="right">{row.status}</TableCell>
          <TableCell align="right">
            <Stack direction="row">
              <IconButton
                color="error"
                onClick={() => {alertAction(row.id)}}
                aria-label="delete"
              >
                <Delete />
              </IconButton>

              <IconButton
                color="primary"
                aria-label="add"
                onClick={() => func(row.id)}
              >
                <Edit />
              </IconButton>

              <IconButton color="primary" aria-label="add">
                <Link to={`/${row.id}`}>
                  <Visibility />
                </Link>
              </IconButton>
            </Stack>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={8}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Grid container>
                <Grid sx={{ margin: 1 }}>
                  <Typography variant="h6" gutterBottom component="div">
                    Network
                  </Typography>
                  <Table size="small" aria-label="purchases">
                    <TableHead>
                      <TableRow>
                        <TableCell>Vlan</TableCell>
                        <TableCell>Address</TableCell>
                        <TableCell>IP</TableCell>
                        <TableCell>PORT</TableCell>
                        <TableCell>COMMENT</TableCell>
                        <TableCell>LAST UPDATE</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {row.networks.map((network) => (
                        <TableRow key={network.id}>
                          <TableCell>{network.vlan}</TableCell>
                          <TableCell>{network.address}</TableCell>
                          <TableCell>{network.ip}</TableCell>
                          <TableCell>{network.port}</TableCell>
                          <TableCell>{network.comment}</TableCell>
                          <TableCell>{network.update_dt}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </Grid>
              </Grid>
            </Collapse>
          </TableCell>
        </TableRow>
        {/* <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      /> */}
      </React.Fragment>
    );
  }

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <CustomAlert open={alertOpen} close={alertClose} data={deleteId} />
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              {columns &&
                columns?.map((column, index) => (
                  <TableCell key={index}>{column.name}</TableCell>
                ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows?.map((row) => <Row key={row.name} row={row} />)}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
