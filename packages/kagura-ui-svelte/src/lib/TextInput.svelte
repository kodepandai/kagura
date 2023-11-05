<script lang="ts" context="module">
	export type TextInputClasses = BaseInputClasses;
</script>

<script lang="ts">
	import { getContext, type ComponentProps } from 'svelte';
	import BaseInput, { type BaseInputClasses } from './BaseInput.svelte';
	import { extendClassName } from './utils/className';
	import { writable, type Writable } from 'svelte/store';
	import type { Size } from '@kagura-ui/core/contracts';
	export let classes: Partial<TextInputClasses> = {};
	export let value = '';
	const inputContext =
		getContext<Writable<{ size: Size; required: boolean }>>('input-context') || writable({});
	type $$Props = ComponentProps<BaseInput>;
</script>

<BaseInput
	type="text"
	bind:value
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
	parentSlots={$$slots}
	size={$inputContext.size || $$props.size}
	{...$$restProps}
>
	<slot name="icon" slot="icon" />
	<slot name="rightSection" slot="rightSection" />
	<slot />
</BaseInput>
