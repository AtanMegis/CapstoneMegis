import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NewsItem from './NewsItem';

const NewsList = () => {
	const [articles, setArticles] = useState([]);

	useEffect(() => {
		const getArticles = async () => {
			const response = await axios.get(
				'https://62a6e5a797b6156bff81e2bc.mockapi.io/berita'
			);
			setArticles(response.data);
		};
		getArticles();
	}, []);

	return (
		<div className={{}}>
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
