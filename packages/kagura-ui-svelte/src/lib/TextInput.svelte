<script lang="ts" context="module">
	export type TextInputClasses = BaseInputClasses;
</script>

<script lang="ts">
	import type { ComponentProps } from 'svelte';
	import BaseInput, { type BaseInputClasses } from './BaseInput.svelte';
	import { extendClassName } from './utils/className';
	export let classes: Partial<TextInputClasses> = {};
	type $$Props = ComponentProps<BaseInput>;
</script>

<BaseInput
	type="text"
	classes={{
		root: extendClassName('text-input', classes.root),
		wrapper: extendClassName('text-input-wrapper', classes.wrapper),
		label: extendClassName('text-input-label', classes.label),
		description: extendClassName('text-input-description', classes.description),
		error: extendClassName('text-input-error', classes.error),
		required: extendClassName('text-input-required', classes.required),
		rightSection: extendClassName('text-input-right-section', classes.rightSection),
		icon: extendClassName('text-input-icon', classes.icon),
		input: extendClassName('text-input-input', classes.input),
		withIcon: classes.withIcon,
		disabled: classes.disabled,
		invalid: classes.invalid
	}}
	{...$$restProps}
/>
