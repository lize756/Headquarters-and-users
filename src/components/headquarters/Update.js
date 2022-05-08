import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  Paper,
  TextField,
  Button,
  Grid,
  Autocomplete,
  Checkbox,
  Typography,
  Stack,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";

const validationSchema = yup.object({
  headquarterName: yup
    .string("Ingresa el nombre de la sede")
    .required("Campo obligatorio"),
  contactName: yup
    .string("Ingresa el nombre del contacto ")
    .required("Campo obligatorio"),
  contactPhone: yup
    .string("Ingresa el teléfono del contacto ")
    .required("Campo obligatorio"),
  contactEmail: yup
    .string("Ingresa el correo electrónico del contacto")
    .email("Ingresa un correo electrónico válido")
    .required("Campo obligatorio"),
  headquarterAddress: yup
    .string("Ingresa la dirección de la sede ")
    .required("Campo obligatorio"),
  headquarterZipcode: yup
    .string("Ingresa el Zipcode de la sede ")
    .required("Campo obligatorio"),
});

const Update = () => {
  const listCities = ["Bogota", "Cali", "Medellin"];
  const [checked, setChecked] = useState(true);
  const [cities, setCities] = useState("Cali");
  const formik = useFormik({
    initialValues: {
      headquarterName: "El capitolio",
      contactName: "Katniss",
      contactPhone: "124566",
      contactEmail: "tributo@games.com",
      headquarterAddress: "districto 12",
      headquarterZipcode: "12-11-7",
    },

    validationSchema: validationSchema,

    onSubmit: (values) => {
      values.CityName = cities;
      values.isActive = checked;
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <div>
      {" "}
      <Paper sx={{ width: "90%", mx: 8, mt: 10 }}>
        <Typography
          mt={5}
          ml={6}
          variant="h6"
          sx={{ fontWeight: "medium", color: "#072079" }}
        >
          EDITAR SEDE
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={1} mx={5} mt={2}>
            <Grid item xs={6}>
              <TextField
                sx={{ width: "85%" }}
                label="Nombre sede"
                name="headquarterName"
                variant="standard"
                value={formik.values.headquarterName}
                onChange={formik.handleChange}
                error={
                  formik.touched.headquarterName &&
                  Boolean(formik.errors.headquarterName)
                }
                helperText={
                  formik.touched.headquarterName &&
                  formik.errors.headquarterName
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: "85%" }}
                label="Nombre del contacto"
                variant="standard"
                name="contactName"
                value={formik.values.contactName}
                onChange={formik.handleChange}
                error={
                  formik.touched.contactName &&
                  Boolean(formik.errors.contactName)
                }
                helperText={
                  formik.touched.contactName && formik.errors.contactName
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: "85%" }}
                label="Teléfono del contacto"
                variant="standard"
                name="contactPhone"
                value={formik.values.contactPhone}
                onChange={formik.handleChange}
                error={
                  formik.touched.contactPhone &&
                  Boolean(formik.errors.contactPhone)
                }
                helperText={
                  formik.touched.contactPhone && formik.errors.contactPhone
                }
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                sx={{ width: "85%" }}
                label="Email del contacto"
                variant="standard"
                name="contactEmail"
                value={formik.values.contactEmail}
                onChange={formik.handleChange}
                error={
                  formik.touched.contactEmail &&
                  Boolean(formik.errors.contactEmail)
                }
                helperText={
                  formik.touched.contactEmail && formik.errors.contactEmail
                }
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: "85%" }}
                label="Dirección de la sede"
                variant="standard"
                name="headquarterAddress"
                value={formik.values.headquarterAddress}
                onChange={formik.handleChange}
                error={
                  formik.touched.headquarterAddress &&
                  Boolean(formik.errors.headquarterAddress)
                }
                helperText={
                  formik.touched.headquarterAddress &&
                  formik.errors.headquarterAddress
                }
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                sx={{ width: "85%" }}
                label="Zipcode de la sede"
                variant="standard"
                name="headquarterZipcode"
                value={formik.values.headquarterZipcode}
                onChange={formik.handleChange}
                error={
                  formik.touched.headquarterZipcode &&
                  Boolean(formik.errors.headquarterZipcode)
                }
                helperText={
                  formik.touched.headquarterZipcode &&
                  formik.errors.headquarterZipcode
                }
              />
            </Grid>
            <Grid item xs={6}>
              <Autocomplete
                sx={{ width: "80%" }}
                freeSolo
                disableClearable
                id="free-solo-2-demo"
                //List of cities
                options={listCities}
                value={cities}
                /**
                 * This property allows to show in the user's view the property that we want to take from the object.
                 * Such as: If we need show the name of the country then we ask the property of the object that correspond the name
                 */
                getOptionLabel={(option) => option}
                /**
                 * Allows send the select object to variable CompCity that correspond the element select
                 */
                onChange={(event, value) => setCities(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Seleccione su ciudad"
                    variant="standard"
                    required
                    error={cities === ""}
                    helperText={cities === "" ? "Elemento requerido" : ""}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                    onChange={(e) => setCities(e.target.value)}
                  />
                )}
              />
            </Grid>
            <Grid item xs={6}>
              <Stack direction="row" spacing={2} mt={2}>
                <Typography
                  mt={1}
                  variant="subtitle2"
                  sx={{ fontWeight: "medium", color: "#072079" }}
                >
                  ¿La sede está activa?
                </Typography>
                <Checkbox
                  checked={checked}
                  onChange={(event) => {
                    setChecked(event.target.checked);
                  }}
                  inputProps={{ "aria-label": "controlled" }}
                />
              </Stack>
            </Grid>
          </Grid>

          <Button
            sx={{ my: 4, ml: 5 }}
            variant="contained"
            startIcon={<SaveIcon />}
            type="submit"
          >
            Guardar
          </Button>
        </form>
      </Paper>
    </div>
  );
};

export default Update;
