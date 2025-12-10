import React from "react";

export default function PlayIcon({ className = "w-6 h-6" }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M5 3v18l15-9-15-9z" />
    </svg>
  );
}
