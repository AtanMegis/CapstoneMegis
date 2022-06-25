import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './ProductItem.module.css';

const ProductItem = ({ title, url, to, body }) => {
	return (
		<div className={classes['card-container']}>
			<div className={classes['image-container']}>
				<img src={url} alt={url} />
			</div>
			<div className={classes['card-title']}>
				<h3>
					<a href={url}>{title}</a>
				</h3>
			</div>
			<div className={classes['card-body']}>
				<p>{body}</p>
				<NavLink
					activeClassName=""
					className={classes['button-body']}
					to={to}
				>
					Selengkapnya
				</NavLink>
			</div>
		</div>
	);
};

export default ProductItem;
