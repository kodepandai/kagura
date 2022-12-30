<script lang="ts">
	export let preset = 'mantine';
	export let className = '';
</script>

<div class={preset + (className ? ' ' + className : '')}>
	<slot />
</div>
