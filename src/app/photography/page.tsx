"use client"

import { useState, useRef } from 'react';
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
    url: "https://res.cloudinary.com/dfiwecvfd/image/upload/v1727647259/bridge-view-min_lgvapr.jpg",
    height: 500,
    width: 500,
    fullscreenHeight: 500,
    fullscreenWidth: 500,
    alt: "Image with sky in background."
  },
  {
    id: 2,
    url: "https://res.cloudinary.com/dfiwecvfd/image/upload/v1727646361/8FEFF362-BA95-4BBB-80C9-5CDC6DCC254D_mcqet9.jpg",
    height: 500,
    width: 500,
    fullscreenHeight: 800,
    fullscreenWidth: 800,
    alt: "Image with sky in background."
  },
  {
    id: 3,
    url: "https://res.cloudinary.com/dfiwecvfd/image/upload/v1727646361/IMG_0781_bnry3a.jpg",
    height: 500,
    width: 500,
    fullscreenHeight: 800,
    fullscreenWidth: 800,
    alt: "Image with sky in background."
  },
  {
    id: 4,
    url: "https://res.cloudinary.com/dfiwecvfd/image/upload/v1727646360/IMG_1148_yaegg8.jpg",
    height: 500,
    width: 500,
    fullscreenHeight: 800,
    fullscreenWidth: 800,
    alt: "Image with sky in background."
  },
  {
    id: 5,
    url: "https://res.cloudinary.com/dfiwecvfd/image/upload/v1727646361/cabin-view_qumj6w.jpg",
    height: 500,
    width: 500,
    fullscreenHeight: 800,
    fullscreenWidth: 800,
    alt: "Image with sky in background."
  },
  {
    id: 6,
    url: "https://res.cloudinary.com/dfiwecvfd/image/upload/v1727646361/C6015A3C-9653-4BEA-96C6-7E93327A9209_jitmqp.jpg",
    height: 500,
    width: 500,
    fullscreenHeight: 500,
    fullscreenWidth: 500,
    alt: "Image with sky in background."
  },
]

const PhotographyPage = () => {
  const [fullScreenImage, setFullScreenImage] = useState<galleryImage | null>(null); // Store the full image object
  const fullScreenRef = useRef<HTMLDivElement | null>(null);

  const handleImageClick = (image: galleryImage) => {
    setFullScreenImage(image); // Set the full image object
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
      <h2 className="text-3xl font-bold">Photo Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <div
            key={image.id}  // Added key prop
            className="aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => handleImageClick(image)}
          >
            <CldImage
              src={image.url}
              className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
              height={image.height}
              width={image.width}
              crop="fill" // Set the crop type to 'fill'
              gravity="center" // Ensures the crop is centered
              alt={image.alt}
            />
          </div>
        ))}
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
            src={fullScreenImage.url}
            width={fullScreenImage.fullscreenWidth} 
            height={fullScreenImage.fullscreenHeight}  
            crop="fit" 
            alt={fullScreenImage.alt}  
            className="object-contain"
          />
        </div>
      )}
    </div>
  );
};

export default PhotographyPage;
