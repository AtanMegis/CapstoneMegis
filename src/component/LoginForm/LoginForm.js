import useInput from "../../hooks/useInput";
import Card from "../UI/Card";
import Logo from "../../asset/UserLogo.png";
<<<<<<< HEAD
import "./LoginForm.css";
=======
import styles from "./LoginForm.module.css";
import Modal from "../UI/Modal";
>>>>>>> 5e761b7 (add Moda & backdrop)

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

<<<<<<< HEAD
  const passwordClasses = passwordHasError
    ? "form-control invalid"
    : "form-control";
=======
  const passwordClasses = passwordHasError ? "form-control invalid" : "form-control";
>>>>>>> 5e761b7 (add Moda & backdrop)

  const emailClasses = emailHasError ? "form-control invalid" : "form-control";

  return (
<<<<<<< HEAD
    <Card>
      <form className="form-layout" onSubmit={submitHandler}>
=======
    <Modal onClose={props.onClose}>
      <form className={styles["form-layout"]} onSubmit={submitHandler}>
>>>>>>> 5e761b7 (add Moda & backdrop)
        <img
          style={{
            maxWidth: "225px",
            alignSelf: "center",
            padding: "2rem 0",
          }}
          src={Logo}
        ></img>
<<<<<<< HEAD
        <div className="control-group">
=======
        <div className={styles['control-group']}>
>>>>>>> 5e761b7 (add Moda & backdrop)
          <div className={emailClasses}>
            <label htmlFor="name">Email</label>
            <input
              type="email"
              id="name"
              onChange={emailChangeHandler}
              onBlur={emailBlurHandler}
              value={EmailValue}
              required
            />
            {emailHasError && (
<<<<<<< HEAD
              <p className="error-text">Please enter your Email</p>
=======
              <p className={styles['error-text']}>Please enter your Email</p>
>>>>>>> 5e761b7 (add Moda & backdrop)
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
              required
            />
            {passwordHasError && (
<<<<<<< HEAD
              <p className="error-text">Please enter your Password</p>
            )}
          </div>
        </div>
        <div className="form-actions">
          <button style={{ marginTop: "1rem" }} disabled={!formIsValid}>
            Masuk
          </button>
=======
              <p className={styles['error-text']}>Please enter your Password</p>
            )}
          </div>
        </div>
        <div className={styles['form-actions']}>
          <button style={{ marginTop: "1rem" }} disabled={!formIsValid}>
            Masuk
          </button>
          <button onClick={props.onClose}>Close</button>
>>>>>>> 5e761b7 (add Moda & backdrop)
        </div>
      </form>
    </Modal>
  );
};

export default LoginForm;