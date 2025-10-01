"use client";

export default function GlowingLine() {
  return (
    <svg
      width="500"
      height="200"
      viewBox="0 0 500 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Main line */}
      <path
        d="M 10 100 L 100 100 Q 200 50, 300 100 L 400 100"
        stroke="#00A8FF"
        strokeWidth="4"
        fill="none"
        style={{ filter: "drop-shadow(0 0 6px #00A8FF)" }}
      />

      {/* Dot at the end */}
      <circle
        cx="400"
        cy="100"
        r="6"
        fill="#00A8FF"
        style={{ filter: "drop-shadow(0 0 6px #00A8FF)" }}
      />
    </svg>
  );
}
