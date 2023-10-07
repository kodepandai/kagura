<script lang="ts" context="module">
	export type InputType = 'text' | 'number';
	export interface BaseInputClasses extends InputWrapperClasses, InputClasses {
		wrapper: string;
	}
</script>

<script lang="ts">
	import type { InputVariant } from '@kagura-ui/core/contracts/input';
	import type { Size } from '@kagura-ui/core/contracts/tailwind';
	import Input from './input';
	import type { InputWrapperClasses, InputWrapperOrder } from './Input.Wrapper.svelte';
	import type { InputClasses } from './Input.svelte';

	export let refInput: HTMLInputElement | undefined = undefined;
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
	export let classes: Partial<BaseInputClasses> = {};
	export let type: InputType = 'text';
	// this is helper for parent component to avoid render unecessary slot
	export let parentSlots: Partial<{ icon: boolean; rightSection: boolean }> = {
		icon: true,
		rightSection: true
	};
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
		root: classes.wrapper,
		description: classes.description,
		required: classes.required,
		label: classes.label,
		error: classes.error
	}}
	data-input-type={type}
>
	<Input
		{type}
		bind:value
		{variant}
		{disabled}
		{placeholder}
		invalid={!!error}
		classes={{
			root: classes.root,
			input: classes.input,
			icon: classes.icon,
			rightSection: classes.rightSection,
			invalid: classes.invalid,
			disabled: classes.disabled,
			withIcon: classes.withIcon
		}}
		{parentSlots}
		{useInput}
		bind:refInput
		on:focus
		on:blur
		on:keyup
		on:input
		on:change
		on:mousedown
		{...$$restProps}
	>
		<slot name="icon" slot="icon" />
		<slot name="rightSection" slot="rightSection" />
		<slot />
	</Input>
</Input.Wrapper>
