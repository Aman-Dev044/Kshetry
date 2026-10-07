/**
 * Runs the Next.js server on exactly the port named in `.env`.
 *
 *   node scripts/serve.mjs dev     # next dev
 *   node scripts/serve.mjs start   # next start
 *
 * Next does not read PORT or HOST from .env — it resolves both before env
 * files load — and when its chosen port is busy it quietly moves to the next
 * one. Both behaviours are wrong here: the frontend must be on one port, and
 * on a server it must bind every interface so the machine's own IP serves it.
 * So we read both values ourselves, refuse to start if the port is taken, and
 * pass them to Next explicitly.
 */
import { spawn } from "node:child_process";
import { createServer } from "node:net";
import { existsSync, readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const DEFAULT_PORT = 4142;
/** Bind every interface, so the server answers on its own IP, not just localhost. */
const DEFAULT_HOST = "0.0.0.0";

/** Minimal KEY=VALUE reader — no dependency, and .env here holds no secrets. */
function readEnvFile(name) {
  const path = join(ROOT, name);
  if (!existsSync(path)) return {};
  const out = {};
  for (const line of readFileSync(path, "utf8").split(/\r?\n/)) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eq = trimmed.indexOf("=");
    if (eq < 1) continue;
    out[trimmed.slice(0, eq).trim()] = trimmed
      .slice(eq + 1)
      .trim()
      .replace(/^["']|["']$/g, "");
  }
  return out;
}

/** Precedence: a real environment variable, then .env.local, then .env. */
function fromEnv(key) {
  return process.env[key] ?? readEnvFile(".env.local")[key] ?? readEnvFile(".env")[key];
}

function resolvePort() {
  const raw = fromEnv("PORT");
  const port = Number(raw ?? DEFAULT_PORT);
  if (!Number.isInteger(port) || port < 1 || port > 65535) {
    console.error(`\n  Invalid PORT: ${raw}\n  Set a number between 1 and 65535 in .env.\n`);
    process.exit(1);
  }
  return port;
}

function resolveHost() {
  return (fromEnv("HOST") || DEFAULT_HOST).trim();
}

function canBind(port, host) {
  return new Promise((resolve) => {
    const probe = createServer();
    probe.once("error", () => resolve(false));
    probe.once("listening", () => probe.close(() => resolve(true)));
    probe.listen(port, host);
  });
}

/**
 * Probe exactly what Next will bind. For a wildcard host, check both address
 * families: a server already holding `::` leaves the IPv4 probe free and would
 * slip past a single-family check.
 */
async function isFree(port, host) {
  const hosts = host === "0.0.0.0" || host === "::" ? ["0.0.0.0", "::"] : [host];
  for (const h of hosts) {
    if (!(await canBind(port, h))) return false;
  }
  return true;
}

const mode = process.argv[2];
if (mode !== "dev" && mode !== "start") {
  console.error("usage: node scripts/serve.mjs <dev|start>");
  process.exit(1);
}

const port = resolvePort();
const host = resolveHost();

if (!(await isFree(port, host))) {
  console.error(
    `\n  Port ${port} is already in use.\n\n` +
      `  This project runs on ${port} only, so nothing was started.\n` +
      `  Free the port and try again:\n\n` +
      `    Windows   netstat -ano | findstr :${port}   then  taskkill /PID <pid> /F\n` +
      `    macOS/Linux   lsof -ti:${port} | xargs kill\n`,
  );
  process.exit(1);
}

// Run Next's CLI entry with this same Node binary. Spawning the `next` shim
// instead would mean `next.cmd` on Windows, which Node refuses to spawn
// without a shell.
const cli = join(ROOT, "node_modules", "next", "dist", "bin", "next");
if (!existsSync(cli)) {
  console.error("\n  Next.js is not installed. Run `npm install` first.\n");
  process.exit(1);
}

const next = spawn(process.execPath, [cli, mode, "-p", String(port), "-H", host], {
  stdio: "inherit",
  cwd: ROOT,
  env: { ...process.env, PORT: String(port), HOSTNAME: host },
});

next.on("exit", (code, signal) => process.exit(signal ? 1 : (code ?? 0)));
for (const sig of ["SIGINT", "SIGTERM"]) process.on(sig, () => next.kill(sig));
