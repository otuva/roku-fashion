import * as React from 'react';
import Box from '@mui/material/Box';
import RokuTypography from '../../components/ui/RokuTypography';
import AppForm from '../../components/form/AppForm';
import {Alert, Button, TextField} from "@mui/material";
import {Formik} from "formik";
import * as Yup from "yup";
import {useState} from "react";
import axios from "axios";

const customValidationSchema = Yup.object().shape({
  email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required")
})

const ForgotPassword = () => {
  const [currentAlert, setCurrentAlert] = useState(null);

  const handleOnSubmit = async (values) => {
    axios.post('/api/auth/reset', {...values})
        .then((resp) => {
          // const message = resp.data.message
          console.log(resp.data)
        })
        .catch((err) => {
          const resp = err.response
          setCurrentAlert({severity: 'error', message: resp.data.message})
        })
  }

  return (
      <React.Fragment>
        <AppForm>
          <Box alignContent={"center"} align="center" my={5}>
            <RokuTypography variant="h3" gutterBottom marked="center">
              Forgot your password?
            </RokuTypography>
            <RokuTypography variant="body2">
              {"Enter your email address below and we'll " +
                  'send you a link to reset your password.'}
            </RokuTypography>
          </Box>
          <Formik
              initialValues={{
                email: "",
              }}
              validationSchema={customValidationSchema}
              onSubmit={handleOnSubmit}
          >
            {({
                errors,
                handleBlur,
                handleSubmit,
                handleChange,
                isSubmitting,
                touched,
                values,
              }) => (
                <form onSubmit={handleSubmit}>

                  <TextField
                      error={Boolean(touched.email && errors.email)}
                      fullWidth
                      helperText={touched.email && errors.email}
                      label="Email Address"
                      margin="normal"
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      type="email"
                      value={values.email}
                      variant="outlined"
                  />

                  <Button
                      sx={{my:3}}
                      color="primary"
                      disabled={isSubmitting}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                  >
                    Reset
                  </Button>

                  {
                      currentAlert && (
                          <Alert variant="filled" severity={currentAlert.severity}>
                            {currentAlert.message}
                          </Alert>
                      )
                  }
                </form>
            )}
          </Formik>
        </AppForm>
      </React.Fragment>
  );
};

export default ForgotPassword
