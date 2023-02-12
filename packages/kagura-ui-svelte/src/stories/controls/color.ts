const controlColor = (component: string) => ({
	control: { type: 'select' },
	options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'custom'],
	description: component + ' color scheme, default is primary'
});
export default controlColor;
