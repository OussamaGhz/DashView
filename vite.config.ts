import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// must add paths and a base url in the tsconfig (see tsconfig.json)

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
});
