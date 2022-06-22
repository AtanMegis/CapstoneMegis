import {
	signInWithEmailAndPassword,
	createUserWithEmailAndPassword,
	sendEmailVerification,
} from 'firebase/auth';
import { auth } from '@config/firebase/firebase';

const login = async (passwordValue, emailValue, callback) => {
	try {
		const user = await signInWithEmailAndPassword(
			auth,
			emailValue,
			passwordValue
		).then((userCredential) => {
			console.log(userCredential.user);
		});
		callback(user);
	} catch (error) {
		console.log(error.message || 'Something went wrong !');
	}
};

const register = async (
	passwordValue,
	emailValue,
	passwordConfValue,
	callback
) => {
	try {
		const user = await createUserWithEmailAndPassword(
			auth,
			emailValue,
			passwordValue,
			passwordConfValue
		).then((response) => {
			sendEmailVerification();
			// getIdToken();
			console.log(response, 'mohon verifikasi email anda !');
		});
		console.log('user Sign Up :', user);
		callback(user);
	} catch (error) {
		console.log(error);
	}
};

export const SERVICE_AUTH = {
	login,
	register,
};
