import React from "react";
import Something from "../../assets/Something.png";
import { authActions } from "../../config/Redux/auth";
import Carousel from "./Carousel/Carousel";
import HeaderButton from "./HeaderButton";
import { useSelector, useDispatch } from 'react-redux';

const Header = (props) => {
  const dispatch = useDispatch()
  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  

  const logoutHandler = (e) => {
    dispatch(authActions.logout())
  }


  return (
    <React.Fragment>
      <div className="bg-someBlue h-16 p-3">
        <div className="flex justify-between">
          <img
            alt="SOMETHING IS EVERYTHING"
            src={Something}
            className="w-17 h-12"
          ></img>
          {!isAuth && <HeaderButton onClickLoginButton={props.onShowLoginForm}></HeaderButton>}
          {isAuth &&<button className="rounded-full h-10 text-center hover:bg-hovGreen 
          hover:text-white items-center bg-white text-someBlue font-bold" 
          onClick={logoutHandler}>Keluar</button>}
        </div>
      </div>
      <Carousel />
    </React.Fragment>
  );
};

export default Header;
