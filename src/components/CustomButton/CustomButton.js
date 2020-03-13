import React from 'react';
import './custom-button.scss';
import {Button, CircularProgress} from '@material-ui/core';

const CustomButton = (props) => {
    return (
        <Button size="large" onClick={props.onClick} disabled={props.disabled} className={"custom-button " + props.className}>
            {props.loading ? <CircularProgress thickness={5} className="loader" /> :  props.children}
        </Button>
    )
}

export default CustomButton;