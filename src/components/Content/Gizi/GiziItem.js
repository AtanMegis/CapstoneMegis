import React from 'react';
import classes from './GiziItem.module.css';

const GiziItem = ({ title, description, urlToImage }) => {
	return (
		<>
			<div className={classes['gizi']}>
				<div className={classes['gizi-item']}>
					<div>
						<img
							className={classes['gizi-img']}
							src={urlToImage}
							alt={urlToImage}
						/>
					</div>
					<div>
						<h3>
							<p>{title}</p>
						</h3>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default GiziItem;
