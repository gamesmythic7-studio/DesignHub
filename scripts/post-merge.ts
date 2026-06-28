#!/usr/bin/env tsx
import { execSync } from "node:child_process";

console.log("Running post-merge setup...");

try {
  execSync("pnpm install --frozen-lockfile", { stdio: "inherit" });
  console.log("Dependencies installed.");
} catch {
  console.error("Failed to install dependencies.");
  process.exit(1);
}
