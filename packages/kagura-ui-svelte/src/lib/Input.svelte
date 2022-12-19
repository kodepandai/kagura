<script lang="ts">
	import type { InputVariant } from 'kagura-ui/contracts/input';
	import type { Size } from 'kagura-ui/contracts/tailwind';
	export let placeholder = '';
	export let value = '';
	export let variant: InputVariant = 'default';
	export let size: Size = 'sm';
	export let disabled = false;
</script>

<div class="input input-{variant} input-{size} {$$props.class}" class:input-disabled={disabled}>
	<input class="input-input" {placeholder} bind:value {disabled} />
</div>
