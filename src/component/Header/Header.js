import React from "react";
import Something from "../../asset/Something.png";
import Carousel from "./Carousel/Carousel";
import classes from "./Header.module.css";
import HeaderButton from "./HeaderButton";

const Header = (props) => {
  return (
    <React.Fragment>
      <div className={classes.header}>
        <img alt='SOMETHING IS EVERYTHING'
          style={{ maxWidth: "225px", marginTop: "-3rem", marginLeft: "2rem" }}
          src={Something}
        ></img>
      </div>
      <HeaderButton onClickLoginButton={props.onShowLoginForm}></HeaderButton>
      <Carousel />
    </React.Fragment>
  );
};

export default Header;
