<script lang="ts">
	import type { InputVariant } from 'kagura-ui/contracts/input';
	import type { Size } from 'kagura-ui/contracts/tailwind';
	export let placeholder = '';
	export let value = '';
	export let variant: InputVariant = 'default';
	export let size: Size = 'sm';
</script>

<div class="input input-{variant} input-{size} {$$props.class}">
	<input class="input-input" {placeholder} bind:value />
</div>
