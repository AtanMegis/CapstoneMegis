import React from 'react';
import classes from './HeaderButton.module.css';

const HeaderButton = (props) => {
    return (
        <button
            className={classes.button}
            onClick={props.onClickLoginButton}>
        </button>
    )
}

export default HeaderButton