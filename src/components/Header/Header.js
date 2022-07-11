import React, { useEffect } from 'react';
import Something from '@assets/Something.png';
import { authActions } from '@config/redux/reducers/auth';
import Carousel from './Carousel/Carousel';
import classes from './Header.module.css';
import HeaderButton from './HeaderButton';
import { useSelector, useDispatch } from 'react-redux';
import classesButton from './HeaderButton.module.css';

const Header = (props) => {
	const dispatch = useDispatch();
	const isAuth = useSelector((state) => state.auth.isAuthenticated);
	const userEmail = useSelector((state) => state.auth.user?.email);

	const logoutHandler = () => {
		dispatch(authActions.logout());
	};

	useEffect(() => {
		localStorage.getItem('USER_TOKEN');
	}, []);

	return (
		<>
			<div className={classes.header}>
				<img
					id="Logo"
					alt="SOMETING IS EVERYTHING"
					style={{
						display: 'block',
						height: '60px',
						maxWidth: '310px',
						paddingLeft: '2rem',
						justifyContent: 'flex-start',
					}}
					src={Something}
					className="float-left"
				></img>
				<nav className={classes.navbar}>
					<ul className={classes.navbar_list}>
						<li className={classes.navbar_item}>
							{isAuth && (
								<p className={'text-white'}>
									Selamat Datang, {userEmail}{' '}
								</p>
							)}
						</li>
						<li className={classes.navbar_item}>
							<a href="/">HOME</a>
						</li>
						<li className={classes.navbar_item}>
							<a href="/about">ABOUT</a>
						</li>
					</ul>

					{!isAuth && (
						<HeaderButton
							onClickLoginButton={props.onShowLoginForm}
						/>
					)}

					{isAuth && (
						<button
							className={classesButton.button}
							onClick={logoutHandler}
						>
							Logout
						</button>
					)}
				</nav>
			</div>
			<Carousel />
		</>
	);
};

export default Header;
