<script lang="ts">
  import { Button } from "@kagura-ui/svelte";
  let preset = "none";
</script>

<div class="container mx-auto p-4 flex flex-col {preset}">
  <div class="mb-4">
    <label for="theme">Choose a preset:</label>

    <select bind:value={preset}>
      <option value="bootstrap">Bootstrap</option>
      <option value="mantine">Mantine</option>
      <option value="none">None</option>
    </select>
  </div>
  <div class="demo">
    <Button color="primary">Primary</Button>
    <Button color="secondary">Secondary</Button>
    <Button color="success">Success</Button>
    <Button color="danger">Danger</Button>
    <Button color="warning">Warning</Button>
    <Button color="info">Info</Button>
    <Button color="light">Light</Button>
    <Button color="dark">Dark</Button>
  </div>
</div>

<style>
  :global(.demo > *) {
    margin-bottom: 0.2rem;
  }
</style>
