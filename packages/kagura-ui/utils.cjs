const createColors = (colors, prefix) => {
  entries = Object.keys(colors).map(key => ([key, `var(--tw-kagura-${prefix}-${key})`]))
  return Object.fromEntries(entries)
}
module.exports = { createColors }
