import React from 'react';
import './assets/scss/app.scss';
import {Box} from '@material-ui/core';
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import Register from './pages/Register/Register';
import ThankyouPage from './components/ThankyouPage/ThankyouPage';

const App  = () => {
  return (
      <Router>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" className="app">
          <Switch>
            <Route path="/register" component={Register} />
            <Route path="/thankyou" component={ThankyouPage} />
            <Route path="/">
              <Redirect to="register" />
            </Route>
          </Switch>
        </Box>
    </Router>
  );
}

export default App;