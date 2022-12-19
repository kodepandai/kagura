<script lang="ts">
  import { Input } from "@kagura-ui/svelte";
  import type { InputVariant } from "kagura-ui/contracts/input";
  import { sizes } from "kagura-ui/utils";
  let preset = "mantine";
  let placeholder = "Please input your name";
  let variant: InputVariant = "default";
  let sizeRange: number = 2;
  let disabled = false;
  let invalid = false;
  $: size = sizes[sizeRange - 1];
</script>

<div class="container mx-auto p-4 flex flex-col md:flex-row {preset}">
  <div class="flex justify-center items-center border rounded p-4 flex-grow">
    <Input
      {placeholder}
      class="w-full max-w-md"
      {variant}
      {size}
      {disabled}
      {invalid}
    />
  </div>

  <div class="flex flex-col border rounded md:w-[250px] p-4">
    <div class="mb-4">
      <label for="theme">Preset</label>

      <select bind:value={preset}>
        <option value="bootstrap">Bootstrap</option>
        <option value="mantine">Mantine</option>
      </select>
    </div>

    <div class="mb-4">
      <label for="theme">Variant</label>

      <select bind:value={variant}>
        <option value="default">default</option>
        <option value="filled">filled</option>
      </select>
    </div>

    <div class="mb-4">
      <label for="theme">Placeholder</label>

      <Input bind:value={placeholder} />
    </div>

    <div class="mb-4">
      <label for="theme">Size</label>
      <input type="range" min="1" max="5" bind:value={sizeRange} />
      <span>{size}</span>
    </div>

    <div class="mb-4">
      <label for="theme">Disabled</label>
      <input type="checkbox" bind:checked={disabled} />
    </div>

    <div class="mb-4">
      <label for="theme">Invalid</label>
      <input type="checkbox" bind:checked={invalid} />
    </div>
  </div>
</div>
