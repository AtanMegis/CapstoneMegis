import React, { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import AuthModal from './components/AuthModal/AuthModal';
import Home from '@pages/Home/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import HomeDetail from '@pages/Home/HomeDetail';

// import Stunting from '@components/Content/Stunting/Stunting';
// import NewsList from '@components/Content/News/NewsList';
// import Chat from '@components/Chat/Chat';

function App() {
	const [LoginIsShown, setLoginIsShown] = useState(false);

	const showLoginForm = () => {
		setLoginIsShown(true);
	};

	const hideLoginHandler = () => {
		setLoginIsShown(false);
	};

	return (
		<>
			{LoginIsShown && <AuthModal onClose={hideLoginHandler} />}
			<Header onShowLoginForm={showLoginForm} />
			<Switch>
				<Route path="/" exact>
					<Redirect to="/home" />
				</Route>
				<Route path="/home" exact>
					<Home />
				</Route>
				<Route path="/product/:id">
					<HomeDetail />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
