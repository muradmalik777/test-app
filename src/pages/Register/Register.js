import React from 'react';
import './register.scss';
import { Box } from '@material-ui/core';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

const Register = (props) => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" className="register">
            <h1 className="box-title">Registration Form</h1>
            <RegisterForm />
        </Box>
    )
}

export default Register;