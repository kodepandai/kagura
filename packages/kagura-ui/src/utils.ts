const createColors = (colors, prefix) => {
  const entries = Object.keys(colors).map(key => ([key, `var(--tw-kagura-${prefix}-${key})`]))
  return Object.fromEntries(entries)
}
export { createColors }
