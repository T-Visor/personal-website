"use client"

import { useState, useRef } from "react";
import { CldImage } from "next-cloudinary";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

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
    height: 400,
    width: 400,
    fullscreenHeight: 400,
    fullscreenWidth: 400,
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
    url: "https://res.cloudinary.com/dfiwecvfd/image/upload/v1739415452/Big-face_dxe7ah.jpg",
    height: 400,
    width: 400,
    fullscreenHeight: 400,
    fullscreenWidth: 400,
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
    url: "https://res.cloudinary.com/dfiwecvfd/image/upload/v1739415458/Leaves_n3g0gm.jpg",
    height: 400,
    width: 400,
    fullscreenHeight: 400,
    fullscreenWidth: 400,
    alt: "Image with sky in background."
  },
]

const PhotographyPage = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-3xl font-bold">Photo Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image) => (
          <Dialog key={image.id}>
            <DialogTrigger asChild>
              <div className="aspect-square overflow-hidden rounded-lg cursor-pointer">
                <CldImage
                  src={image.url}
                  className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
                  height={image.height}
                  width={image.width}
                  crop="fill"
                  gravity="center"
                  alt={image.alt}
                />
              </div>
            </DialogTrigger>
            <DialogContent className="border-0">
              <CldImage
                src={image.url}
                className="w-full h-full"
                height={image.fullscreenHeight}
                width={image.fullscreenWidth}
                crop="fill"
                gravity="center"
                alt={image.alt}
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
};

export default PhotographyPage;
