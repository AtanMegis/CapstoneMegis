import React, { useState } from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import Home from '@pages/Home/Home';
import AuthModal from '@components/AuthModal/AuthModal';

function App() {
	const [LoginIsShown, setLoginIsShown] = useState(false);

	const showLoginForm = () => {
		setLoginIsShown(true);
	};

	const hideLoginHandler = () => {
		setLoginIsShown(false);
	};

	return (
		<React.Fragment>
			{LoginIsShown && <AuthModal onClose={hideLoginHandler} />}
			<Header onShowLoginForm={showLoginForm} />
			<Home />
			<Footer />
		</React.Fragment>
	);
}

export default App;
