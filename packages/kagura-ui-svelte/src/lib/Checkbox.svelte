<script lang="ts" context="module">
	import type { InputClasses } from './Input.svelte';

	export interface CheckboxClasses
		extends Omit<InputClasses, 'rightSection' | 'withIcon' | 'invalid'> {
		wrapper: string;
		labelWrapper: string;
		label: string;
		defaultIcon: string;
	}
</script>

<script lang="ts">
	import type { ColorKeys, Size } from '@kagura-ui/core/contracts';

	import { randomId } from './utils/generator';
	export let id: string = randomId();
	export let value = '';
	export let checked: boolean;
	export let indeterminate: boolean;
	export let label = '';
	export let required = false;
	export let disabled = false;
	export let size: Size = 'md';
	export let color: ColorKeys = 'primary';
	export let classes: Partial<CheckboxClasses> = {};
</script>

<div
	class="[ checkbox ] [ {classes.root || ''} ]"
	data-size={size}
	data-color={color}
	data-disabled={disabled}
	data-checked={checked}
	data-indeterminate={indeterminate}
>
	<div class="[ checkbox-wrapper ] [ {classes.wrapper || ''} ]">
		<input
			class="[ checkbox-input ] [ {classes.input || ''} ]"
			type="checkbox"
			{id}
			{value}
			{disabled}
			bind:checked
			bind:indeterminate
			{required}
		/>
		<div class="[ checkbox-icon ] [ {classes.icon || ''} ]">
			<slot name="icon">
				<i class="[ checkbox-default-icon ] [ {classes.defaultIcon || ''} ]" />
			</slot>
		</div>
	</div>
	{#if label}
		<div class="[ checkbox-label-wrapper ] [ {classes.labelWrapper || ''} ]">
			<label class="[ checkbox-label ] [ {classes.label || ''} ]" for={id}>{label}</label>
		</div>
	{/if}
</div>
