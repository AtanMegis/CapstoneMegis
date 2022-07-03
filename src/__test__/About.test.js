import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About/About';

describe('check tag <a>', () => {
	it('should have tag thoriq ', () => {
		render(<About />);
		let href = screen.getByLabelText('Babang Thoriq');
		expect(
			href
				.getAttributeNode('href')
				.isEqualNode(
					'https://www.linkedin.com/in/thoriq-ilhami-zaidan-6ab628224/'
				)
		);
	});
});
