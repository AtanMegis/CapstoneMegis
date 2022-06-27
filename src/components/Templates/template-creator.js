import React from 'react';

const createNewsDetailTemplate = ({ title, content, urlToImage }) => {
	<div className="row-detail">
		<div className="content-detail">
			<h3 className="item-title">${title}</h3>
			<img className="image" src={urlToImage} alt="" />
			<p className="content-detail">${content}</p>
		</div>
	</div>;
};

const createGiziDetailTemplate = ({ title, content, urlToImage }) => {
	<div className="row-detail">
		<div className="content-detail">
			<h3 className="item-title">${title}</h3>
			<img className="image" src={urlToImage} alt="" />
			<p className="content-detail">${content}</p>
		</div>
	</div>;
};

const createResepDetailTemplate = ({ title, content, urlToImage }) => {
	<div className="row-detail">
		<div className="content-detail">
			<h3 className="item-title">${title}</h3>
			<img className="image" src={urlToImage} alt="" />
			<p className="content-detail">${content}</p>
		</div>
	</div>;
};

export default {
	createNewsDetailTemplate,
	createGiziDetailTemplate,
	createResepDetailTemplate,
};
