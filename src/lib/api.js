// export async function getAllNews() {
// 	const response = await fetch(
// 		'https://62a6e5a797b6156bff81e2bc.mockapi.io/berita'
// 	);
// 	const data = await response.json();

// 	if (!response.ok) {
// 		throw new Error(data.message || 'Could not fetch quotes.');
// 	}

// 	const transformedNews = [];

// 	for (const key in data) {
// 		const newsObj = {
// 			id: key,
// 			...data[key],
// 		};

// 		transformedNews.push(newsObj);
// 	}
// 	return transformedNews;
// }
