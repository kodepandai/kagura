<script lang="ts">
  import { Button } from "@kagura-ui/svelte";
  import type { ButtonVariant } from "kagura-ui/contracts/button";
  import type { RequiredColors } from "kagura-ui/contracts/tailwind";
  import { sizes } from "kagura-ui/utils";
  let preset = "mantine";
  let variant: ButtonVariant = "filled";
  let sizeRange: number = 2;
  $: size = sizes[sizeRange - 1];
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
  <div
    class="flex justify-center items-center md:w-2/3 border rounded min-h-[10rem]"
  >
    <Button {variant} {color} {size} class="capitalize">{color}</Button>
  </div>
  <div class="flex flex-col border rounded flex-grow p-4">
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
      <input type="range" min="1" max="5" bind:value={sizeRange} />
      <span>{size}</span>
    </div>
  </div>
</div>
