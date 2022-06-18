import React from 'react'
import useInput from '../../hooks/useInput'
import Logo from "../../assets/UserLogo.png";
import './Register.css'
import { createUserWithEmailAndPassword, getIdToken, sendEmailVerification } from 'firebase/auth';
import { auth } from "../../config/firebase/firebase";


const Register = (props) => {
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
        value: passwordConfValue,
        hasError: passwordConfHasError,
        isValid: passwordConfIsValid,
        inputBlurHandler: passwordConfBlurHandler,
        valueChangeHandler: passwordConfChangeHandler,
        reset: passwordConfResetHandler,
    } = useInput(isNotEmpty);

    const {
        value: EmailValue,
        hasError: emailHasError,
        isValid: emailIsValid,
        inputBlurHandler: emailBlurHandler,
        valueChangeHandler: emailChangeHandler,
        reset: emailResetHandler,
    } = useInput(isEmail);


    let passwordMatch = false;

    if ((passwordValue === passwordConfValue) && passwordIsValid && passwordConfIsValid) passwordMatch = true;

    let formIsValid = false;

    if (passwordMatch && emailIsValid) {
        formIsValid = true;
    }

    const submitHandler = async (e) => {
        e.preventDefault()

        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                EmailValue,
                passwordValue,
                passwordConfValue,
            ).then(response => {
                sendEmailVerification()
                getIdToken()
               console.log(response, 'mohon verifikasi email anda !')    
              })
            console.log('user Sign Up :', user)
        } catch (error) {
            console.log(error)
        }

        if (!formIsValid) {
            return;
        }
        console.log("submitted!");
        console.log(passwordValue, EmailValue);
        emailResetHandler()
        passwordConfResetHandler()
        passwordResetHandler()
        
    }

    const passwordClasses = passwordHasError
        ? "form-control invalid"
        : "form-control";

    const emailClasses = emailHasError
        ? "form-control invalid" : "form-control";

    const passwordConfClasses = passwordConfHasError
        ? "form-control invalid"
        : "form-control";

    return (
        <form onSubmit={submitHandler}>
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
            <div className={passwordConfClasses}>
                <label htmlFor="name">Password</label>
                <input
                    type="text"
                    id="name"
                    onChange={passwordConfChangeHandler}
                    onBlur={passwordConfBlurHandler}
                    value={passwordConfValue}
                />
                {passwordConfHasError && (
                    <p className='error-text'>Please Confirm your password</p>
                )}
            </div>
            <div className='form-actions'>
                <button style={{ marginTop: "1rem" }} disabled={!formIsValid} >
                    Daftar
                </button>
                <button onClick={props.onClose}>Keluar</button>
            </div>
        </form>

    )
}

export default Register