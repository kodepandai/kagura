<script lang="ts">
	import type { RequiredColors } from 'kagura-ui/contracts/tailwind';
	export let color: keyof RequiredColors = 'primary';

	const colors: Record<keyof RequiredColors, string> = {
		primary: 'button-primary',
		secondary: 'button-secondary',
		success: 'button-success',
		danger: 'button-danger',
		warning: 'button-warning',
		info: 'button-info',
		light: 'button-light',
		dark: 'button-dark'
	};
</script>

<button class="button {colors[color]}">
	<div class="button-inner">
		<span class="button-label"><slot /></span>
	</div>
</button>
