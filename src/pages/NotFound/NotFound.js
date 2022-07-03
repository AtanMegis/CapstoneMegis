import React from 'react';
import classes from './NotFound.module.css';
import logoNotFound from '@assets/logoNotFound.svg';

const NotFound = () => {
	return (
		<div className={classes.centered}>
			<img src={logoNotFound} />
			<div>
				<h1>PAGE NOT FOUND !!</h1>
			</div>
		</div>
	);
};

export default NotFound;
