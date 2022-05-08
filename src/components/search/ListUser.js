import React, { useState } from "react";
import {
  Paper,
  Table,
  TableContainer,
  TableCell,
  TableHead,
  TableRow,
  TableBody,
  TablePagination,
  Grid,
} from "@mui/material";

import User from "./User";
import SearchByName from "./SearchByName";
import SearchByHeadquarters from "./SearchByHeadquarters";

const ListUser = () => {
  const [userList, setUserList] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const delUser = () => {};

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const renderList = () => {
    return userList
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((user) => <User user={user} key={user.id} delUser={delUser} />);
  };

  return (
    <div>
      <Paper sx={{ width: "140%", mt: 10, mx: 10 }}>
        <Grid container spacing={1} mx={1} mt={2}>
          <Grid item xs={6}>
            <SearchByName />
          </Grid>
          <Grid item xs={6}>
            <SearchByHeadquarters />
          </Grid>
        </Grid>

        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Nombre</TableCell>
                <TableCell align="right">Apellido</TableCell>
                <TableCell align="right">Correo Eletronico </TableCell>
                <TableCell align="right">Duración usuario </TableCell>
                <TableCell align="right">Sede </TableCell>
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderList()}</TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={userList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default ListUser;
