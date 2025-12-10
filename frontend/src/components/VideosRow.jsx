// src/components/VideosRow.jsx
import React, { useState } from "react";
import VideoCard from "./VideoCard";

export default function VideosRow({
  videos = [
    { id: 1, type: "mp4", src: "/videos/WhatsApp Video 2025-12-10 at 23.58.00_efd0746b.mp4", title: "PC Build Walkthrough" },
    { id: 2, type: "mp4", src: "/videos/WhatsApp Video 2025-12-10 at 23.58.14_2282b30b.mp4", title: "PC Build Walkthrough" },
    { id: 3, type: "mp4", src: "/videos/WhatsApp Video 2025-12-11 at 00.05.37_b5e9e687.mp4", title: "Custom PC Assembly" },
    { id: 4, type: "mp4", src: "/videos/WhatsApp Video 2025-12-11 at 00.06.07_2fd0c1b8.mp4", title: "Custom PC Assembly" },
  ],
  layout = "grid",
  autoplayMuted = true,
}) {
  const [openYoutube, setOpenYoutube] = useState(null);

  return (
    <>
      <section className="py-10 px-6 md:px-12">
        <h3 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 text-center">
          PC & Laptop Tech Videos
        </h3>

        {layout === "grid" ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {videos.map((v) => (
              <VideoCard
                key={v.id}
                type={v.type}
                src={v.src}
                title={v.title}
                autoplayMuted={autoplayMuted}
                onOpenYoutube={(id) => setOpenYoutube(id)}
              />
            ))}
          </div>
        ) : (
          <div className="overflow-x-auto -mx-6 px-6">
            <div className="flex gap-4 w-max">
              {videos.map((v) => (
                <div key={v.id} className="w-[320px]">
                  <VideoCard
                    type={v.type}
                    src={v.src}
                    title={v.title}
                    autoplayMuted={autoplayMuted}
                    onOpenYoutube={(id) => setOpenYoutube(id)}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </section>

      {openYoutube && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpenYoutube(null)}
        >
          <div className="w-full max-w-3xl aspect-[16/9] bg-black" onClick={(e) => e.stopPropagation()}>
            <iframe
              title="YouTube player"
              src={`https://www.youtube.com/embed/${openYoutube}?autoplay=1&rel=0`}
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <button
            onClick={() => setOpenYoutube(null)}
            className="absolute top-6 right-6 text-white bg-black/40 px-3 py-2 rounded"
            aria-label="Close video"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
