import React from "react";
import { TableCell, TableRow } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const User = ({ user, delUser }) => {
  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={user.id}>
      <TableCell align="right">{user.userName}</TableCell>
      <TableCell align="right">{user.userLastName}</TableCell>
      <TableCell align="right">{user.userEmail}</TableCell>
      <TableCell align="right">{user.userValide}</TableCell>
      <TableCell align="right">{user.headquarter.headquarterName}</TableCell>
      <TableCell align="center">
        <DeleteIcon
          color="error"
          onClick={() => {
            delUser(user);
          }}
        />{" "}
        &nbsp;
        <EditIcon color="primary" onClick={() => {}} />
      </TableCell>
    </TableRow>
  );
};

export default User;
