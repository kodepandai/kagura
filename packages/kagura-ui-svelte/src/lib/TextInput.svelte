<script lang="ts" context="module">
	export type InputType = 'text' | 'select';
	export interface TextInputClasses {
		inputWrapper: Partial<InputWrapperClasses>;
		input: Partial<InputClasses>;
	}
</script>

<script lang="ts">
	import type { InputVariant } from 'kagura-ui/contracts/input';
	import type { Size } from 'kagura-ui/contracts/tailwind';
	import Input from './input';
	import type { InputWrapperClasses, InputWrapperOrder } from './Input.Wrapper.svelte';
	import type { InputClasses } from './Input.svelte';

	export let refInput: HTMLInputElement;
	export let useInput: (node: HTMLInputElement) => void = () => {
		//pass
	};
	export let required = false;
	export let size: Size = 'md';
	export let label = '';
	export let description = '';
	export let withAsterisk: boolean | undefined = undefined;
	export let error = '';
	export let inputWrapperOrder: InputWrapperOrder = ['label', 'description', 'input', 'error'];
	export let value = '';
	export let variant: InputVariant = 'default';
	export let disabled = false;
	export let placeholder = '';
	export let classes: Partial<TextInputClasses> = {};
	export let type: InputType = 'text';
</script>

<Input.Wrapper
	{required}
	{size}
	{error}
	{inputWrapperOrder}
	{withAsterisk}
	{label}
	{description}
	classes={classes?.inputWrapper}
	data-input-type={type}
>
	<Input
		bind:value
		{variant}
		{disabled}
		{placeholder}
		invalid={!!error}
		classes={classes?.input}
		parentSlots={$$slots}
		{useInput}
		bind:refInput
		on:focus
		on:blur
		on:keyup
		on:input
		on:change
		{...$$restProps}
	>
		<slot name="icon" slot="icon" />
		<slot name="rightSection" slot="rightSection" />
	</Input>
</Input.Wrapper>
