import React, { useState } from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import AuthModal from '@components/AuthModal/AuthModal';
import Home from '@pages/Home/Home';
import { Switch, Route, Redirect } from 'react-router-dom';
import Stunting from '@components/Content/Stunting/Stunting';
import NewsList from '@components/Content/News/NewsList';
import GiziList from '@components/Content/Gizi/GiziList';
import About from '@pages/About/About';

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
				<Route path="/stunting">
					<Stunting />
				</Route>
				<Route path="/berita">
					<NewsList />
				</Route>
				<Route path="/informasigizi">
					<GiziList />
				</Route>
				<Route path="mpasi"></Route>
				<Route path="/about" exact>
					<About />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
