import React from 'react';
import './thankyou-page.scss';
import { Box } from '@material-ui/core';
import {Link} from 'react-router-dom';

const ThankyouPage = (props) => {
    return (
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" className="thankyou-page">
            <h1 className="box-title">Thankyou for your Registering</h1>
            <Link to="/register" className="link" >Register again</Link>
        </Box>
    )
}

export default ThankyouPage;