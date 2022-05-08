import React from "react";
import { Paper, Typography, Stack, Grid, Box } from "@mui/material";
import CardUser from "./CardUser";

const Details = () => {
  const headquarter = {
    headquarterName: "El capitolio",
    contactName: "Katniss",
    contactPhone: "124566",
    contactEmail: "tributo@games.com",
    headquarterAddress: "districto 12",
    headquarterZipcode: "12-11-7",
    cityName: "Cali",
    isActive: true,
    users: [
      {
        userName: "Percy",
        userLastName: "Jackson",
        userEmail: "perseus@olimpo.com",
        userPassword: "Annabeth",
        userValide: "12 meses",
      },
      {
        userName: "Annabeth",
        userLastName: "Chase",
        userEmail: "athenea@olimpo.com",
        userPassword: "Arachne",
        userValide: "14 meses",
      },
    ],
  };
  return (
    <div>
      <Paper sx={{ width: "300", mx: 5, mt: 5, borderRadius: 3 }}>
        <Grid container spacing={1} mx={5} mt={2}>
          <Grid item xs={12}>
            <Typography
              mt={2}
              ml={2}
              variant="h4"
              sx={{ fontWeight: "blond", color: "#072079" }}
            >
              {headquarter.headquarterName}
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Stack direction="row" spacing={1} mt={2}>
              <Typography
                ml={2}
                variant="subtitle2"
                sx={{ fontWeight: "medium" }}
              >
                Nombre del contacto:
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontWeight: "blond", color: "#072079" }}
              >
                {headquarter.contactName}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={1} mt={2}>
              <Typography
                ml={2}
                variant="subtitle2"
                sx={{ fontWeight: "medium" }}
              >
                Teléfono del contacto:
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontWeight: "blond", color: "#072079" }}
              >
                {headquarter.contactPhone}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={1} mt={2}>
              <Typography
                ml={2}
                variant="subtitle2"
                sx={{ fontWeight: "medium" }}
              >
                Correo electrónico del contacto:
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontWeight: "blond", color: "#072079" }}
              >
                {headquarter.contactEmail}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={1} mt={2}>
              <Typography
                ml={2}
                variant="subtitle2"
                sx={{ fontWeight: "medium" }}
              >
                Dirección de la sede:
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontWeight: "blond", color: "#072079" }}
              >
                {headquarter.headquarterAddress}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={1} mt={2}>
              <Typography
                ml={2}
                variant="subtitle2"
                sx={{ fontWeight: "medium" }}
              >
                Zipcode de la sede:
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontWeight: "blond", color: "#072079" }}
              >
                {headquarter.headquarterZipcode}
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={6}>
            <Stack direction="row" spacing={1} mt={2}>
              <Typography
                ml={2}
                variant="subtitle2"
                sx={{ fontWeight: "medium" }}
              >
                Nombre de la ciudad de la sede:
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontWeight: "blond", color: "#072079" }}
              >
                {headquarter.cityName}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={6}>
            <Stack direction="row" spacing={1} my={2}>
              <Typography
                ml={2}
                variant="subtitle2"
                sx={{ fontWeight: "medium" }}
              >
                ¿La sede está activa?:
              </Typography>

              <Typography
                variant="body1"
                sx={{ fontWeight: "blond", color: "#072079" }}
              >
                {headquarter.isActive === true ? "SI" : "No"}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
      <Box>
        {headquarter.users.map((user, index) => (
          <CardUser user={user} index={index + 1} />
        ))}
      </Box>
    </div>
  );
};

export default Details;
