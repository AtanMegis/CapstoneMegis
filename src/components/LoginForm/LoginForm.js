import React from "react";
import useInput from "../../hooks/useInput";
import Logo from "../../assets/UserLogo.png";
import "./LoginForm.css";
import { useDispatch } from "react-redux";
import { authActions } from "../../config/redux/reducers/auth";
import { SERVICE_AUTH } from "../../services/auth.service";

const LoginForm = ({ onChangeAuthPage, onClose }) => {
	const dispatch = useDispatch();
	const isNotEmpty = (value) => value.trim() !== "";
	const isEmail = (value) => value.includes("@");

	const {
		value: passwordValue,
		hasError: passwordHasError,
		isValid: passwordIsValid,
		inputBlurHandler: passwordBlurHandler,
		valueChangeHandler: passwordChangeHandler,
		reset: passwordResetHandler,
	} = useInput(isNotEmpty);

	const {
		value: EmailValue,
		hasError: emailHasError,
		isValid: emailIsValid,
		inputBlurHandler: emailBlurHandler,
		valueChangeHandler: emailChangeHandler,
		reset: emailResetHandler,
	} = useInput(isEmail);

	let formIsValid = false;

	if (passwordIsValid && emailIsValid) formIsValid = true;

	const submitHandler = async (e) => {
		e.preventDefault();

		if (formIsValid) {
			SERVICE_AUTH.login(passwordValue, EmailValue, (user) => {
				dispatch(authActions.login(user));
			});

			passwordResetHandler();
			emailResetHandler();
			onClose();
		}
	};

	const passwordClasses = passwordHasError
		? "form-control invalid"
		: "form-control";

	const emailClasses = emailHasError ? "form-control invalid" : "form-control";

	return (
		<form className="form-layout" onSubmit={submitHandler}>
			<img
				alt=""
				style={{
					maxWidth: "225px",
					alignSelf: "center",
					padding: "2rem 0",
				}}
				src={Logo}
			></img>
			<div className="control-group">
				<div className={emailClasses}>
					<label htmlFor="name">Email</label>
					<input
						type="email"
						id="name"
						onChange={emailChangeHandler}
						onBlur={emailBlurHandler}
						value={EmailValue}
					/>
					{emailHasError && (
						<p className="error-text">Please enter your Email</p>
					)}
				</div>
				<div className={passwordClasses}>
					<label htmlFor="name">Password</label>
					<input
						type="text"
						id="name"
						onChange={passwordChangeHandler}
						onBlur={passwordBlurHandler}
						value={passwordValue}
					/>
					{passwordHasError && (
						<p className="error-text">Please enter your Password</p>
					)}
				</div>
			</div>
			<div>
				<p>
					Belum punya akun? register{" "}
					<button onClick={onChangeAuthPage}>di sini</button>
				</p>
			</div>
			<div className="form-actions">
				<button style={{ marginTop: "1rem" }} disabled={!formIsValid}>
					Masuk
				</button>
				<button onClick={onClose}>Keluar</button>
			</div>
		</form>
	);
};

export default LoginForm;
