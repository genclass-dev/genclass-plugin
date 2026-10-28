#!/usr/bin/env node
// Vendored from @genclass/mcp@0.2.1 by packages/mcp/scripts/plugin-repo.mjs in genclass-dev/GenClass-lib: cli.mjs next
// to this file is that package's dist/cli.js, byte for byte, and this file is its bin/genclass-mcp.mjs importing it.
// genclass-mcp: the GenClass MCP server and its helper commands (see src/cli.ts).
import { runCli } from "./cli.mjs";

runCli(process.argv.slice(2), {
  cwd: process.cwd(),
  env: process.env,
  out: (s) => void process.stdout.write(s),
  err: (s) => void process.stderr.write(s),
  stdin: process.stdin,
  stdout: process.stdout,
  stderr: process.stderr,
}).then(
  (code) => {
    process.exitCode = code;
  },
  (e) => {
    process.stderr.write(`[genclass-mcp] ${e instanceof Error ? e.stack ?? e.message : String(e)}\n`);
    process.exitCode = 1;
  },
);
