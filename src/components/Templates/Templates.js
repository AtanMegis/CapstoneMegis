import axios from 'axios';
import React, { useEffect, useState } from 'react';
import mockapi from '../../lib/mockapi';
import { useParams } from 'react-router-dom';

export const Templates = () => {
	const params = useParams();

	const [templates, setTemplates] = useState(null);
	useEffect(() => {
		const getTemplates = async () => {
			try {
				const response = await axios.get(
					`${mockapi}/berita/${params.id}`
				);
				setTemplates(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getTemplates();
	}, []);

	return (
		<div className="row-detail">
			{templates && (
				<div className="content-detail">
					<h3 className="item-title">{templates.title}</h3>
					<img
						className="image"
						src={templates.urlToImage}
						alt=""
					/>
					<p className="content-detail">{templates.content}</p>
				</div>
			)}
		</div>
	);
};
