<script lang="ts">
	import TextInput from './TextInput.svelte';
	import { offset, flip } from '@floating-ui/dom';
	import { createFloatingActions } from 'svelte-floating-ui';
	let data = [
		{ value: 'react', label: 'React' },
		{ value: 'ng', label: 'Angular' },
		{ value: 'svelte', label: 'Svelte' },
		{ value: 'vue', label: 'Vue' }
	];

	let floatingWidth = 0;
	const [floatingRef, floatingContent] = createFloatingActions({
		strategy: 'absolute',
		placement: 'bottom-start',
		onComputed() {
			floatingWidth = inputElement?.offsetWidth;
		},
		middleware: [offset(6), flip()]
	});
	let inputElement: HTMLElement;
</script>

<div class="[ select ] []">
	<TextInput {...$$restProps} refInput={floatingRef} bind:thisInput={inputElement} />
	<div style="position:fixed; width:{floatingWidth}px; z-index: 1000;">
		<div class="[ select-item-wrapper ] []" use:floatingContent>
			{#each data as item}
				<div class="[ select-item ] []">{item.label}</div>
			{/each}
		</div>
	</div>
</div>

<style>
	.select-item-wrapper {
		@apply border w-full p-1 rounded-sm shadow bg-white;
	}
	.select-item {
		@apply p-2 rounded cursor-pointer;
	}
	.select-item:hover {
		@apply bg-gray-100;
	}
	.select-item:focus-within {
		@apply bg-primary text-white;
	}
</style>
