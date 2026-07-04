import { scallopPath } from "./scallop";

const body = scallopPath(100, 92, 60, 8, 11);

/**
 * The friendly teal "certification seal" character used in the Problem/Solution
 * section. `mood` switches the face and limb pose.
 */
export function Mascot({
  mood = "happy",
  className = "",
}: {
  mood?: "happy" | "worried";
  className?: string;
}) {
  const teal = "#4EB1A9";
  const stroke = "#111111";
  return (
    <svg
      viewBox="0 0 200 220"
      className={className}
      role="img"
      aria-label={
        mood === "happy"
          ? "A happy certification seal character"
          : "A worried certification seal character"
      }
    >
      <g
        fill="none"
        stroke={stroke}
        strokeWidth={3}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {/* Legs */}
        <path d="M86 148 L84 196" />
        <path d="M114 148 L116 196" />
        <path d="M74 198 q12 8 22 0" />
        <path d="M104 198 q12 8 22 0" />

        {mood === "happy" ? (
          <>
            {/* Arms hugging inward */}
            <path d="M46 96 q-18 22 6 40" />
            <path d="M154 96 q18 22 -6 40" />
          </>
        ) : (
          <>
            {/* One arm raised, one down */}
            <path d="M48 92 q-22 -18 -14 -40" />
            <path d="M152 100 q22 14 20 40" />
          </>
        )}
      </g>

      {/* Body */}
      <path d={body} fill={teal} />

      {/* Face */}
      <g fill={stroke} stroke="none">
        {mood === "happy" ? (
          <>
            <circle cx={86} cy={86} r={4} />
            <circle cx={114} cy={86} r={4} />
          </>
        ) : (
          <>
            <circle cx={86} cy={86} r={4} />
            <circle cx={114} cy={86} r={4} />
          </>
        )}
      </g>
      <g fill="none" stroke={stroke} strokeWidth={3} strokeLinecap="round">
        {mood === "happy" ? (
          <path d="M84 102 q16 14 32 0" />
        ) : (
          <path d="M84 108 q16 -12 32 0" />
        )}
      </g>
    </svg>
  );
}
