"use client";

import { useState } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: string[];
  title: string;
  locationBadge?: string;
  priceBadge?: string;
}

const ImageCarousel = ({
  images,
  title,
  locationBadge,
  priceBadge,
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) {
    return (
      <div className="relative w-full h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl bg-gray-200 shadow-lg flex items-center justify-center text-gray-400">
        No Image Available
      </div>
    );
  }

  const showPrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="space-y-4">
      <div className="relative w-full h-72 sm:h-96 lg:h-[420px] overflow-hidden rounded-2xl bg-gray-200 shadow-lg">
        <Image
          key={images[currentIndex]}
          src={`/images/${images[currentIndex]}`}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 50vw"
        />

        {locationBadge && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-xl shadow">
            <span className="text-sm font-medium text-gray-700">
              {locationBadge}
            </span>
          </div>
        )}

        {priceBadge && (
          <div className="absolute bottom-4 right-4 bg-gray-900/90 text-white px-5 py-2.5 rounded-xl shadow-lg">
            <span className="text-lg font-semibold">{priceBadge}</span>
          </div>
        )}

        {images.length > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={showPrev}
              className="absolute inset-y-0 left-2 flex items-center justify-center px-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={showNext}
              className="absolute inset-y-0 right-2 flex items-center justify-center px-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-colors"
            >
              ›
            </button>
          </>
        )}
      </div>

      {images.length > 1 && (
        <div className="flex items-center justify-center gap-2">
          {images.map((img, index) => (
            <button
              key={img + index}
              type="button"
              onClick={() => setCurrentIndex(index)}
              className={`h-2.5 w-2.5 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-gray-900 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;


