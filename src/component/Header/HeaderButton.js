import React from 'react';
import classes from './HeaderButton.module.css';

const HeaderButton = (props) => {
    return (
        <button
            className={classes.button}
            onClick={props.onClickButtonLogin}>
        </button>
    )
}

export default HeaderButton