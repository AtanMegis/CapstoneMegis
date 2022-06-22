import React from 'react';
import ProductList from '@components/Content/MainContent/ProductsList';
import { useParams } from 'react-router-dom';

const Home = () => {
	const params = useParams();
	console.log(params);

	return (
		<div>
			<main>
				<ProductList />
				<p>{params.id}</p>
			</main>
		</div>
	);
};

export default Home;
