/** Bounded, reversible progress. All coordinates use document pixels. */
export function getTimelineBounds(firstStop: number, lastStop: number, viewportHeight: number) {
  const midpoint = viewportHeight / 2;
  return { start: firstStop - midpoint, end: lastStop - midpoint };
}

export function getScrollProgress(position: number, start: number, end: number): number {
  if (end <= start) return position >= end ? 1 : 0;
  return Math.min(1, Math.max(0, (position - start) / (end - start)));
}
