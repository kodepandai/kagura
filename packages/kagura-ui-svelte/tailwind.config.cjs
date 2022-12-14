const mantine = require('@kagura-ui/preset-mantine');
const bootstrap = require('@kagura-ui/preset-bootstrap');
const kagura = require('kagura-ui');
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['src/**/*.{svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		kagura([
			{
				preset: mantine(require('./mantine.kagura.cjs')),
				scope: 'mantine'
			},
			{
				preset: bootstrap(require('./bootstrap.kagura.cjs')),
				scope: 'bootstrap'
			}
		])
	]
};
