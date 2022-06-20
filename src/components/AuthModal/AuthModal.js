import React, { useState } from 'react';
import LoginForm from './LoginForm/LoginForm';
import Register from './RegisterForm/Register';
import Modal from '../UI/Modal';
import { authActions } from '../../config/redux/reducers/auth';
import { useDispatch } from 'react-redux';
import { initializeApp } from 'firebase/app';

const AuthModal = (props) => {
    const AUTH_PAGES = {
        LOGIN: 'login',
        REGISTER: 'register',
    };
    const [authPage, setAuthPage] = useState(AUTH_PAGES.LOGIN);

    const handleChangeAuthPage = () => {
        setAuthPage(
            authPage === AUTH_PAGES.LOGIN
                ? AUTH_PAGES.REGISTER
                : AUTH_PAGES.LOGIN
        );
    };

    return (
        <Modal onClose={props.onClose}>
            {authPage === AUTH_PAGES.LOGIN ? (
                <LoginForm
                    onchangeAuthPage={handleChangeAuthPage}
                    onClose={props.onClose}
                />
            ) : (
                <Register
                    onchangeAuthPage={handleChangeAuthPage}
                    onClose={props.onClose}
                />
            )}
        </Modal>
    );
};

export default AuthModal;
