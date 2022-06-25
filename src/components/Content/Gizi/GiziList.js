import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GiziItem from './GiziItem';
import mockapi from 'src/lib/mockapi';
import classes from './GiziList.module.css';

const GiziList = () => {
	const [gizi, setGizi] = useState([]);
	useEffect(() => {
		const getGizi = async () => {
			const response = await axios.get(`${mockapi}/gizi`);
			setGizi(response.data);
		};
		getGizi();
	}, []);

	return (
		<>
			(
			<div className={classes['wrapper']}>
				<h1>Informasi Gizi</h1>
				<hr />
				{gizi.map((data) => (
					<GiziItem
						key={data.id}
						id={data.id}
						title={data.title}
						description={data.description}
						urlToImage={data.urlToImage}
					/>
				))}
			</div>
			);
		</>
	);
};

export default GiziList;
