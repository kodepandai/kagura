import kagura from "kagura-ui"
import bootstrap from "@kagura-ui/preset-bootstrap"
import mantine from "@kagura-ui/preset-mantine"
/** @type {import('tailwindcss').Config} */

export default {
  content: ["./src/**/*.svelte", "./node_modules/@kagura-ui/**/{Button,Input}.svelte"],
  theme: {
    extend: {
    },
  },
  plugins: [
    // multi preset example
    kagura([
      {
        preset: mantine({
          colors: {
            background: {
              custom: "#ff0000"
            }
          },
          components: {
            button: {
              root: {
                "&-custom": {
                  "@apply bg-custom text-white": {}
                }
              }
            }
          }
        }), scope: "mantine"
      },
      {
        preset: bootstrap({
          colors: {
            background: {
              custom: "#004400"
            },
          },
          components: {
            button: {
              root: {
                "&-custom": {
                  "@apply bg-custom text-white": {}
                }
              }
            }
          }
        }), scope: "bootstrap"
      }
    ]),
    // single preset example
    // kagura({ preset: bootstrap })
  ],
};
