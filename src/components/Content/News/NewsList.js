import React, { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './NewsList.module.css';
import NewsItem from './NewsItem';

const NewsList = () => {
	const [articles, setArticles] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		try {
			const getArticles = async () => {
				const response = await axios.get(
					'https://62a6e5a797b6156bff81e2bc.mockapi.io/berita'
				);

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
			setError(err.message || 'Something went wrong !!!');
			setIsLoading(false);
		}
		setIsLoading(false);
	}, []);

	return (
		<div className={classes['wrapper']}>
			<h1>Berita Terkini !</h1>
			<hr />
			{error && <p>{error}</p>}
			{isLoading && <h1> Loading ...</h1>}
			{!isLoading &&
				articles.map((data) => (
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
