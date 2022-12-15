<script lang="ts">
  import { Button } from "@kagura-ui/svelte";
  import type { ButtonVariant } from "kagura-ui/contracts/button";
  import type { RequiredColors, Size } from "kagura-ui/contracts/tailwind";
  import { sizes } from "kagura-ui/utils";
  let preset = "mantine";
  let variant: ButtonVariant = "filled";
  let size: Size = "sm";
  type Color = keyof RequiredColors | "custom";
  let color: Color = "primary";
  const colors: Color[] = [
    "primary",
    "secondary",
    "success",
    "danger",
    "warning",
    "info",
    "dark",
    "custom",
  ];
</script>

<div class="container mx-auto p-4 flex flex-col md:flex-row {preset}">
  <div class="flex justify-center items-center min-h">
    <Button {variant} {color} {size} class="capitalize">{color}</Button>
  </div>
  <div class="mb-4">
    <label for="theme">Preset</label>

    <select bind:value={preset}>
      <option value="bootstrap">Bootstrap</option>
      <option value="mantine">Mantine</option>
    </select>
  </div>
  <div class="mb-4">
    <label for="theme">Color</label>

    <select bind:value={color}>
      {#each colors as color}
        <option value={color}>{color}</option>
      {/each}
    </select>
  </div>
  <div class="mb-4">
    <label for="theme">Variant</label>

    <select bind:value={variant}>
      <option value="filled">Filled</option>
      <option value="outline">Outline</option>
    </select>
  </div>
  <div class="mb-4">
    <label for="theme">Size</label>

    <select bind:value={size}>
      {#each sizes as size}
        <option value={size}>{size}</option>
      {/each}
    </select>
  </div>
</div>
