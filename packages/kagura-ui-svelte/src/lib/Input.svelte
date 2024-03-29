<script lang="ts" context="module">
	export interface InputClasses {
		root: string;
		input: string;
		rightSection: string;
		icon: string;
		withIcon: string;
		disabled: string;
		invalid: string;
	}
</script>

<script lang="ts">
	import type { InputVariant, Size } from '@kagura-ui/core/contracts';
	import { getContext } from 'svelte';
	import { writable, type Writable } from 'svelte/store';
	export let placeholder = '';
	export let value = '';
	export let variant: InputVariant = 'default';
	const inputContext =
		getContext<Writable<{ size: Size; required: boolean }>>('input-context') || writable({});
	export let size: Size = 'md';
	export let disabled = false;
	export let invalid = false;
	export let required = false;
	export let classes: Partial<InputClasses> = {};
	export let useInput: (node: HTMLInputElement) => void = () => {
		//pass
	};
	export let refInput: HTMLInputElement | undefined = undefined;

	// this is helper for parent component to avoid render unecessary slot
	export let parentSlots: Partial<{ icon: boolean; rightSection: boolean }> = {
		icon: true,
		rightSection: true
	};

	$: isRequired = typeof $inputContext.required == 'boolean' ? $inputContext.required : required;
	let inputClassNames = classes.input ? [classes.input] : [];
	$: if ($$slots.icon && parentSlots.icon && classes.withIcon) {
		inputClassNames.push(classes.withIcon);
	}
	$: if (disabled && classes.disabled) {
		inputClassNames.push(classes.disabled);
	}
	$: if (invalid && classes.invalid) {
		inputClassNames.push(classes.invalid);
	}
</script>

<div
	class="[ input ] [ {classes.root || ''} ]"
	data-variant={variant}
	data-size={$inputContext.size || size}
	data-disabled={disabled}
	data-invalid={invalid}
	data-right-section={$$slots.rightSection && parentSlots.rightSection}
	data-icon={$$slots.icon && parentSlots.icon}
>
	{#if $$slots.icon && parentSlots.icon}
		<div class="[ input-icon ] [ {classes.icon || ''} ]">
			<slot name="icon" />
		</div>
	{/if}
	<input
		use:useInput
		bind:this={refInput}
		class="[ input-input ] [ {inputClassNames.join(' ')} ]"
		{placeholder}
		bind:value
		{disabled}
		required={isRequired}
		on:focus
		on:blur
		on:keyup
		on:input
		on:mousedown
		on:change
		{...$$restProps}
	/>
	{#if $$slots.rightSection && parentSlots.rightSection}
		<div class="[ input-right-section ] [ {classes.rightSection || ''} ]">
			<slot name="rightSection" />
		</div>
	{/if}
	<slot />
</div>
