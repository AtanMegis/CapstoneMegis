import axios from 'axios';
import React, { useEffect, useState } from 'react';
import mockapi from '../../lib/mockapi';
import { useParams } from 'react-router-dom';
import './Templates.css';

export const TemplateDetailNews = () => {
	const params = useParams();

	const [templates, setTemplateDetailNews] = useState(null);
	useEffect(() => {
		const getTemplateDetailNews = async () => {
			try {
				const response = await axios.get(
					`${mockapi}/berita/${params.id}`
				);
				setTemplateDetailNews(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getTemplateDetailNews();
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
					<p style={{whiteSpace: 'pre-line'}}className="content-detail">{templates.description}</p>
				</div>
			)}
		</div>
	);
};
