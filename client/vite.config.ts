import * as dotenv from "dotenv"

import { defineConfig } from "vitest/config"
import react from "@vitejs/plugin-react"

dotenv.config({ path: "../.env" })

export default defineConfig({
    plugins: [react()],
    build: {
        target: "esnext",
        outDir: process.env.BUILD_PATH || "dist",
        assetsDir: "assets",
        emptyOutDir: true,
    },
    server: {
        host: "127.0.0.1",
        port: 8000,
    },
    define: {
        "import.meta.vitest": false,
    },
    test: {
        includeSource: ["tests/**/*.ts"],
        globals: true,
        environment: "happy-dom",
    },
})
