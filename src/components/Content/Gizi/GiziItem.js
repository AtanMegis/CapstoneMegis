import React from 'react';
import classes from './GiziItem.module.css';
import { Link } from 'react-router-dom';

const GiziItem = ({ title, description, urlToImage, id }) => {
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
							<Link to={`/gizi/${id}`}>{title}</Link>
						</h3>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};
export default GiziItem;
