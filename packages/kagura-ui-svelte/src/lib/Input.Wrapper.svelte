<script lang="ts" context="module">
	export interface Classes {
		wrapper: string;
		label: string;
		required: string;
		description: string;
		error: string;
	}
</script>

<script lang="ts">
	import type { Size } from 'kagura-ui/contracts/tailwind';
	import { setContext } from 'svelte';
	import { writable } from 'svelte/store';

	export let size: Size = 'md';
	export let required = false;
	let inputContext = writable<{ size: Size; required: boolean }>({
		size,
		required
	});
	export let label = '';
	export let description: string | undefined = undefined;
	export let withAsterisk: boolean | undefined = undefined;
	export let error: boolean | string = false;
	export let inputWrapperOrder: ('input' | 'description' | 'label' | 'error')[] = [
		'label',
		'description',
		'input',
		'error'
	];
	export let classes: Partial<Classes> = {};
	$: hasAsterisk = typeof withAsterisk == 'boolean' ? withAsterisk : required;
	$: hasError = !!error && typeof error !== 'boolean';
	setContext('input-context', inputContext);
	$: $inputContext = { size, required };
</script>

<div class="[ input-wrapper ] [ {classes.wrapper || ''} ]" data-size={size}>
	{#each inputWrapperOrder as part}
		{#if part == 'label'}
			{#if label}
				<label class="[ input-wrapper-label ] [ {classes.label || ''} ]" for={$$props.for}
					>{label}
					{#if hasAsterisk}
						<span
							aria-hidden="true"
							class="[ input-wrapper-required ] [ {classes.required || ''} ]"
						>
							*</span
						>
					{/if}
				</label>
			{/if}
		{:else if part == 'description'}
			{#if description}
				<div class="[ input-wrapper-description ] [ {classes.description || ''} ]">
					{description}
				</div>
			{/if}
		{:else if part == 'input'}
			<slot />
		{:else if part == 'error'}
			{#if hasError}
				<div class="[ input-wrapper-error ] [ {classes.error || ''} ]">{error}</div>
			{/if}
		{:else}{null}{/if}
	{/each}
</div>
