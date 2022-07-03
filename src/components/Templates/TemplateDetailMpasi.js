import axios from 'axios';
import React, { useEffect, useState } from 'react';
import mockapi from '../../lib/mockapi';
import { useParams } from 'react-router-dom';

export const TemplateDetailMpasi = () => {
	const params = useParams();

	const [templates, setTemplateDetailMpasi] = useState(null);
	useEffect(() => {
		const getTemplateDetailMpasi = async () => {
			try {
				const response = await axios.get(
					`${mockapi}/mpasi/${params.id}`
				);
				setTemplateDetailMpasi(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getTemplateDetailMpasi();
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
					<p style={{whiteSpace: 'pre-line'}} className="content-detail">{templates.description}</p>
				</div>
			)}
		</div>
	);
};
