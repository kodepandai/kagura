<script lang="ts">
	import InputWrapper from '../lib/Input.Wrapper.svelte';
	import Input from '../lib/Input.svelte';
</script>

<InputWrapper {...$$restProps}>
	<Input placeholder="your email" />
</InputWrapper>
