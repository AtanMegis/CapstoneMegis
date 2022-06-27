import React from 'react';
import classes from './GiziItem.module.css';

const GiziItem = ({ title, description, urlToImage }) => {
	return (
		<>
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
						<h3>{title}</h3>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default GiziItem;
