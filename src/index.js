import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import store from './config/redux/store/store';
import { Provider } from 'react-redux';
// import * as Sentry from '@sentry/react';
// import { BrowserTracing } from '@sentry/tracing';
// import { createBrowserHistory } from 'history';

// const routes = [{ path: '/users/:userid' }, { path: '/users' }, { path: '/' }];

// const history = createBrowserHistory();

// Sentry.init({
// 	integrations: [
// 		new BrowserTracing({
// 			routingInstrumentation: Sentry.reactRouterV5Instrumentation(
// 				history,
// 				routes,
// 				matchPath
// 			),
// 		}),
// 	],

// 	// We recommend adjusting this value in production, or using tracesSampler
// 	// for finer control
// 	tracesSampleRate: 0.2,
// });

// Sentry.init({
// 	dsn: 'https://3eabe442346a4a94aaf84e09abe7becd@o1297211.ingest.sentry.io/6525312',
// 	maxBreadcrumbs: 50,
// 	debug: true,
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router>
				{/* <SentryRoutes> */}
				<App />
				{/* </SentryRoutes> */}
			</Router>
		</Provider>
	</React.StrictMode>
);
