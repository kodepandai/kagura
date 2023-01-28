<script lang="ts">
	import Button from '../../lib/Button.svelte';
	import Group from '../../lib/Group.svelte';
</script>

<Group class="bg-gray-100" {...$$restProps}>
	<Button>1</Button>
	<Button>2</Button>
	<Button>3</Button>
</Group>
