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
		<div className="flex flex-wrwap pt-4 pb-8 w-9/12 m-auto">
			{templates && (
				<div className="px-40">
					<h3 className="py-8">{templates.title}</h3>
					<img
						className="w-full max-h-96 object-cover rounded-lg"
						src={templates.urlToImage}
						alt=""
					/>
					<p
						style={{ whiteSpace: 'pre-line' }}
						className="text-justify py-8"
					>
						{templates.description}
					</p>
				</div>
			)}
		</div>
	);
};
