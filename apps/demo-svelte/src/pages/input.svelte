<script lang="ts">
  import { Input } from "@kagura-ui/svelte";
  let preset = "mantine";
  let placeholder = "Please input your name";
</script>

<div class="container mx-auto p-4 flex flex-col md:flex-row {preset}">
  <div class="flex justify-center items-center md:w-2/3 border rounded p-4">
    <Input {placeholder} />
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
      <label for="theme">Placeholder</label>

      <Input bind:value={placeholder} />
    </div>
  </div>
</div>
