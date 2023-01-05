<script lang="ts">
	import type { InputVariant } from 'kagura-ui/contracts/input';
	import type { Size } from 'kagura-ui/contracts/tailwind';
	import Input from './input';
	import type { Classes as WrapperClasses } from './Input.Wrapper.svelte';
	import type { Classes as InputClasses } from './Input.svelte';

	export let required = false;
	export let size: Size = 'md';
	export let label = '';
	export let description = '';
	export let withAsterisk: boolean | undefined = undefined;
	export let error = '';
	export let inputWrapperOrder: ('input' | 'description' | 'label' | 'error')[] = [
		'label',
		'description',
		'input',
		'error'
	];
	export let value = '';
	export let variant: InputVariant = 'default';
	export let disabled = false;
	export let placeholder = '';
	export let classes: Partial<
		WrapperClasses &
			Omit<InputClasses, 'root'> & {
				inputRoot: string;
			}
	> = {};
</script>

<Input.Wrapper
	{required}
	{size}
	{error}
	{inputWrapperOrder}
	{withAsterisk}
	{label}
	{description}
	classes={{
		wrapper: classes.wrapper,
		label: classes.label,
		description: classes.description,
		required: classes.required,
		error: classes.error
	}}
>
	<Input
		bind:value
		{variant}
		{disabled}
		{placeholder}
		invalid={!!error}
		classes={{
			root: classes.inputRoot,
			input: classes.input
		}}
	/>
</Input.Wrapper>
