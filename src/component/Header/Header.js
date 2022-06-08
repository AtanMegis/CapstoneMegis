import React from "react";
import Something from "../../asset/Something.png";

import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <div style={{}} className={classes.header}>
        <img
          alt="SOMETHING IS EVERYTHING"
          style={{
            display: "block",
            height: "60px",
            maxWidth: "310px",
            paddingLeft: "2rem",
          }}
          src={Something}
        ></img>
        <HeaderButton onClickLoginButton={props.onShowLoginForm}></HeaderButton>
      </div>
    </React.Fragment>
  );
};

export default Header;
