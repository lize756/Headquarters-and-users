import React from "react";
import { Paper, Typography, Stack, Grid } from "@mui/material";

const CardUser = ({ user, index }) => {
  return (
    <div>
      {" "}
      <Paper sx={{ width: "300", mx: 5, mt: 5, borderRadius: 3 }}>
        <Grid container spacing={1} mx={5} mt={2}>
          <Grid item xs={12}>
            <Typography
              mt={2}
              ml={2}
              variant="h6"
              sx={{ fontWeight: "blond", color: "#072079" }}
            >
              {"Usuario #" + index}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Stack direction="row" spacing={1} mt={1}>
              <Typography
                ml={2}
                variant="subtitle2"
                sx={{ fontWeight: "medium" }}
              >
                Nombre del usuario:
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontWeight: "blond", color: "#072079" }}
              >
                {user.userName}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Stack direction="row" spacing={1} mt={1}>
              <Typography
                ml={2}
                variant="subtitle2"
                sx={{ fontWeight: "medium" }}
              >
                Apellido del usuario:
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontWeight: "blond", color: "#072079" }}
              >
                {user.userLastName}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={1} mt={1}>
              <Typography
                ml={2}
                variant="subtitle2"
                sx={{ fontWeight: "medium" }}
              >
                Correo electrónico del usuario:
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontWeight: "blond", color: "#072079" }}
              >
                {user.userEmail}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={1} mt={1}>
              <Typography
                ml={2}
                variant="subtitle2"
                sx={{ fontWeight: "medium" }}
              >
                Duración de la cuenta:
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontWeight: "blond", color: "#072079" }}
              >
                {user.userValide}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default CardUser;
