import React, { useEffect, useState } from 'react';
import axios from 'axios';
import classes from './NewsList.module.css';
// import LoadingSpinner from '@components/UI/LoadingSpinner';
// import useHttp from '@hooks/useHttp';
// import { getAllNews } from 'src/lib/api';
// import * as Sentry from '@sentry/react';
// import { useHistory, useLocation } from 'react-router-dom';

import NewsItem from './NewsItem';
import ErrorModal from '@components/UI/ErrorModal/ErrorModal';
import LoadingSpinner from '@components/UI/LoadingSpinner';
import mockapi from 'src/lib/mockapi';
// import LoadingSpinner from '@components/UI/LoadingSpinner';

const NewsList = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState();
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		setIsLoading(true);
		try {
			const getArticles = async () => {
				const response = await axios.get(`${mockapi}/berita`);

				let responseOK =
					response &&
					response.status === 200 &&
					response.statusText === 'OK';

				if (!responseOK) {
					throw new Error('Request failed!');
				}
				setArticles(response.data);
			};
			getArticles();
		} catch (err) {
			setError('Something went wrong');
			setIsLoading(false);
		}
		setIsLoading(false);
	}, []);

	// useEffect(() => {
	// 	const fetchNews = async () => {
	// 		const response = await fetch(
	// 			'https://62a6e5a797b6156bff81e2bc.mockapi.io/berita'
	// 		);

	// 		if (!response.ok) {
	// 			throw new Error('Ooops...Something went wrong !!');
	// 		}
	// 		setArticles(response.data);
	// 	};
	// 	fetchNews();
	// }, []);

	const clearError = () => {
		setError(null);
	};

	return (
		<div className={classes['wrapper']}>
			<h1>Berita Terkini !</h1>
			<hr />
			{error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}
			{isLoading && <LoadingSpinner />}
			{/* {error && <p>{error}</p>}
			{isLoading && <h2> Loading ...</h2>} */}
			{articles.map((data) => (
				<NewsItem
					key={data.id}
					id={data.id}
					title={data.title}
					description={data.description}
					url={data.url}
					urlToImage={data.urlToImage}
				/>
			))}
		</div>
	);
};

export default NewsList;
