<script lang="ts" context="module">
	export interface SelectClasses extends BaseInputClasses {
		itemWrapper: string;
		item: string;
		itemHovered: string;
		itemSelected: string;
		defaultRightSection: string;
	}
</script>

<script lang="ts">
	import { offset, flip } from '@floating-ui/dom';
	import { createFloatingActions } from 'svelte-floating-ui';
	import type { Size } from '@kagura-ui/core/contracts';
	import { extendClassName } from './utils/className';
	import BaseInput, { type BaseInputClasses } from './BaseInput.svelte';
	export let classes: Partial<SelectClasses> = {};
	let data = [
		{ value: 'react', label: 'React' },
		{ value: 'ng', label: 'Angular' },
		{ value: 'svelte', label: 'Svelte' },
		{ value: 'vue', label: 'Vue' }
	];
	export let size: Size = 'md';

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

	const selectItem = (e?: MouseEvent) => {
		e?.preventDefault(); // avoid focused on item element
		selectedIndex = hoveredIndex;
		displayValue = data[hoveredIndex].label;
		value = data[hoveredIndex].value;
		dropdownVisible = false;
		inputElement.focus(); // refocus select input
	};
</script>

<BaseInput
	{size}
	type="text"
	{...$$restProps}
	useInput={floatingRef}
	bind:refInput={inputElement}
	on:focus={handleFocus}
	on:blur={handleBlur}
	on:keyup={handleDropdownNavigation}
	bind:value={displayValue}
	classes={{
		root: extendClassName('select', classes.root),
		wrapper: extendClassName('select-wrapper', classes.wrapper),
		label: extendClassName('select-label', classes.label),
		description: extendClassName('select-description', classes.description),
		error: extendClassName('select-error', classes.error),
		required: extendClassName('select-required', classes.required),
		rightSection: extendClassName('select-right-section', classes.rightSection),
		icon: extendClassName('select-icon', classes.icon),
		input: extendClassName('select-input', classes.input),
		withIcon: classes.withIcon,
		disabled: classes.disabled,
		invalid: classes.invalid
	}}
	on:mousedown={() => (dropdownVisible = !dropdownVisible)}
	parentSlots={{ ...$$slots, rightSection: true }}
>
	<input type="hidden" {value} />
	<slot name="rightSection" slot="rightSection">
		<i class="[ select-default-right-section ] [ {classes.defaultRightSection || ''} ]" />
	</slot>

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
</BaseInput>
