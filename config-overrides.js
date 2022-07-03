const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
	alias({
		'@components': 'src/components',
		'@services': 'src/services',
		'@config': 'src/config',
		'@halaman': 'src/halaman',
		'@assets': 'src/assets',
		'@hooks': 'src/hooks',
		'@lib': 'src/lib',
	})(config);

	return config;
};