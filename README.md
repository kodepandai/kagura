# Kagura UI Mono Repo

Ini adalah mono repo Kagura UI yang dibangun menggunakan pnpm workspace. Di dalam repo ini terdapat dua workspace utama yaitu folder `apps` dan folder `packages`. 
Folder `apps` berisi project - project demo Kagura UI. Sedangkan folder `packages` berisi packages - packages dari Kagura UI.

## Apa itu Kagura UI?
Kagura UI adalah plugin tailwindcss sekaligus universal tailwind component. Tujuan utama dari Kagura UI adalah untuk membuat web component yang terabstraksi dari berbagai jenis library frontend seperti reactjs, vue, svelte dan lain-lain.
Component Kagura UI dapat dipasangkan dengan preset - preset yang akan dikembangkan seperti preset bootstrap, material ui, mantine ui, dan lain-lain.

## Development
### Basic PNPM workspace command
Harap jalankan semua perintah di bawah ini di root folder repo ini.
- Install module untuk semua workspace:
```
pnpm install
```
- Menjalankan script untuk semua workspace
```
pnpm -r [command]
```
misal `pnpm -r build` untuk menjalankan script build di semua workspace.
- Menjalankan script untuk satu workspace
```
pnpm --filter [nama package] [command]
```
misal `pnpm --filter @kagura-ui/preset-bootstrap build`. Nama package bisa dilihat di `package.json` masing - masing package.

### Menjalankan Demo
Untuk saat ini baru tersedia satu demo yaitu demo component svelte. Untuk menjalankannya lakukan langkah - langkah berikut:
- pastikan `pnpm` terinstall. Jika belum maka install menggunakan perintah
```
npm install -g pnpm
```
- install semua dependency
```
pnpm install
```
- jalankan demo dalam mode development
```
pnpm dev:svelte
```
- server dev storybook akan jalan, silakan buka di web browser
