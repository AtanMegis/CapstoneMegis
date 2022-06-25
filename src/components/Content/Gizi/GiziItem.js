import React from 'react';

const GiziItem = ({ title, description, urlToImage }) => {
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
							<p>{title}</p>
						</h3>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</>
	);
};

export default GiziItem;
