import React from "react";
import { TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Headquarter = ({ delHead, headquarter }) => {
  return (
    <div>
      <TableRow hover role="checkbox" tabIndex={-1} key={headquarter.id}>
        <TableCell align="right">{headquarter.headquarterName}</TableCell>
        <TableCell align="right">{headquarter.contactName}</TableCell>
        <TableCell align="right">{headquarter.contactEmail}</TableCell>
        <TableCell align="right">{headquarter.contactPhone}</TableCell>
        <TableCell align="right">{headquarter.headquarterAddress}</TableCell>
        <TableCell align="right">{headquarter.cityName}</TableCell>
        <TableCell align="center">
          <DeleteIcon
            color="error"
            onClick={() => {
              delHead(headquarter);
            }}
          />{" "}
          &nbsp;
          <EditIcon color="primary" onClick={() => {}} />
        </TableCell>
      </TableRow>
    </div>
  );
};

export default Headquarter;
