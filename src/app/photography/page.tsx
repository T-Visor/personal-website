'use client'

import { useState, useRef } from 'react';
import Image from 'next/image';

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
                {[1, 2, 3, 4, 5, 6].map((num) => (
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
                ))}
            </div>

            {/* Fullscreen view */}
            {fullScreenImage && (
                <div
                    ref={fullScreenRef}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90"
                >
                    <button
                        className="absolute top-4 right-4 p-2 bg-indigo-600 text-white rounded-lg z-60"
                        onClick={closeFullScreen}
                    >
                        Close
                    </button>
                    <Image
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
