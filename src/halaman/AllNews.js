// import NewsList from '@components/Content/News/NewsList';
// import React, { useEffect } from 'react';
// import useHttp from '@hooks/useHttp';
// import { getAllNews } from 'src/lib/api';

// const AllNews = () => {
// 	const {
// 		sendRequest,
// 		status,
// 		data: loadedNews,
// 		error,
// 	} = useHttp(getAllNews, true);

// 	useEffect(() => {
// 		sendRequest();
// 	}, [sendRequest]);

// 	if (status === 'pending') {
// 		return (
// 			<div className="centered">
// 				<LoadingSpinner />
// 			</div>
// 		);
// 	}

// 	if (error) {
// 		return <p className="centered focused">{error}</p>;
// 	}

// 	if (status === 'completed' && (!loadedNews || loadedNews.length === 0)) {
// 		return <p>NO NEWS FOUND</p>;
// 	}
// 	return (
// 		<>
// 			<NewsList news={loadedNews} />
// 		</>
// 	);
// };

// export default AllNews;
