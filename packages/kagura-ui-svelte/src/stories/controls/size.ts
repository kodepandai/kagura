const controlSize = (component: string, defaultValue = 'sm') => ({
	control: {
		type: 'select'
	},
	options: ['xs', 'sm', 'md', 'lg', 'xl'],
	description: `${component} size, default is ${defaultValue}`
});
export default controlSize;
