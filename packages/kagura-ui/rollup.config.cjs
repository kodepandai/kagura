const dts = require("rollup-plugin-dts")
const esbuild = require("rollup-plugin-esbuild")

const bundle = (name) => ([
  {
    input: `src/${name}.ts`,
    plugins: [esbuild.default()],
    output: [
      {
        file: `dist/${name}.cjs`,
        format: 'cjs',
      },
      {
        file: `dist/${name}.mjs`,
        format: 'es',
      },
    ],
  },
  {
    input: `src/${name}.ts`,
    plugins: [dts.default()],
    output: {
      file: `dist/${name}.d.ts`,
      format: 'es',
    },
  },
])

module.exports = [
  ...bundle("index"),
  ...bundle("utils"),
]
