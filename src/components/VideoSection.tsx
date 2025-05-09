
import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { AspectRatio } from './ui/aspect-ratio';

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoId = 'ddKbNms05aA'; // YouTube video ID

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <section className="section-padding" id="video">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-6 text-gmarup-blue">
          איך זה עובד?
        </h2>
        <p className="text-center mb-8 text-gray-600 max-w-2xl mx-auto">
          צפו בסרטון קצר (90 ש׳) שמראה איך להתחבר וללמוד
        </p>
        
        <div className="mx-auto max-w-md"> {/* Reduced width container for vertical video */}
          <div className="relative rounded-xl overflow-hidden shadow-lg bg-gray-100">
            {!isPlaying ? (
              <div className="relative">
                <AspectRatio ratio={9/16} className="bg-gray-200">
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                    alt="תמונת קדימון לסרטון הדרכה"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </AspectRatio>
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-40 cursor-pointer"
                  onClick={handlePlayVideo}
                >
                  <button 
                    className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center transition-transform hover:scale-105"
                    aria-label="הפעל סרטון"
                  >
                    <Play size={32} className="text-gmarup-blue mr-1" />
                  </button>
                  <span className="sr-only">הפעל סרטון</span>
                </div>
              </div>
            ) : (
              <div className="relative pb-[177.78%]"> {/* 9:16 aspect ratio with padding bottom */}
                <iframe
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
                  title="GmarUp Tutorial Video"
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allowFullScreen
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
