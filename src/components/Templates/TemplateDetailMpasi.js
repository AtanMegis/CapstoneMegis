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
