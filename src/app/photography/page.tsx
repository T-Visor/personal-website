"use client"

import { useState, useRef } from 'react';
import Image from 'next/image';
import { CldImage } from 'next-cloudinary';

type galleryImage = {
  id: number;
  url: string;
  height: number;
  width: number;
  fullscreenHeight: number;
  fullscreenWidth: number;
  alt: string;
}

const images: galleryImage[] = [
  {
    id: 1,
    url: "cld-sample-5",
    height: 500,
    width: 500,
    fullscreenHeight: 700,
    fullscreenWidth: 700,
    alt: "Image with sky in background."
  },
  {
    id: 2,
    url: "cld-sample-2",
    height: 500,
    width: 500,
    fullscreenHeight: 700,
    fullscreenWidth: 700,
    alt: "Image with sky in background."
  },
  {
    id: 3,
    url: "cld-sample-3",
    height: 500,
    width: 500,
    fullscreenHeight: 700,
    fullscreenWidth: 700,
    alt: "Image with sky in background."
  },
  {
    id: 4,
    url: "cld-sample-4",
    height: 500,
    width: 500,
    fullscreenHeight: 700,
    fullscreenWidth: 700,
    alt: "Image with sky in background."
  },
]


const PhotographyPage = () => {
  const [fullScreenImage, setFullScreenImage] = useState<string | null>(null);
  const fullScreenRef = useRef<HTMLDivElement | null>(null);

  const handleImageClick = (src: string) => {
    setFullScreenImage(src);
    if (fullScreenRef.current && fullScreenRef.current.requestFullscreen) {
      fullScreenRef.current.requestFullscreen();
    }
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen();
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Photography Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            className="aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleImageClick(image.url)}
          >
            <CldImage
              src={image.url}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              height={image.height}
              width={image.width}
              crop={{
                type: 'auto',
                source: true
              }}
              alt={image.alt}
            />
          </div>
        ))}
        {/*[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleImageClick(`/images/profile.jpg`)}
          >
            <Image
              src={`/images/profile.jpg`}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              height={400}
              width={400}
              alt={`Photography sample ${num}`}
            />
          </div>
        ))*/}
      </div>

      {/* Fullscreen view */}
      {fullScreenImage && (
        <div
          ref={fullScreenRef}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
        >
          <button
            className="absolute top-4 right-4 p-2 text-white lg z-60"
            onClick={closeFullScreen}
            aria-label="Close"
          >
            <span className="text-xl">X</span> {/* Use an "X" character */}
          </button>

          <CldImage
            src={fullScreenImage}
            alt="Full-screen photography"
            width={700}
            height={700}
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default PhotographyPage;
