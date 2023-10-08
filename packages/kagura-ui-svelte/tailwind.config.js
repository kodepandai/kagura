import kagura from '@kagura-ui/core';
import mantine from '@kagura-ui/preset-mantine';
// import { theme as bootstrapTheme } from '@kagura-ui/preset-bootstrap';
/** @type {import('tailwindcss').Config} */
export default {
	content: ['src/**/*.{svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [
		kagura([
			{
				scope: 'mantine',
				preset: mantine({
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
						}
					}
				})
			}
			// {
			// 	scope: 'bootstrap',
			// 	preset: bootstrapTheme({
			// 		colors: {
			// 			base: {
			// 				custom: '#004400'
			// 			}
			// 		},
			// 		components: {
			// 			button: {
			// 				colors: {
			// 					custom: {
			// 						'@apply border-black !rounded-none': {}
			// 					}
			// 				}
			// 			}
			// 		}
			// 	})
			// }
		])
	]
};
