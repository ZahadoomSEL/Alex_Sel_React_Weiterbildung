import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const ReactCompilerConfig = {}; // Gibt noch keine Dokumentation

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [["babel-plugin-react-compiler", ReactCompilerConfig]],
      },
    }),
  ],
  build: {
    baseDirectory: "/dist",
  },
  /*   server: {
    open: true,
  }, */
});
