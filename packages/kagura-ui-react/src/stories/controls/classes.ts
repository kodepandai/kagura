const controlClasses = (keys: string) => ({
	control: 'object',
	description: `custom classes, see Custom Style story for example. <br>Available object keys: ${keys
		.split('<br>')
		.map((key) => `\`${key}\``)
		.join('\n')} <br>  _note: add \`!\` before class name to make it important_`
});
export default controlClasses;
