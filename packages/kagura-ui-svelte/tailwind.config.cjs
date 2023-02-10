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
		kagura.config([
			{
				scope: 'mantine',
				preset: mantine.theme({
					colors: {
						base: {
							custom: '#ff0000'
						}
					},
					components: {
						button: {
							colors: {
								custom: {
									'@apply rounded-lg': {}
								}
							}
						},
						select: {
							input: {}
						}
					}
				})
			},
			{
				scope: 'bootstrap',
				preset: bootstrap.theme({
					colors: {
						base: {
							custom: '#004400'
						}
					},
					components: {
						button: {
							colors: {
								custom: {
									'@apply border-black !rounded-none': {}
								}
							}
						}
					}
				})
			}
		])
	]
};
