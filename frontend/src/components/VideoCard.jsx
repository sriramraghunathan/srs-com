// src/components/VideoCard.jsx
import React, { useRef, useEffect, useState } from "react";

/** Play icon (inline SVG) */
const PlayIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M5 3v18l15-9L5 3z" />
  </svg>
);

/**
 * VideoCard
 * Autoplay + Loop version (no hover needed)
 */
export default function VideoCard({
  type = "mp4",
  src,
  title = "Video"
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Auto-play video on mount (no hover required)
  useEffect(() => {
    if (type !== "mp4") return;
    const v = videoRef.current;
    if (!v) return;

    const startVideo = async () => {
      try {
        v.muted = true;         // Required for autoplay policies
        v.loop = true;          // Loop forever
        const p = v.play();
        if (p && typeof p.then === "function") await p;
        setIsPlaying(true);     // Fade in video
      } catch (err) {
        console.log("Autoplay blocked:", err);
      }
    };

    startVideo();
  }, [type]);

  const handleClick = () => {
    if (type === "youtube") {
      window.open(`https://www.youtube.com/watch?v=${src}`, "_blank");
    }
  };

  return (
    <div
      className="rounded-lg overflow-hidden bg-gray-50 shadow-sm group cursor-pointer"
      onClick={handleClick}
      role={type === "youtube" ? "link" : "button"}
      aria-label={title}
    >
      <div className="w-full aspect-[7/9] bg-black relative">
        {type === "mp4" ? (
          <video
            ref={videoRef}
            src={src}
            className={`w-full h-full object-cover transition-opacity duration-700 ${
              isPlaying ? "opacity-100" : "opacity-0"
            }`}
            playsInline
            preload="metadata"
            controls={false}
            muted
            loop
            autoPlay
          />
        ) : (
          <img
            src={`https://img.youtube.com/vi/${src}/hqdefault.jpg`}
            alt={title}
            className="w-full h-full object-cover"
          />
        )}

        {/* Hide overlay once video starts playing */}
        {!isPlaying && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/40">
            <PlayIcon className="w-6 h-6 text-white" />
          </div>
        )}
      </div>

      <div className="p-3">
        <h4 className="text-sm font-medium text-gray-900">{title}</h4>
        <p className="text-xs text-gray-600 mt-1">
          {type === "mp4" ? "Autoplay Loop Video" : "YouTube Video"}
        </p>
      </div>
    </div>
  );
}
