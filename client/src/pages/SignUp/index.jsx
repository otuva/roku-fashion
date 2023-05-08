import React, {useState} from 'react';
import {Alert, Box, Button, Checkbox, FormHelperText, TextField,} from "@mui/material";
import RokuTypography from '../../components/ui/RokuTypography';
import AppForm from '../../components/form/AppForm';
import {Link} from "react-router-dom";
import * as Yup from "yup";
import {Formik} from "formik";
import axios from "axios";

const customValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
    password: Yup.string()
        .max(255)
        .required("a password with a minimum length of 8 characters, lowercase, uppercase, and numbers is required"),
    confirmPassword: Yup.string().oneOf(
        [Yup.ref("password"), null],
        "Passwords must match"
    ),
    invitationCode: Yup.string()
        .max(255)
        .required("Invitation Code is required"),
    policy: Yup.boolean().oneOf(
        [true],
        "This field must be checked"
    ),
})

const SignUp = () => {
    const [currentAlert, setCurrentAlert] = useState(null);

    // const [newUser, setNewUser] = useState(null);

    const handleOnSubmit = async (values) => {
        axios.post('/api/auth/register', {...values})
            .then((resp) => {
                const message = resp.data.message
                setCurrentAlert({severity: 'success', message: message})
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
                        Sign Up
                    </RokuTypography>
                    <Button component={Link}
                            to={'/sign-in'}
                            size={'small'}
                            color="secondary"
                            variant={'text'}>Already have an account?</Button>
                </Box>

                <Formik
                    initialValues={{
                        email: "",
                        password: "",
                        confirmPassword: "",
                        invitationCode: "",
                        // ConfirmationCode: "",
                        policy: false,
                    }}
                    validationSchema={customValidationSchema}
                    onSubmit={handleOnSubmit}
                >
                    {({
                          errors,
                          handleBlur,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                          touched,
                          values,
                      }) => (
                        <form aria-label="form" onSubmit={handleSubmit}>
                            <Box mb={3}>
                            </Box>
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
                            <TextField
                                error={Boolean(touched.password && errors.password)}
                                fullWidth
                                helperText={touched.password && errors.password}
                                label="Password"
                                margin="normal"
                                name="password"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="password"
                                value={values.password}
                                variant="outlined"
                            />
                            <TextField
                                error={Boolean(
                                    touched.confirmPassword && errors.confirmPassword
                                )}
                                fullWidth
                                helperText={
                                    touched.confirmPassword && errors.confirmPassword
                                }
                                label="Confirm Password"
                                margin="normal"
                                name="confirmPassword"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="password"
                                value={values.confirmPassword}
                                variant="outlined"
                            />
                            <TextField
                                error={Boolean(touched.invitationCode && errors.invitationCode)}
                                fullWidth
                                helperText={touched.invitationCode && errors.invitationCode}
                                label="Invitation Code"
                                margin="normal"
                                name="invitationCode"
                                onBlur={handleBlur}
                                onChange={handleChange}
                                type="text"
                                value={values.invitationCode}
                                variant="outlined"
                            />
                            <Box alignItems="center" display="flex" ml={-1}>
                                <Checkbox
                                    checked={values.policy}
                                    name="policy"
                                    onChange={handleChange}
                                />
                                <Button component={Link}
                                        to={'/terms'}
                                        size={'small'}
                                        color="secondary"
                                        variant={'text'}
                                >
                                    I have read the Terms
                                </Button>
                            </Box>
                            {Boolean(touched.policy && errors.policy) && (
                                <FormHelperText error>{errors.policy}</FormHelperText>
                            )}

                            <Button
                                sx={{my: 3}}
                                color="primary"
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Sign up
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

export default SignUp
