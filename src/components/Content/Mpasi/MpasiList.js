import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MpasiItem from './MpasiItem';
import mockapi from 'src/lib/mockapi';

const MpasiList = () => {
	const [mpasi, setMpasi] = useState([]);

	useEffect(() => {
		const getMpasi = async () => {
			const response = await axios.get(`${mockapi}/mpasi`);
			setMpasi(response.data);
		};
		getMpasi();
	}, []);

	return (
		<div className={{}}>
			<h1 style={{ fontSize: '50px' }}>Resep MPASI</h1>
			<hr />

			{mpasi.map((data) => (
				<MpasiItem
					key={data.id}
					id={data.id}
					title={data.title}
					description={data.description}
					url={data.url}
					urlToImage={data.urlToImage}
				/>
			))}
		</div>
	);
};
export default MpasiList;
