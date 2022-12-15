<script lang="ts">
	import type { ButtonVariant, ButtonColor } from 'kagura-ui/contracts/button';
	import type { Size } from 'kagura-ui/contracts/tailwind';
	export let color: ButtonColor = 'primary';
	export let variant: ButtonVariant = 'filled';
	export let size: Size = 'sm';
</script>

<button
	class="button button-{color} button-{size} button-{variant}{$$props.class
		? ' ' + $$props.class
		: ''}"
	on:click
>
	<div class="button-inner">
		<span class="button-label"><slot /></span>
	</div>
</button>
