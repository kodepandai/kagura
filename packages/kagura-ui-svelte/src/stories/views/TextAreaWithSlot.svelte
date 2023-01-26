<script lang="ts">
	import TextArea from '../../lib/TextArea.svelte';
	import Icon from '@iconify/svelte';
</script>

<!-- slot cannot appear inside if statement
svelte didn't support  conditional slot yet 
see https://github.com/sveltejs/svelte/issues/5604
so this is just workaround -->
{#if $$props.withIcon && $$props.withRightSection}
	<TextArea {...$$restProps}>
		<Icon icon="tabler:at" slot="icon" />
		<Icon icon="tabler:alert-circle" slot="rightSection" class="opacity-40 w-1/2 h-1/2" />
	</TextArea>
{:else if $$props.withIcon}
	<TextArea {...$$restProps}>
		<Icon icon="tabler:at" slot="icon" />
	</TextArea>
{:else if $$props.withRightSection}
	<TextArea {...$$restProps}>
		<Icon icon="tabler:alert-circle" class="opacity-40 w-1/2 h-1/2" slot="rightSection" />
	</TextArea>
{:else}
	<TextArea {...$$restProps} />
{/if}
