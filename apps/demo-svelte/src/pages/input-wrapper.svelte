<script lang="ts">
  import { Input } from "@kagura-ui/svelte";
  import { sizes } from "kagura-ui/utils";
  let preset = "mantine";
  let sizeRange: number = 2;
  let withAsterisk = false;
  let label = "Username or email";
  let description = "Please input your username or email to login";
  let error = "Invalid credentials";
  $: size = sizes[sizeRange - 1];
</script>

<div class="container mx-auto p-4 flex flex-col md:flex-row {preset}">
  <div class="flex justify-center items-center border rounded p-4 flex-grow">
    <Input.Wrapper {label} {withAsterisk} {description} {error} {size}>
      <Input placeholder="Type here" />
    </Input.Wrapper>
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
      <Input.Wrapper label="Label">
        <Input bind:value={label} />
      </Input.Wrapper>
    </div>

    <div class="mb-4">
      <Input.Wrapper label="Description">
        <Input bind:value={description} />
      </Input.Wrapper>
    </div>

    <div class="mb-4">
      <Input.Wrapper label="Error">
        <Input bind:value={error} />
      </Input.Wrapper>
    </div>

    <div class="mb-4">
      <label for="theme">Size</label>
      <input type="range" min="1" max="5" bind:value={sizeRange} />
      <span>{size}</span>
    </div>
  </div>
</div>
