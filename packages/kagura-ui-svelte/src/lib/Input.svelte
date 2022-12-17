<script lang="ts">
	export let placeholder = '';
	export let value = '';
</script>

<div class="input">
	<input class="input-input" {placeholder} bind:value />
</div>
