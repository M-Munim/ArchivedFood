/**
 * Generate an SVG path for a scalloped "seal" shape (the recurring badge motif
 * in the brand: the logo, the step badges, and the mascots).
 *
 * Deterministic (no Math.random / Date) so it is safe to run during SSR.
 */
export function scallopPath(
  cx: number,
  cy: number,
  rBase: number,
  amplitude: number,
  bumps: number,
  steps = 160
): string {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const t = (i / steps) * Math.PI * 2;
    const r = rBase + amplitude * Math.cos(bumps * t);
    const x = cx + r * Math.cos(t);
    const y = cy + r * Math.sin(t);
    d += `${i === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)} `;
  }
  return `${d}Z`;
}
