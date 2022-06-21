import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../config/firebase/firebase';

const login = async (passwordValue, EmailValue, callback) => {
	try {
		const user = await signInWithEmailAndPassword(
			auth,
			EmailValue,
			passwordValue
		);
		console.log({ user });
		callback(user);
	} catch (error) {
		console.log(error.message);
	}
};

export const SERVICE_AUTH = {
	login,
};
