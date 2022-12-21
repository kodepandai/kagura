<script lang="ts">
	import type { InputVariant } from 'kagura-ui/contracts/input';
	import type { Size } from 'kagura-ui/contracts/tailwind';
	import Input from './input';

	export let required = false;
	export let size: Size = 'sm';
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
	export let value = '';
	export let variant: InputVariant = 'default';
	export let disabled = false;
	export let placeholder = '';
</script>

<Input.Wrapper {required} {size} {error} {inputWrapperOrder} {withAsterisk} {label} {description}>
	<Input bind:value {variant} {disabled} {placeholder} invalid={!!error} />
</Input.Wrapper>
