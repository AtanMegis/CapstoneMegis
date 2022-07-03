import React from 'react';
import { Link } from 'react-router-dom';

const MpasiItem = ({ title, urlToImage, description, id }) => {
	return (
		<>
			<div className="main-container">
				<div className="container">
					<div>
						<img
							className="container-img"
							src={urlToImage}
							alt={urlToImage}
						/>
					</div>
					<div>
						<h3>
							<Link to={`/mpasi/${id}`}>{title}</Link>
						</h3>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default MpasiItem;
