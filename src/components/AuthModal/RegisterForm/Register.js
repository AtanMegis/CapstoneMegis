import React, { useState } from 'react';
import useInput from 'hooks/useInput';
import Logo from 'assets/UserLogo.png';
import './Register.css';
import { useDispatch } from 'react-redux';
import { SERVICE_AUTH } from 'services/auth.service';
import { authActions } from 'config/redux/reducers/auth';

const Register = ({ onchangeAuthPage, onClose, scroll }) => {
	const dispatch = useDispatch();
	const isNotEmpty = (value) => value.trim() !== '';
	const isEmail = (value) => value.includes('@');
	const [displayName, setDisplayName] = useState('');

	const {
		value: passwordValue,
		hasError: passwordHasError,
		isValid: passwordIsValid,
		inputBlurHandler: passwordBlurHandler,
		valueChangeHandler: passwordChangeHandler,
		reset: passwordResetHandler,
	} = useInput(isNotEmpty);

	const {
		value: passwordConfValue,
		hasError: passwordConfHasError,
		isValid: passwordConfIsValid,
		inputBlurHandler: passwordConfBlurHandler,
		valueChangeHandler: passwordConfChangeHandler,
		reset: passwordConfResetHandler,
	} = useInput(isNotEmpty);

	const {
		value: emailValue,
		hasError: emailHasError,
		isValid: emailIsValid,
		inputBlurHandler: emailBlurHandler,
		valueChangeHandler: emailChangeHandler,
		reset: emailResetHandler,
	} = useInput(isEmail);

	let passwordMatch = false;

	if (
		passwordValue === passwordConfValue &&
		passwordIsValid &&
		passwordConfIsValid
	)
		passwordMatch = true;

	let formIsValid = false;

	if (passwordMatch && emailIsValid) {
		formIsValid = true;
	}

	const submitHandler = async (e) => {
		e.preventDefault();

		if (formIsValid) {
			SERVICE_AUTH.register(
				passwordValue,
				emailValue,
				passwordConfValue,
				displayName,
				(user) => {
					dispatch(authActions.login(user));
				}
			);
			passwordResetHandler();
			passwordConfResetHandler();
			emailResetHandler();
			onClose();
		}
		scroll.current.scrollIntoView({ behavior: 'smooth' });
	};

	const passwordClasses = passwordHasError
		? 'form-control invalid'
		: 'form-control';

	const emailClasses = emailHasError
		? 'form-control invalid'
		: 'form-control';

	const passwordConfClasses = passwordConfHasError
		? 'form-control invalid'
		: 'form-control';

	const displayNameHandler = (e) => {
		setDisplayName(e.target.value);
	};

	return (
		<form className="form-layout" onSubmit={submitHandler}>
			<img
				alt=""
				style={{
					maxWidth: '225px',
					alignSelf: 'center',
					padding: '2rem 0',
				}}
				src={Logo}
			></img>
			<div className="control-group">
				<div className={emailClasses}>
					<label htmlFor="name">Nama Lengkap</label>
					<input
						type="text"
						id="name"
						onChange={displayNameHandler}
						value={displayName}
					/>
				</div>
				<div className={emailClasses}>
					<label htmlFor="name">Email</label>
					<input
						type="email"
						id="name"
						onChange={emailChangeHandler}
						onBlur={emailBlurHandler}
						value={emailValue}
					/>
					{emailHasError && (
						<p className="error-text">
							Please enter your Email
						</p>
					)}
				</div>
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
					<p className="error-text">
						Please enter your Password
					</p>
				)}
			</div>
			<div className={passwordConfClasses}>
				<label htmlFor="name">Konfirmasi ulang password</label>
				<input
					type="text"
					id="name"
					onChange={passwordConfChangeHandler}
					onBlur={passwordConfBlurHandler}
					value={passwordConfValue}
				/>
				{passwordConfHasError && (
					<p className="error-text">
						Please Confirm your password
					</p>
				)}
			</div>
			<p>
				Sudah punya akun?{' '}
				<button
					className="button-disini"
					onClick={onchangeAuthPage}
				>
					Login
				</button>
			</p>
			<div className="form-actions">
				<button
					style={{ marginTop: '1rem' }}
					disabled={!formIsValid}
				>
					Daftar
				</button>
				<button onClick={onClose}>Keluar</button>
			</div>
		</form>
	);
};

export default Register;
