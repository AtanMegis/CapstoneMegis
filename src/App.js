import React, { useState } from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import AuthModal from '@components/AuthModal/AuthModal';

import { Switch, Route, Redirect } from 'react-router-dom';
import Stunting from '@components/Content/Stunting/Stunting';
import NewsList from '@components/Content/News/NewsList';
import GiziList from '@components/Content/Gizi/GiziList';
// import * as Sentry from '@sentry/react';
import NotFound from '@pages/NotFound/NotFound';
import About from '@pages/About/About';
import MpasiList from '@components/Content/Mpasi/MpasiList';
import Home from '@pages/Home/Home';

function App() {
	const [LoginIsShown, setLoginIsShown] = useState(false);

	const showLoginForm = () => {
		setLoginIsShown(true);
	};

	const hideLoginHandler = () => {
		setLoginIsShown(false);
	};

	// const FallbackComponent = () => {
	// 	return <div>An error has occured</div>;
	// };

	return (
		<>
			{/* <Sentry.ErrorBoundary fallback={FallbackComponent}> */}
			{LoginIsShown && <AuthModal onClose={hideLoginHandler} />}
			<Header onShowLoginForm={showLoginForm} />
			<Switch>
				<Route path="/" exact>
					<Redirect to="/home" />
				</Route>
				<Route path="/home" exact>
					<Home />
				</Route>
				<Route path="/about" exact>
					<About />
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
				<Route path="/mpasi">
					<MpasiList />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
			<Footer />
			{/* </Sentry.ErrorBoundary> */}
		</>
	);
}

export default App;
