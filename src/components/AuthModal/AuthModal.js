import React, { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import Register from './RegisterForm/RegisterForm';
import Modal from '../UI/Modal';

const AuthModal = (props) => {
	const AUTH_PAGES = {
		LOGIN: 'login',
		REGISTER: 'register',
	};
	const [authPage, setAuthPage] = useState(AUTH_PAGES.LOGIN);

	const handleChangeAuthPage = () => {
		console.log('handleChangeAuthPage');
		setAuthPage(
			authPage === AUTH_PAGES.LOGIN
				? AUTH_PAGES.REGISTER
				: AUTH_PAGES.LOGIN
		);
	};

	console.log(authPage);

	return (
		<Modal onClose={props.onClose}>
			{authPage === AUTH_PAGES.LOGIN ? (
				<LoginForm
					onChangeAuthPage={handleChangeAuthPage}
					onClose={props.onClose}
				/>
			) : (
				<Register
					onChangeAuthPage={handleChangeAuthPage}
					onClose={props.onClose}
				/>
			)}
		</Modal>
	);
};

export default AuthModal;
