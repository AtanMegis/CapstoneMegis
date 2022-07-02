import React from 'react';
import classes from './NewsItem.module.css';
import { Link } from 'react-router-dom';

const NewsItem = ({ title, description, urlToImage, id }) => {
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
							<Link to={`/berita/${id}`}>{title}</Link>
						</h3>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewsItem;
