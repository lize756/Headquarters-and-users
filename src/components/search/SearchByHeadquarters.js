import React, { useState } from "react";
import { IconButton, TextField, Button, Stack } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

const SearchByHeadquarters = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    console.log("busqueda:" + search);
  };
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={1} mt={2}>
          <TextField
            sx={{ width: "80%" }}
            label="Buscar por Sede"
            variant="standard"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
            InputLabelProps={{
              shrink: true,
            }}
          />

          <IconButton type="submit" color="primary">
            <SearchIcon />
          </IconButton>
        </Stack>
      </form>
    </div>
  );
};

export default SearchByHeadquarters;
