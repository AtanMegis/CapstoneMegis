import axios from 'axios';
import React, { useEffect, useState } from 'react';
import mockapi from '../../lib/mockapi';
import { useParams } from 'react-router-dom';

export const TemplateDetailGizi = () => {
	const params = useParams();

	const [templates, setTemplateDetailGizi] = useState(null);
	useEffect(() => {
		const getTemplateDetailGizi = async () => {
			try {
				const response = await axios.get(
					`${mockapi}/gizi/${params.id}`
				);
				setTemplateDetailGizi(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getTemplateDetailGizi();
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
