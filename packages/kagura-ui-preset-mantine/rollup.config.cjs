const dts = require("rollup-plugin-dts")
const esbuild = require("rollup-plugin-esbuild")

const name = require('./package.json').main.replace(/\.cjs$/, '')

const bundle = config => ({
  ...config,
  input: 'src/index.ts',
})

module.exports = [
  bundle({
    plugins: [esbuild.default()],
    output: [
      {
        file: `${name}.cjs`,
        format: 'cjs',
        sourcemap: true,
      },
      {
        file: `${name}.mjs`,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts.default()],
    output: {
      file: `${name}.d.ts`,
      format: 'es',
    },
  }),
]
