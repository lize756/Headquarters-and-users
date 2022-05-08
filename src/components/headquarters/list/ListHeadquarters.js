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

import Headquarter from "./Headquarter";

const ListHeadquarters = () => {
  const [headquarterList, setHeadquarterListList] = useState([]);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const delHead = () => {};

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const renderList = () => {
    return headquarterList
      .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((headquarter) => (
        <Headquarter
          headquarter={headquarter}
          key={headquarter.id}
          delHead={delHead}
        />
      ));
  };
  return (
    <div>
      <Paper sx={{ width: "120%", mt: 10 }}>
        <TableContainer sx={{ maxHeight: 400 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell align="right">Nombre sede</TableCell>
                <TableCell align="right">Nombre del contacto</TableCell>
                <TableCell align="right">Correo Eletronico </TableCell>
                <TableCell align="right">Telefonó </TableCell>
                <TableCell align="right">Dirección </TableCell>
                <TableCell align="right">Ciudad </TableCell>
                <TableCell align="center">Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>{renderList()}</TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 15]}
          component="div"
          count={headquarterList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default ListHeadquarters;
