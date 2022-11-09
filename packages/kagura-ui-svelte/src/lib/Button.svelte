<script lang="ts">
	export let variant: 'primary' | 'secondary' = 'primary';
	const variants = {
		primary: 'button-primary',
		secondary: 'button-secondary'
	};
</script>

<button class="button {variants[variant]} hover:button-hover">
	{variant}
</button>
