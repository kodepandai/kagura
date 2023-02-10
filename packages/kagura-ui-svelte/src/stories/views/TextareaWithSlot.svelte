<script lang="ts">
	import Textarea from '../../lib/Textarea.svelte';
	import Icon from '@iconify/svelte';
</script>

<!-- slot cannot appear inside if statement
svelte didn't support  conditional slot yet 
see https://github.com/sveltejs/svelte/issues/5604
so this is just workaround -->
{#if $$props.withIcon && $$props.withRightSection}
	<Textarea {...$$restProps}>
		<Icon icon="tabler:at" slot="icon" />
		<Icon icon="tabler:alert-circle" slot="rightSection" class="opacity-40 w-1/2 h-1/2" />
	</Textarea>
{:else if $$props.withIcon}
	<Textarea {...$$restProps}>
		<Icon icon="tabler:at" slot="icon" />
	</Textarea>
{:else if $$props.withRightSection}
	<Textarea {...$$restProps}>
		<Icon icon="tabler:alert-circle" class="opacity-40 w-1/2 h-1/2" slot="rightSection" />
	</Textarea>
{:else}
	<Textarea {...$$restProps} />
{/if}
