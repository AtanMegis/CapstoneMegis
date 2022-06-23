import React, { useEffect, useState } from 'react';
import axios from 'axios';
import GiziItem from './GiziItem';

const GiziList = () => {
	const [gizi, setGizi] = useState([]);
	useEffect(() => {
		const getGizi = async () => {
			const response = await axios.get(
				'https://62a6e5a797b6156bff81e2bc.mockapi.io/gizi'
			);
			setGizi(response.data);
		};
		getGizi();
	}, []);

	return (
		<>
			(
			<div className={{}}>
				<h1 style={{ fontSize: '50px' }}>Informasi Gizi</h1>
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
