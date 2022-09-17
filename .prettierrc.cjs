module.exports = {
	useTabs: true,
	endOfLine: 'lf',
	trailingComma: 'es5',
	singleQuote: true,
	semi: true,
	plugins: [require.resolve('prettier-plugin-astro')],
	overrides: [
		{
			files: '*.astro',
			options: {
				parser: 'astro',
			},
		},
	],
};
