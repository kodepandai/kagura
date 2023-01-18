<script lang="ts">
	import TextInput, { type TextInputClasses } from './TextInput.svelte';
	import { offset, flip } from '@floating-ui/dom';
	import { createFloatingActions } from 'svelte-floating-ui';
	export let classes: Partial<
		{
			root: string;
			itemWrapper: string;
			item: string;
		} & TextInputClasses
	> = {};
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
	let inputElement: HTMLInputElement;
	let dropdownVisible = false;
	let hoveredIndex = -1;
	let selectedIndex = -1;
	let displayValue = '';
	let value = '';
	const handleDropdownNavigation = (e: KeyboardEvent) => {
		switch (e.key) {
			case 'ArrowDown':
				if (hoveredIndex < data.length - 1) {
					hoveredIndex++;
				}
				break;
			case 'ArrowUp':
				if (hoveredIndex > 0) {
					hoveredIndex--;
				}
				break;
			case 'Enter':
				selectItem();
				inputElement.blur();
				break;

			default:
				break;
		}
	};
	const handleFocus = () => {
		hoveredIndex = selectedIndex;
		dropdownVisible = true;
	};
	const handleBlur = () => {
		dropdownVisible = false;
	};

	const selectItem = (e: MouseEvent) => {
		e.preventDefault(); // avoid focused on item element
		selectedIndex = hoveredIndex;
		displayValue = data[hoveredIndex].label;
		value = data[hoveredIndex].value;
		dropdownVisible = false;
		inputElement.focus(); // refocus select input
	};
</script>

<div class="[ select ] [ {classes.root || ''} ]">
	<input type="hidden" {value} />
	<TextInput
		type="select"
		{...$$restProps}
		useInput={floatingRef}
		bind:refInput={inputElement}
		on:focus={handleFocus}
		on:blur={handleBlur}
		on:keyup={handleDropdownNavigation}
		bind:value={displayValue}
		classes={{ input: classes.input, inputWrapper: classes.inputWrapper }}
		on:mousedown={() => (dropdownVisible = !dropdownVisible)}
	/>

	<!--  wrap with fixed position to avoid dropdown getting cropped when parent element has overflow-hidden -->
	<!-- but we need to calculate width of dropdown manually -->
	{#if dropdownVisible}
		<div style="position:fixed; width:{floatingWidth}px; z-index: 1000;">
			<div class="[ select-item-wrapper ] [ {classes.itemWrapper || ''} ]" use:floatingContent>
				{#each data as item, itemIndex}
					<div
						class="[ select-item ] [ {classes.item || ''} ]"
						data-hovered={itemIndex == hoveredIndex}
						data-selected={itemIndex == selectedIndex}
						on:mouseenter={() => (hoveredIndex = itemIndex)}
						on:keydown={handleDropdownNavigation}
						on:mousedown={selectItem}
					>
						{item.label}
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>
