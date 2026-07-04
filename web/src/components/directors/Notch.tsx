/**
 * The downward "tab" that joins the stacked color bands on the For Directors
 * page. Render it as the last child of a `relative` section; `colorClass` sets
 * the fill (text-*) to match that section's background.
 */
export function Notch({ colorClass }: { colorClass: string }) {
  return (
    <svg
      className={`absolute left-1/2 top-full z-10 h-7 w-14 -translate-x-1/2 ${colorClass}`}
      viewBox="0 0 56 28"
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path d="M0 0 H56 L28 28 Z" fill="currentColor" />
    </svg>
  );
}
