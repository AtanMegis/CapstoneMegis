import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './ProductItem.module.css';

const ProductItem = ({ title, url, to }) => {
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
				<p>
					lorem ipsum dolor sit amet, consectetur adipis, sed do
					eiusmod tempor incididunt ut labore et, consectetur
					adipiscing elit, sed do eiusmod tempor inc
				</p>
				<NavLink
					activeClassName=""
					className={classes['button-body']}
					to={to}
				>
					<button class="bg-someting-green hover:bg-someting-dark-green text-white font-bold py-2 px-4 rounded my-4">
						Baca Selengkapnya
					</button>
				</NavLink>
			</div>
		</div>
	);
};

export default ProductItem;
