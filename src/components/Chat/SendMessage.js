import { auth } from '@config/firebase/firebase';
import React, { useState } from 'react';
import { FieldValue } from 'firebase/firestore';
import { collection, addDoc } from 'firebase/firestore';

const SendMessage = ({ scroll }) => {
	const [msg, setMsg] = useState('');
	async function sendMessage(e) {
		e.preventDefault();
		const { uid, photoURL } = auth.currentUser;

		collection('messages');
		await addDoc({
			text: msg,
			photoURL,
			uid,
			createdAt: FieldValue.serverTimestamp(),
		});
		setMsg('');
		scroll.current.scrollIntoView({ behavior: 'smooth' });
	}

	const messageChangeHandler = (e) => {
		setMsg(e.target.value);
	};

	return (
		<>
			<form onSubmit={sendMessage}>
				<div className="send-message">
					<input
						style={{
							width: '78%',
							fontSize: '15px',
							fontWeight: '550',
							marginLeft: '5px',
							marginBottom: '-3px',
						}}
						placeholder="Ketik pesan..."
						type="text"
						value={msg}
						onChange={messageChangeHandler}
					/>
					<button
						style={{
							width: '18%',
							fontSize: '15px',
							fontWeight: '550',
							margin: '4px 5% -13px 5%',
							maxWidth: '200px',
						}}
						type="submit"
					>
						Send
					</button>
				</div>
			</form>
		</>
	);
};

export default SendMessage;
