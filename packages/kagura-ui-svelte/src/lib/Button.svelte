<script lang="ts">
	export let color: 'primary' | 'secondary' = 'primary';
	const colors = {
		primary: 'button-primary',
		secondary: 'button-secondary'
	};
</script>

<button class="button {colors[color]}">
	<div class="button-inner">
		<span class="button-label"><slot /></span>
	</div>
</button>
