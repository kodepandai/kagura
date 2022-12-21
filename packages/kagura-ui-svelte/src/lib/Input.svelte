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
	export let size: Size = 'sm';
	export let disabled = false;
	export let invalid = false;
	export let required = false;

	$: isRequired = typeof $inputContext.required == 'boolean' ? $inputContext.required : required;
</script>

<div
	class="input input-{variant} input-{$inputContext.size || size} {$$props.class || ''}"
	class:input-disabled={disabled}
	class:input-invalid={invalid}
>
	<input class="input-input" {placeholder} bind:value {disabled} required={isRequired} />
</div>
