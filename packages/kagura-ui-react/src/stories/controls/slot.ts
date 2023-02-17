const controlSlot = (slotName: string) => ({
	control: 'boolean',
	description: `simulate \`slot="${slotName}"\`, see \`With ${
		slotName[0].toUpperCase() + slotName.slice(1, slotName.length)
	}\` story for example`
});

export default controlSlot;
