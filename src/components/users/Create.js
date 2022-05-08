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
import { useDispatch, useSelector } from "react-redux";
import firebaseApp from "../../credentiales";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const database = getDatabase();
/**
 * Init auth and firestore
 */
const firestore = getFirestore(firebaseApp);

const validationSchema = yup.object({
  userName: yup
    .string("Ingresa el nombre del usuario")
    .required("Campo obligatorio"),
  userLastName: yup
    .string("Ingresa el apellido del usuario ")
    .required("Campo obligatorio"),
  userEmail: yup
    .string("Ingresa el correo electrónico del usuario")
    .email("Ingresa un correo electrónico válido")
    .required("Campo obligatorio"),
  userPassword: yup
    .string("Ingresa la contraseña")
    .required("Campo obligatorio"),
  userValide: yup
    .string("Ingrese la duración del usuario ")
    .required("Campo obligatorio"),
});

const Create = () => {
  /**
   * -------------------------------------------------
   * -------------------- REDUX ----------------------
   * -------------------------------------------------
   */
  // Allow to send the elements of store
  const dispatch = useDispatch();
  const array_headquarter = useSelector(
    (state) => state.FirebaseSlice.arrayHeadquarters
  );

  const listHeadquarter = array_headquarter;
  const [checked, setChecked] = useState(true);
  const [headquarter, setHeadquarter] = useState("Olimpo");
  const formik = useFormik({
    initialValues: {
      userName: "",
      userLastName: "",
      userEmail: "",
      userPassword: "",
      userValide: "",
    },

    validationSchema: validationSchema,

    onSubmit: (values) => {
      values.headquarter = headquarter;
      values.isActive = checked;
      alert(JSON.stringify(values, null, 2));

      const user = {
        userName: values.userName,
        userLastName: values.userLastName,
        userEmail: values.userEmail,
        userPassword: values.userPassword,
        userValide: values.userValide,
        isActive: checked,
      };

      database.collection("user").doc(headquarter.id).update({
        users: user
      });
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
          CREAR USUARIO
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Grid container spacing={1} mx={5} mt={2}>
            <Grid item xs={6}>
              <TextField
                sx={{ width: "85%" }}
                label="Nombre usuario"
                name="userName"
                variant="standard"
                value={formik.values.userName}
                onChange={formik.handleChange}
                error={
                  formik.touched.userName && Boolean(formik.errors.userName)
                }
                helperText={formik.touched.userName && formik.errors.userName}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: "85%" }}
                label="Apellido del usuario"
                variant="standard"
                name="userLastName"
                value={formik.values.userLastName}
                onChange={formik.handleChange}
                error={
                  formik.touched.userLastName &&
                  Boolean(formik.errors.userLastName)
                }
                helperText={
                  formik.touched.userLastName && formik.errors.userLastName
                }
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                sx={{ width: "85%" }}
                label="Email del usuario"
                variant="standard"
                name="userEmail"
                type="email"
                value={formik.values.userEmail}
                onChange={formik.handleChange}
                error={
                  formik.touched.userEmail && Boolean(formik.errors.userEmail)
                }
                helperText={formik.touched.userEmail && formik.errors.userEmail}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                sx={{ width: "85%" }}
                label="Contraseña del usuario"
                variant="standard"
                name="userPassword"
                type="password"
                value={formik.values.userPassword}
                onChange={formik.handleChange}
                error={
                  formik.touched.userPassword &&
                  Boolean(formik.errors.userPassword)
                }
                helperText={
                  formik.touched.userPassword && formik.errors.userPassword
                }
              />
            </Grid>

            <Grid item xs={6}>
              <TextField
                sx={{ width: "85%" }}
                label="Duracion del usuario"
                variant="standard"
                name="userValide"
                value={formik.values.userValide}
                onChange={formik.handleChange}
                error={
                  formik.touched.userValide && Boolean(formik.errors.userValide)
                }
                helperText={
                  formik.touched.userValide && formik.errors.userValide
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
                options={listHeadquarter}
                value={headquarter}
                getOptionLabel={(option) => option.headquarterName}
                onChange={(event, value) => setHeadquarter(value)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Seleccione la sede"
                    variant="standard"
                    required
                    error={headquarter === ""}
                    helperText={headquarter === "" ? "Elemento requerido" : ""}
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                    }}
                    onChange={(e) => setHeadquarter(e.target.value)}
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
                  ¿El usuario está activo?
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

export default Create;
