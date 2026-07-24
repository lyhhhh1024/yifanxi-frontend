import { cpSync, existsSync, rmSync } from "node:fs";
import { join } from "node:path";
import { execSync } from "node:child_process";

const rootDir = process.cwd();
const frontendDir = join(rootDir, "frontend");
const frontendDist = join(frontendDir, "dist");
const rootDist = join(rootDir, "dist");

execSync("npm install", {
  cwd: frontendDir,
  stdio: "inherit",
});

execSync("npm run build", {
  cwd: frontendDir,
  stdio: "inherit",
});

if (!existsSync(frontendDist)) {
  throw new Error("frontend/dist was not generated.");
}

rmSync(rootDist, { recursive: true, force: true });
cpSync(frontendDist, rootDist, { recursive: true });

console.log("Copied frontend/dist to root dist for Cloudflare Pages.");
