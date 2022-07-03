import React from 'react';
import { render, screen } from '@testing-library/react';

import { createMemoryHistory } from 'history';
import { Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import App from '../App';

test('landing on a bad page', () => {
	const history = createMemoryHistory();
	history.push('/some/bad/route');
	render(
		<Router location={history.location} navigator={history}>
			<App />
		</Router>
	);

	expect(screen.getByText(/PAGE NOT FOUND !!/i)).toBeInTheDocument();
});
