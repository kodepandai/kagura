<script lang="ts">
	import type { InputVariant } from 'kagura-ui/contracts/input';
	export let placeholder = '';
	export let value = '';
	export let variant: InputVariant = 'default';
</script>

<div class="input input-{variant} {$$props.class}">
	<input class="input-input" {placeholder} bind:value />
</div>
