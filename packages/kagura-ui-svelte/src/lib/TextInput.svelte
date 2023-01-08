<script lang="ts">
	import type { InputVariant } from 'kagura-ui/contracts/input';
	import type { Size } from 'kagura-ui/contracts/tailwind';
	import Input from './input';
	import { useInputWrapperClasses, type Classes as WrapperClasses } from './Input.Wrapper.svelte';
	import { useInputClasses, type Classes as InputClasses } from './Input.svelte';

	export let refInput: any;
	export let thisInput: any;
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
	const inputClasses = useInputClasses({ ...classes, root: classes.inputRoot });
	const inputWrapperClasses = useInputWrapperClasses(classes);
</script>

<Input.Wrapper
	{required}
	{size}
	{error}
	{inputWrapperOrder}
	{withAsterisk}
	{label}
	{description}
	classes={inputWrapperClasses}
>
	<Input
		bind:value
		{variant}
		{disabled}
		{placeholder}
		invalid={!!error}
		classes={inputClasses}
		parentSlots={$$slots}
		{refInput}
		bind:thisInput
	>
		<slot name="icon" slot="icon" />
		<slot name="rightSection" slot="rightSection" />
	</Input>
</Input.Wrapper>
