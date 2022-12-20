<script lang="ts">
	import type { Size } from 'kagura-ui/contracts/tailwind';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let size: Size = 'sm';
	let sharedSize = writable<Size>(size);
	export let label = '';
	export let description: string | undefined = undefined;
	export let withAsterisk: boolean | undefined = undefined;
	export let required = false;
	export let error: boolean | string = false;
	$: hasAsterisk = typeof withAsterisk == 'boolean' ? withAsterisk : required;
	$: hasError = !!error && typeof error !== 'boolean';
	setContext('input-context', {
		size: sharedSize
	});
	$: $sharedSize = size;
</script>

<div class="input-wrapper {$$props.class}">
	{#if label}
		<label class="input-wrapper-label" for={$$props.for}
			>{label}
			{#if hasAsterisk}
				<span aria-hidden="true" class="input-wrapper-required"> *</span>
			{/if}
		</label>
	{/if}
	{#if description}
		<div class="input-wrapper-description">{description}</div>
	{/if}
	<slot />
	{#if hasError}
		<div class="input-wrapper-error">{error}</div>
	{/if}
</div>
