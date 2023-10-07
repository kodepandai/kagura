<script lang="ts">
	import type { ButtonVariant, Size, ColorKeys } from '@kagura-ui/core/contracts';
	export let color: ColorKeys = 'primary';
	export let variant: ButtonVariant = 'filled';
	export let size: Size = 'md';
	interface Classes {
		root: string;
		inner: string;
		label: string;
	}
	export let classes: Partial<Classes> = {};
</script>

<button
	class="[ button ] [ {classes.root || ''} ]"
	on:click
	data-variant={variant}
	data-size={size}
	data-color={color}
>
	<div class="[ button-inner ] [ {classes.inner || ''} ]">
		<span class="[ button-label ] [ {classes.label || ''} ]"><slot /></span>
	</div>
</button>
