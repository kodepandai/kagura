<script lang="ts" context="module">
	export type GroupDirection = 'row' | 'column';
	export type GroupAlign = 'stretch' | 'start' | 'center' | 'end' | 'baseline';
	export type GroupJustify = 'start' | 'end' | 'center' | 'around' | 'evenly' | 'between';
</script>

<script lang="ts">
	import type { Size } from '@kagura-ui/core/contracts';

	export let direction: GroupDirection = 'row';
	const directions = {
		row: 'flex-row',
		column: 'flex-col'
	};
	export let spacing: Size = 'md';
	export let align: GroupAlign = 'stretch';
	const aligns = {
		stretch: 'items-stretch',
		start: 'items-start',
		center: 'items-center',
		end: 'items-end',
		baseline: 'items-baseline'
	};
	export let justify: GroupJustify = 'start';
	const justifies = {
		start: 'justify-start',
		end: 'justify-end',
		center: 'justify-center',
		around: 'justify-around',
		evenly: 'justify-evenly',
		between: 'justify-between'
	};
	export let wrap = true;
	export let grow = false;
	$: classes = [
		$$props.class,
		aligns[align],
		justifies[justify],
		directions[direction],
		wrap ? 'flex-wrap' : ''
	].join(' ');
</script>

<div
	class="[ group ] [ {classes} ]"
	data-direction={direction}
	data-spacing={spacing}
	data-grow={grow}
>
	<slot />
</div>
