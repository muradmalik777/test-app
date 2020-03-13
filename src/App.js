import React from 'react';
import './assets/scss/app.scss';
import {Box} from '@material-ui/core';
import RegisterForm from './components/RegisterForm/RegisterForm';

const App  = () => {
  return (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" className="app">
      <h1 className="box-title">Registration Form</h1>
      <RegisterForm />
    </Box>
  );
}

export default App;