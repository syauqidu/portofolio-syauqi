import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';

// Compile the production TypeScript helper without depending on Node's TS loader version.
const source = await readFile(new URL('../src/lib/scroll-progress.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 } });
const { getScrollProgress } = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputText).toString('base64')}`);

test('progress is clamped before and after the section, including large scroll jumps', () => {
  assert.equal(getScrollProgress(-500, 100, 900), 0);
  assert.equal(getScrollProgress(100, 100, 900), 0);
  assert.equal(getScrollProgress(900, 100, 900), 1);
  assert.equal(getScrollProgress(5000, 100, 900), 1);
});
test('restored positions work without previous frames or elapsed time', () => {
  assert.equal(getScrollProgress(500, 100, 900), 0.5);
  assert.equal(getScrollProgress(700, 100, 900), 0.75);
});
test('scrolling back reverses progress exactly', () => {
  assert.deepEqual([100, 300, 500, 900, 500, 300, 100].map((position) => getScrollProgress(position, 100, 900)), [0, 0.25, 0.5, 1, 0.5, 0.25, 0]);
});
test('new viewport bounds recalculate progress rather than retaining stale state', () => {
  assert.equal(getScrollProgress(500, 100, 900), 0.5);
  assert.equal(getScrollProgress(500, 300, 1100), 0.25);
});
test('collapsed geometry does not produce NaN or unbounded progress', () => {
  assert.equal(getScrollProgress(50, 100, 100), 0);
  assert.equal(getScrollProgress(100, 100, 100), 1);
});
