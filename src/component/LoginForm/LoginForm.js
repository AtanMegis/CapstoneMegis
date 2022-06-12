import React from 'react'
import useInput from "../../hooks/useInput";
import Logo from "../../asset/UserLogo.png";
import "./LoginForm.css";
import Modal from "../UI/Modal";

const LoginForm = (props) => {
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

  const submitHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }
    console.log("submitted!");
    console.log(passwordValue, EmailValue);
    passwordResetHandler();
    emailResetHandler();
  };

  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";

  const emailClasses = emailHasError
    ? "form-control invalid" : "form-control";

  return (
    <Modal onClose={props.onClose}>
      <form className="form-layout" onSubmit={submitHandler}>
        <img alt=''
          style={{
            maxWidth: "225px",
            alignSelf: "center",
            padding: "2rem 0",
          }}
          src={Logo}
        ></img>
        <div className='control-group'>
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
              <p className='error-text'>Please enter your Email</p>
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
              <p className='error-text'>Please enter your Password</p>
            )}
          </div>
        </div>
        <div className='form-actions'>
          <button style={{ marginTop: "1rem" }} disabled={!formIsValid}>
            Masuk
          </button>
          <button onClick={props.onClose}>Close</button>
        </div>
      </form>
    </Modal>
  );
};

export default LoginForm;