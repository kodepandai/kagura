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

	$: isRequired = typeof $inputContext.required == 'boolean' ? $inputContext.required : required;
</script>

<div
	class="input {$$props.class || ''}"
	data-variant={variant}
	data-size={$inputContext.size || size}
	data-disabled={disabled}
	data-invalid={invalid}
>
	<input class="input-input" {placeholder} bind:value {disabled} required={isRequired} />
</div>
