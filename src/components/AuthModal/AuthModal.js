import React, { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import Register from "../Register/Register";
import Modal from "../UI/Modal";
import { authActions } from "../../config/redux/reducers/auth";
import { useDispatch } from "react-redux";

const AuthModal = (props) => {
	// const [isLoggedIn, setIsLoggedIn] = useState(false)
	const dispatch = useDispatch();
	const AUTH_PAGES = {
		LOGIN: "login",
		REGISTER: "register",
	};
	const [authPage, setAuthPage] = useState(AUTH_PAGES.LOGIN);

	const handleChangeAuthPage = () => {
		console.log("handleChangeAuthPage");
		setAuthPage(
			authPage === AUTH_PAGES.LOGIN ? AUTH_PAGES.REGISTER : AUTH_PAGES.LOGIN
		);
	};

	// const loginHandler = () => {

	//     dispatch(authActions.login())
	// }

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
			{/* <button style={{ marginTop: "1rem" }} onClick={loginHandler} >
                Masuk
            </button>
            <button onClick={props.onClose}>Keluar</button> */}
		</Modal>
	);
};

export default AuthModal;
