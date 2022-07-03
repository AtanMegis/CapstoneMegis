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
		<div className="flex flex-wrap pt-4 pb-8">
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
