<<<<<<< HEAD
import React from "react";
import Something from "../../assets/Something.png";
import { authActions } from "../../config/redux/reducers/auth";
import Carousel from "./Carousel/Carousel";
import HeaderButton from "./HeaderButton";
=======
import React from 'react';
import Something from 'assets/Something.png';
import { authActions } from 'config/redux/reducers/auth';
import Carousel from './Carousel/Carousel';
import classes from './Header.module.css';
import HeaderButton from './HeaderButton';
>>>>>>> temp-dev
import { useSelector, useDispatch } from 'react-redux';
import { auth } from 'config/firebase/firebase';

const Header = (props) => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuthenticated);
	const user = useSelector((state) => state.auth.user);
	// const userName = auth.currentUser.displayName;
	const logoutHandler = (e) => {
		dispatch(authActions.logout());
	};

<<<<<<< HEAD
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
=======
	return (
		<React.Fragment>
			<div style={{}} className={classes.header}>
				<img
					alt="SOMETHING IS EVERYTHING"
					style={{
						display: 'block',
						height: '60px',
						maxWidth: '310px',
						paddingLeft: '2rem',
					}}
					src={Something}
				></img>
				{!isAuth && (
					<HeaderButton
						onClickLoginButton={props.onShowLoginForm}
					/>
				)}
				{isAuth && <div>Selamat Datang, {user}</div>}
				{isAuth && <button onClick={logoutHandler}>Logout</button>}
			</div>
			<Carousel />
		</React.Fragment>
	);
>>>>>>> temp-dev
};

export default Header;
