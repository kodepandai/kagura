<script lang="ts">
	import Button from '../lib/Button.svelte';
	export let slot = '';
	// button color theme
	export let color = 'primary';
</script>

<Button {color} {...$$restProps}>
	{slot}
</Button>
