import React from 'react';
import classes from './HeaderButton.module.css';

const HeaderButton = (props) => {
<<<<<<< HEAD
  return (
    <button 
      className="rounded-full h-10 text-center 
      hover:bg-hovGreen hover:text-white items-center 
      bg-white text-someBlue font-bold" 
      onClick={props.onClickLoginButton}>
        Masuk
    </button>
  );
=======
    return (
        <button className={classes.button} onClick={props.onClickLoginButton}>
            Masuk
        </button>
    );
>>>>>>> temp-dev
};

export default HeaderButton;
