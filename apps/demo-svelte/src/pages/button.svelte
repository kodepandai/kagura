<script lang="ts">
  import { Button } from "@kagura-ui/svelte";
  import type { ButtonVariant } from "kagura-ui/contracts/button";
  let preset = "bootstrap";
  let variant: ButtonVariant = "filled";
</script>

<div class="container mx-auto p-4 flex flex-col {preset}">
  <div class="mb-4">
    <label for="theme">Choose preset:</label>

    <select bind:value={preset}>
      <option value="bootstrap">Bootstrap</option>
      <option value="mantine">Mantine</option>
    </select>
  </div>
  <div class="mb-4">
    <label for="theme">Choose variant:</label>

    <select bind:value={variant}>
      <option value="filled">Filled</option>
      <option value="outline">Outline</option>
    </select>
  </div>
  <div class="demo">
    <Button {variant} color="primary">Primary</Button>
    <Button {variant} color="secondary">Secondary</Button>
    <Button {variant} color="success">Success</Button>
    <Button {variant} color="danger">Danger</Button>
    <Button {variant} color="warning">Warning</Button>
    <Button {variant} color="info">Info</Button>
    <Button {variant} color="dark">Dark</Button>
    <Button {variant} class="button-custom">Custom</Button>
  </div>
</div>

<style>
  :global(.demo > *) {
    margin-bottom: 0.2rem;
  }
</style>
