import { fileURLToPath } from "node:url";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactCompiler: true,
  turbopack: {
    // Prevent Next/Turbopack from selecting a parent directory when multiple lockfiles exist.
    root: fileURLToPath(new URL(".", import.meta.url)),
  },
};

export default nextConfig;

