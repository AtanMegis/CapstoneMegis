import React from 'react';
import classes from './NewsItem.module.css';

const NewsItem = ({ title, description, url, urlToImage }) => {
	return (
		<div className="main-wrapper">
			<div className="main-container">
				<div className="container">
					<div>
						<img
							className={classes['container-img']}
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
		</div>
	);
};

export default NewsItem;
