<script lang="ts">
	import type { ButtonVariant, ButtonColor } from 'kagura-ui/contracts/button';
	export let color: ButtonColor = 'primary';
	export let variant: ButtonVariant = 'filled';
</script>

<button
	class="button button-{color} button-{variant}{$$props.class ? '' + $$props.class : ''}"
	{...$$restProps}
>
	<div class="button-inner">
		<span class="button-label"><slot /></span>
	</div>
</button>
