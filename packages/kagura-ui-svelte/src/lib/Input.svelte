<script lang="ts" context="module">
	export interface Classes {
		root: string;
		input: string;
		rightSection: string;
	}
	export const useInputClasses = (classes: Partial<Classes>) => ({
		root: classes.root,
		input: classes.input,
		rightSection: classes.rightSection
	});
</script>

<script lang="ts">
	import type { InputVariant } from 'kagura-ui/contracts/input';
	import type { Size } from 'kagura-ui/contracts/tailwind';
	import { getContext, SvelteComponent } from 'svelte';
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
	export let rightSection: SvelteComponent;

	$: isRequired = typeof $inputContext.required == 'boolean' ? $inputContext.required : required;
</script>

<div
	class="[ input ] [ {classes.root || ''} ]"
	data-variant={variant}
	data-size={$inputContext.size || size}
	data-disabled={disabled}
	data-invalid={invalid}
>
	<input
		class="[ input-input ] [ {classes.input || ''} ]"
		{placeholder}
		bind:value
		{disabled}
		required={isRequired}
	/>
	{#if rightSection}
		<div class="[ input-rightSection ] [ {classes.rightSection || ''} ]">
			<svelte:component this={rightSection} />
		</div>
	{/if}
</div>
