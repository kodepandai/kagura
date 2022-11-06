const plugin = require("tailwindcss/plugin");
const kagura = plugin(({ addComponents }) => {
  addComponents({
    ".btn": {
      "@apply rounded px-2 py-1": {},
    },
    ".btn-primary": {
      "@apply bg-blue-600": {},
    },
  });
});
module.exports = kagura;
