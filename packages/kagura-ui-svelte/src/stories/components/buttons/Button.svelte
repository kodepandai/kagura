<script lang="ts">
	import Button from '../../../lib/Button.svelte';
	export let slot = '';
</script>

<Button {...$$restProps}>
	{slot}
</Button>
