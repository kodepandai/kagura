<script lang="ts">
	import Icon from '@iconify/svelte';
	import TextInput from '../../lib/TextInput.svelte';
</script>

<!-- slot cannot appear inside if statement
svelte didn't support  conditional slot yet 
see https://github.com/sveltejs/svelte/issues/5604
so this is just workaround -->
{#if $$props.withIcon && $$props.withRightSection}
	<TextInput {...$$restProps}>
		<Icon icon="tabler:at" slot="icon" />
		<Icon icon="tabler:alert-circle" slot="rightSection" class="opacity-40 w-1/2 h-1/2" />
	</TextInput>
{:else if $$props.withIcon}
	<TextInput {...$$restProps}>
		<Icon icon="tabler:at" slot="icon" />
	</TextInput>
{:else if $$props.withRightSection}
	<TextInput {...$$restProps}>
		<Icon icon="tabler:alert-circle" class="opacity-40 w-1/2 h-1/2" slot="rightSection" />
	</TextInput>
{:else}
	<TextInput {...$$restProps} />
{/if}
