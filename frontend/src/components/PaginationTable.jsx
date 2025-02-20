import * as React from 'react';
import { styled } from '@mui/material/styles';
import PropTypes from 'prop-types';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton, Stack, TablePagination } from '@mui/material';
import { Delete, Edit, LeakAdd, LeakRemove, Visibility } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { TableFooter } from 'mui-datatables';

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
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

export default function PaginationTable({columns,rows,func}) {
 

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  return (
    <Paper>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
          {columns.map((column) => (           
             <StyledTableCell>{column.name}</StyledTableCell>
          ))}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row.location}</StyledTableCell>
              <StyledTableCell align="right">{row.mac}</StyledTableCell>
              <StyledTableCell align="right">{row.type}</StyledTableCell>
              <StyledTableCell align="right">{row.active ? <LeakAdd /> : <LeakRemove/>}</StyledTableCell>
              <StyledTableCell align="right">{row.model}</StyledTableCell>
              <StyledTableCell align="right">{row.serial_no}</StyledTableCell>
              <StyledTableCell align="right">{row.status}</StyledTableCell>
              <StyledTableCell align="right">
                <Stack direction="row">
              <IconButton
                color="error"
                onClick={() => {alertAction(row.id)}}
                aria-label="delete"
              >
                <Delete/>
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
            </StyledTableCell>
              
              
            </StyledTableRow>
          ))}
        </TableBody>
        
      </Table>
    </TableContainer>
   
       <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}