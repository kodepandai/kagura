import { bundleTs } from "@lunoxjs/build";
export default [
  ...bundleTs(["src/index.ts", "src/contracts/index.ts", "src/utils.ts"], {
    declaration: true,
  }),
];
