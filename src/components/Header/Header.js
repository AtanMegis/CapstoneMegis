import React from 'react';
import Something from '@assets/Something.png';
import { authActions } from '@config/redux/reducers/auth';
import Carousel from './Carousel/Carousel';
import classes from './Header.module.css';
import HeaderButton from './HeaderButton';
import { useSelector, useDispatch } from 'react-redux';

const Header = (props) => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuthenticated);
	const user = useSelector((state) => state.auth.user);
	// const userName = auth.currentUser.displayName;
	const logoutHandler = (e) => {
		dispatch(authActions.logout());
	};

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
};

export default Header;
