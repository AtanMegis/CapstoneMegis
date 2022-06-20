import React from 'react';

import classes from './@NewsItem.module.css';

const NewsItem = ({ title, description, url, urlToImage }) => {
	return (
		<div className={classes['news-app']}>
			<div className={classes['news-item']}>
				<div>
					<img
						className={classes['news-img']}
						src={urlToImage}
						alt={urlToImage}
					/>
				</div>
				<div>
					<h3>
						<a href={url}>{title}</a>
					</h3>
					<p>{description}</p>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
