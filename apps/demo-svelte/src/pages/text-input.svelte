<script lang="ts">
  import { sizes } from "kagura-ui/utils";
  import { TextInput, Input } from "@kagura-ui/svelte";
  let preset = "mantine";
  let sizeRange: number = 2;
  let withAsterisk = false;
  let label = "Username or email";
  let description = "Please input your username or email to login";
  let error = "";
  let placeholder = "Your account";
  $: size = sizes[sizeRange - 1];
</script>

<div class="container mx-auto p-4 flex flex-col md:flex-row {preset}">
  <div class="flex justify-center items-center border rounded p-4 flex-grow">
    <TextInput
      {size}
      {description}
      {withAsterisk}
      {error}
      {label}
      {placeholder}
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
      <label for="theme">With asterisk</label>
      <input type="checkbox" bind:checked={withAsterisk} />
    </div>

    <div class="mb-4">
      <TextInput label="Label" bind:value={label} />
    </div>

    <div class="mb-4">
      <TextInput label="Placeholder" bind:value={placeholder} />
    </div>

    <div class="mb-4">
      <TextInput label="Description" bind:value={description} />
    </div>

    <div class="mb-4">
      <TextInput label="Error" bind:value={error} />
    </div>

    <div class="mb-4">
      <label for="theme">Size</label>
      <input type="range" min="1" max="5" bind:value={sizeRange} />
      <span>{size}</span>
    </div>
  </div>
</div>
