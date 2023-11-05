<script lang="ts" context="module">
	export type TextareaClasses = BaseInputClasses;
</script>

<script lang="ts">
	import type { InputVariant, Size } from '@kagura-ui/core/contracts';
	import { getContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	import type { BaseInputClasses } from './BaseInput.svelte';
	import InputWrapper, { type InputWrapperOrder } from './Input.Wrapper.svelte';
	import { extendClassName } from './utils/className';

	export let useTextArea: (node: HTMLTextAreaElement) => void = () => {
		//pass
	};
	const inputContext =
		getContext<Writable<{ size: Size; required: boolean }>>('input-context') || writable({});
	export let refTextArea: HTMLTextAreaElement | undefined = undefined;
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
	export let classes: Partial<TextareaClasses> = {};
	export let maxRows: number | undefined = undefined;
	export let minRows = 2;
	export let autosize = false;
	// this is helper for parent component to avoid render unecessary slot
	export let parentSlots: Partial<{ icon: boolean; rightSection: boolean }> = {
		icon: true,
		rightSection: true
	};
	$: isRequired = typeof $inputContext.required == 'boolean' ? $inputContext.required : required;
	let rows = 2;
	$: {
		if (autosize) {
			const valueRow = value.split(`\n`).length;
			if (maxRows && valueRow > maxRows) {
				rows = maxRows;
			} else if (valueRow < minRows || valueRow == 1) {
				rows = minRows;
			} else {
				rows = valueRow;
			}
		} else {
			rows = minRows;
		}
	}
	let inputClassNames = classes.input ? [classes.input] : [];
	$: if ($$slots.icon && parentSlots.icon && classes.withIcon) {
		inputClassNames.push(classes.withIcon);
	}
	$: if (disabled && classes.disabled) {
		inputClassNames.push(classes.disabled);
	}
	$: if (error && classes.invalid) {
		inputClassNames.push(classes.invalid);
	}
</script>

<InputWrapper
	{required}
	size={$inputContext.size || size}
	{error}
	{inputWrapperOrder}
	{withAsterisk}
	{label}
	{description}
	classes={{
		root: extendClassName('textarea-wrapper', classes.wrapper),
		description: extendClassName('textarea-description', classes.description),
		required: extendClassName('textarea-required', classes.required),
		label: extendClassName('textarea-label', classes.label),
		error: extendClassName('textarea-error', classes.error)
	}}
>
	<div
		class="[ input ] [ textarea ] [ {classes.root || ''} ]"
		data-variant={variant}
		data-size={$inputContext.size || size}
		data-disabled={disabled}
		data-right-section={$$slots.rightSection && parentSlots.rightSection}
		data-icon={$$slots.icon && parentSlots.icon}
		data-invalid={!!error}
		data-autosize={autosize}
	>
		{#if $$slots.icon && parentSlots.icon}
			<div class="[ input-icon ] [ textarea-icon ] [ {classes.icon || ''} ]">
				<slot name="icon" />
			</div>
		{/if}
		<textarea
			class="[ input-input ] [ textarea-input ] [ {inputClassNames.join(' ')} ]"
			bind:value
			{placeholder}
			use:useTextArea
			bind:this={refTextArea}
			required={isRequired}
			{disabled}
			on:focus
			on:blur
			on:keyup
			on:input
			on:change
			on:mousedown
			{rows}
			{...$$restProps}
		/>
		{#if $$slots.rightSection && parentSlots.rightSection}
			<div
				class="[ input-right-section ] [ textarea-right-section ] [ {classes.rightSection || ''} ]"
			>
				<slot name="rightSection" />
			</div>
		{/if}
	</div>
</InputWrapper>
