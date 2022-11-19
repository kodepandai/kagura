<script lang="ts">
	import type { Colors } from 'kagura-ui/contracts/tailwind';
	export let color: keyof Colors = 'primary';
</script>

<button class="button button-{color}">
	<div class="button-inner">
		<span class="button-label"><slot /></span>
	</div>
</button>
