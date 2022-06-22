import React from 'react';
import { useParams } from 'react-router-dom';

const DUMMY_PRODUCTS = [
	{
		id: 'm1',
		title: 'Apa itu Stunting',
		body: 'LOREM IPSUMM',
		url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg',
	},
	{
		id: 'm2',
		title: 'Berita Terkini',
		body: 'LOREM IPSUMM',
		url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg',
	},
	{
		id: 'm3',
		title: 'Informasi Gizi',
		body: 'LOREM IPSUMM',
		url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg',
	},
	{
		id: 'm4',
		title: 'MPASI',
		body: 'MPASI',
		url: 'https://mdbootstrap.com/img/Photos/Slides/img%20(105).jpg',
	},
];

const HomeDetail = () => {
	const params = useParams();
	console.log(params);

	const product = DUMMY_PRODUCTS.find((product) => product.id === params.id);

	if (!product) {
		return <p> PAGE NOT FOUND !!!</p>;
	}

	return (
		<>
			<p>{params.id}</p>
		</>
	);
};

export default HomeDetail;
