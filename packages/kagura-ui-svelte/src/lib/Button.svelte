<script lang="ts">
	import type { ButtonVariant, ButtonColor } from 'kagura-ui/contracts/button';
	import type { Size } from 'kagura-ui/contracts/tailwind';
	export let color: ButtonColor = 'primary';
	export let variant: ButtonVariant = 'filled';
	export let size: Size = 'sm';
</script>

<button
	class="button {$$props.class || ''}"
	on:click
	data-variant={variant}
	data-size={size}
	data-color={color}
>
	<div class="button-inner">
		<span class="button-label"><slot /></span>
	</div>
</button>
