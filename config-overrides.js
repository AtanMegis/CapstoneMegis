import { alias } from 'react-app-rewire-alias';

export default function override(config) {
	alias({
		'@components': 'src/components',
		'@services': 'src/services',
		'@config': 'src/config',
		'@pages': 'src/Pages',
		'@assets': 'src/assets',
		'@hooks': 'src/hooks',
	})(config);

	return config;
}
