
import React, { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm';
import Register from '../Register/Register';
import Modal from '../UI/Modal';
import { authActions } from '../../config/redux/reducers/auth';
import { useDispatch } from 'react-redux';
import { initializeApp } from 'firebase/app';

const AuthModal = (props) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false)
    const dispatch = useDispatch()
    const AUTH_PAGES = {
        LOGIN: "login",
        REGISTER: "register"
    };
    const [authPage, setAuthPage] = useState(AUTH_PAGES.LOGIN)

    const handleChangeAuthPage = () => {
        setAuthPage(authPage === AUTH_PAGES.LOGIN ? AUTH_PAGES.REGISTER : AUTH_PAGES.LOGIN)
    }

    // const loginHandler = () => {
        
    //     dispatch(authActions.login())
    // }
    
    return (
        <Modal onClose={props.onClose}>
            {setAuthPage === AUTH_PAGES.LOGIN ? (<Register />
            ) : (<LoginForm />)}
            {/* <a onClick={handleChangeAuthPage}>{authPage === AUTH_PAGES.LOGIN ? "register" : "login"}</a> */}
            {/* <button style={{ marginTop: "1rem" }} onClick={loginHandler} >
                Masuk
            </button>
            <button onClick={props.onClose}>Keluar</button> */}
        </Modal>
    )
}

export default AuthModal