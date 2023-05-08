import React, {useContext, useState} from 'react';
import {Alert, Box, Button, TextField,} from "@mui/material";
import RokuTypography from '../../components/ui/RokuTypography';
import AppForm from '../../components/form/AppForm';
import {Link, useNavigate} from "react-router-dom";
import * as Yup from "yup";
import {Formik} from "formik";
import Cookies from "universal-cookie";
import axios from "axios";
import {AuthContext} from "../../context/AuthContext";

const customValidationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
    password: Yup.string()
        .max(255)
        .required("Password is required"),
})

/**
 A React component that represents the sign in page.
 Uses MUI alert component to display error messages.
 @function
 @returns {JSX.Element} - The rendered component.
 */
const SignIn = () => {
    const [currentAlert, setCurrentAlert] = useState(null);
    const {setIsLoggedIn} = useContext(AuthContext);
    const navigate = useNavigate();


    // function to handle form submission
    const handleOnSubmit = async (values) => {
        axios.post('/api/auth/login', {...values})
            .then((resp) => {
                const cookies = new Cookies();
                cookies.set('token', resp.data.token, {path: '/'});
                setCurrentAlert({severity: 'success', message: resp.data.message + ' Redirecting... (setTimeout 1k)'});
                setIsLoggedIn(true);
                setTimeout(() => {
                    navigate('/')
                }, 1000);
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
                        Sign In
                    </RokuTypography>
                    <Button component={Link}
                            to={'/sign-up'}
                            size={'small'}
                            color="secondary"
                            variant={'text'}>Not a member yet?</Button>
                </Box>
                <Formik
                    initialValues={{
                        email: "",
                        password: "",
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
                            <Button component={Link}
                                    to={'/forgot-password'}
                                    size={'small'}
                                    color="secondary"
                                    variant={'text'}
                            >
                                Forgot password?
                            </Button>

                            <Button
                                sx={{my: 3}}
                                color="primary"
                                disabled={isSubmitting}
                                fullWidth
                                size="large"
                                type="submit"
                                variant="contained"
                            >
                                Sign in
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

export default SignIn;
