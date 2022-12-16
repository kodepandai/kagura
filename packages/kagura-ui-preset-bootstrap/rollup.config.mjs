import dts from "rollup-plugin-dts"
import esbuild from "rollup-plugin-esbuild"

const bundle = (name) => ([
  {
    input: `src/${name}.ts`,
    plugins: [esbuild()],
    output: [
      {
        file: `dist/${name}.cjs`,
        format: 'cjs',
        exports: "default"
      },
      {
        file: `dist/${name}.mjs`,
        format: 'es',
      },
    ],
  },
  {
    input: `src/${name}.ts`,
    plugins: [dts()],
    output: {
      file: `dist/${name}.d.ts`,
    },
  },
])

export default [
  ...bundle("index"),
]
