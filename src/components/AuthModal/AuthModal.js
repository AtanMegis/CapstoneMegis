
import React, { useState } from 'react'
import LoginForm from '../LoginForm/LoginForm';
import Register from '../Register/Register';
import Modal from '../UI/Modal';

const AuthModal = (props) => {
    const AUTH_PAGES = {
        LOGIN: "login",
        REGISTER: "register"
    };

    const handleChangeAuthPage = () => {
        setAuthPage(authPage === AUTH_PAGES.LOGIN ? AUTH_PAGES.LOGIN : AUTH_PAGES.REGISTER)
    }


    const [authPage, setAuthPage] = useState(AUTH_PAGES.LOGIN)
    return (
        <Modal >
            {setAuthPage === AUTH_PAGES.REGISTER ? (<Register />
            ) : (<LoginForm />)}
            <button onClick={handleChangeAuthPage}>{authPage === AUTH_PAGES.LOGIN ? "login" : "register"}</button>
        </Modal>
    )
}

export default AuthModal