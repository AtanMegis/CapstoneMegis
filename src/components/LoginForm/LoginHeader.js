import React, { useState } from "react";
import Button from "../UI/Button";
import Something from "../../assets/Something.png";

import classes from "./Header.module.css";

const Header = () => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <img
          style={{ maxWidth: "225px", marginTop: "-3rem", marginLeft: "2rem" }}
          src={Something}
        ></img>
      </div>
      {/* <Button onClick={LoginFormHandler}></Button> */}
    </React.Fragment>
  );
};

export default Header;
