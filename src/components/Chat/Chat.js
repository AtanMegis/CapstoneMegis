import React, { useState, useEffect, useRef } from 'react';
import SendMessage from './SendMessage';
import { auth, db } from '@config/firebase/firebase';
import {
	collection,
	orderBy,
	limit,
	onSnapshot,
	doc,
} from 'firebase/firestore';

const Chat = () => {
	const [messages, setMessages] = useState([]);
	const scroll = useRef();

	useEffect((id) => {
		collection(db, 'messages');
		orderBy('createdAt');
		limit(50);
		doc(String(id));
		onSnapshot((snapshot) => {
			setMessages(snapshot.docs.map((doc) => doc.data()));
		});
	}, []);

	return (
		<>
			<div className="msgs">
				{messages.map(({ id, text, photoURL, uid }) => (
					<div
						key={id}
						id={id}
						className={`msg ${
							uid === auth.currentUser.uid
								? 'sent'
								: 'received'
						}`}
					>
						<img src={photoURL} alt="" />
						<p>{text}</p>
					</div>
				))}
			</div>
			<SendMessage scroll={scroll} />
			<div ref={scroll}></div>
		</>
	);
};

export default Chat;
