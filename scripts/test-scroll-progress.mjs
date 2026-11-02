import { readFile } from 'node:fs/promises';
import { test } from 'node:test';
import assert from 'node:assert/strict';
import ts from 'typescript';

// Compile the production TypeScript helper without depending on Node's TS loader version.
const source = await readFile(new URL('../src/lib/scroll-progress.ts', import.meta.url), 'utf8');
const compiled = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, module: ts.ModuleKind.ES2022 } });
const { getScrollProgress, getTimelineBounds } = await import(`data:text/javascript;base64,${Buffer.from(compiled.outputText).toString('base64')}`);

test('train waits for the first stop, then stays at the viewport midpoint in both directions', () => {
  for (const viewport of [640, 900, 1200]) {
    const first = 1600;
    const last = 3200;
    const { start, end } = getTimelineBounds(first, last, viewport);
    assert.equal(getScrollProgress(start - 50, start, end), 0);
    for (const scroll of [start, start + 150, end - 100, end, start + 150]) {
      const markerOnScreen = first - scroll + getScrollProgress(scroll, start, end) * (last - first);
      assert.equal(markerOnScreen, viewport / 2);
    }
    assert.equal(getScrollProgress(end + 100, start, end), 1);
  }
});

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
