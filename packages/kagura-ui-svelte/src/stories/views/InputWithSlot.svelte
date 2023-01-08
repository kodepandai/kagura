<script lang="ts">
	import Icon from '@iconify/svelte';
	import Input from '../../lib/Input.svelte';
</script>

<!-- slot cannot appear inside if statement
svelte didn't support  conditional slot yet 
see https://github.com/sveltejs/svelte/issues/5604
so this is just workaround -->
{#if $$props.withIcon && $$props.withRightSection}
	<Input {...$$restProps}>
		<Icon icon="tabler:at" slot="icon" />
		<Icon icon="tabler:alert-circle" slot="rightSection" class="opacity-40 w-1/2 h-1/2" />
	</Input>
{:else if $$props.withIcon}
	<Input {...$$restProps}>
		<Icon icon="tabler:at" slot="icon" />
	</Input>
{:else if $$props.withRightSection}
	<Input {...$$restProps}>
		<Icon icon="tabler:alert-circle" class="opacity-40 w-1/2 h-1/2" slot="rightSection" />
	</Input>
{:else}
	<Input {...$$restProps} />
{/if}
