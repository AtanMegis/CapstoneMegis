import React, { useState } from 'react';
import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import AuthModal from '@components/AuthModal/AuthModal';

import { Switch, Route, Redirect } from 'react-router-dom';
import Stunting from '@components/Content/Stunting/Stunting';
import NewsList from '@components/Content/News/NewsList';
import GiziList from '@components/Content/Gizi/GiziList';
import NotFound from '@halaman/NotFound/NotFound';
import About from '@halaman/About/About';
import MpasiList from '@components/Content/Mpasi/MpasiList';
import Home from '@halaman/Home/Home';
import { TemplateDetailNews } from './components/Templates/TemplateDetailNews';
import { TemplateDetailGizi } from './components/Templates/TemplateDetailGizi';
import { TemplateDetailMpasi } from './components/Templates/TemplateDetailMpasi';

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
				<Route path="/about" exact>
					<About />
				</Route>
				<Route path="/stunting">
					<Stunting />
				</Route>
				<Route path="/berita" exact>
					<NewsList />
				</Route>
				<Route path="/berita/:id">
					<TemplateDetailNews />
				</Route>
				<Route path="/gizi" exact>
					<GiziList />
				</Route>
				<Route path="/gizi/:id">
					<TemplateDetailGizi />
				</Route>
				<Route path="/mpasi" exact>
					<MpasiList />
				</Route>
				<Route path="/mpasi/:id">
					<TemplateDetailMpasi />
				</Route>
				<Route path="*">
					<NotFound />
				</Route>
			</Switch>
			<Footer />
		</>
	);
}

export default App;
