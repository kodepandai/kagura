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
            base: {
              custom: "#ff0000"
            }
          },
          components: {
            button: {
              root: {
                "&-custom": {
                  "@apply rounded-lg": {}
                },
              }
            }
          }
        }), scope: "mantine"
      },
      {
        preset: bootstrap({
          colors: {
            base: {
              custom: "#004400"
            },
          },
          components: {
            button: {
              root: {
                "&-custom": {
                  "@apply border-black rounded-none": {}
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
