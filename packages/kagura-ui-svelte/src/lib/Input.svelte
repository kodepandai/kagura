<script lang="ts" context="module">
	export interface Classes {
		root: string;
		input: string;
		rightSection: string;
		icon: string;
	}
	export const useInputClasses = (classes: Partial<Classes>) => ({
		root: classes.root,
		input: classes.input,
		rightSection: classes.rightSection,
		icon: classes.icon
	});
</script>

<script lang="ts">
	import type { InputVariant } from 'kagura-ui/contracts/input';
	import type { Size } from 'kagura-ui/contracts/tailwind';
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
	export let classes: Partial<Classes> = {};
	export let refInput: () => void = () => {
		//pass
	};
	export let thisInput: any;

	// this is helper for parent component to avoid render unecessary slot
	export let parentSlots: Partial<{ icon: boolean; rightSection: boolean }> = {
		icon: true,
		rightSection: true
	};

	$: isRequired = typeof $inputContext.required == 'boolean' ? $inputContext.required : required;
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
		use:refInput
		bind:this={thisInput}
		class="[ input-input ] [ {classes.input || ''} ]"
		{placeholder}
		bind:value
		{disabled}
		required={isRequired}
	/>
	{#if $$slots.rightSection && parentSlots.rightSection}
		<div class="[ input-right-section ] [ {classes.rightSection || ''} ]">
			<slot name="rightSection" />
		</div>
	{/if}
</div>
