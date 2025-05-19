
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
    <section className="section-padding bg-gradient-to-br from-amber-50 to-amber-100" id="video">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gmarup-brown relative inline-block">
            איך זה עובד?
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gmarup-gold to-transparent"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">צפו בסרטון קצר שמראה איך להתחבר ולהשתמש במערכת</p>
        </div>
        
        <div className="mx-auto max-w-md relative"> {/* Reduced width container for vertical video */}
          <div className="relative rounded-xl overflow-hidden shadow-xl bg-white p-2 border-2 border-amber-200">
            {!isPlaying ? (
              <div className="relative">
                <AspectRatio ratio={9 / 16} className="bg-gray-200 rounded-lg overflow-hidden">
                  <img 
                    src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`} 
                    alt="תמונת קדימון לסרטון הדרכה" 
                    className="w-full h-full object-cover" 
                    loading="lazy" 
                  />
                </AspectRatio>
                <div 
                  className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-40 cursor-pointer rounded-lg hover:bg-opacity-30 transition-all duration-300" 
                  onClick={handlePlayVideo}
                >
                  <button 
                    className="w-16 h-16 md:w-20 md:h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center transition-transform hover:scale-110 shadow-lg" 
                    aria-label="הפעל סרטון"
                  >
                    <Play size={32} className="text-gmarup-brown mr-1" />
                  </button>
                  <span className="sr-only">הפעל סרטון</span>
                </div>
              </div>
            ) : (
              <div className="relative pb-[177.78%]"> {/* 9:16 aspect ratio with padding bottom */}
                <iframe 
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`} 
                  title="GmarUp Tutorial Video" 
                  className="absolute top-0 left-0 w-full h-full border-0 rounded-lg" 
                  allowFullScreen 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                ></iframe>
              </div>
            )}
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -z-10 -bottom-5 -right-5 w-32 h-32 bg-gradient-to-br from-amber-200 to-amber-100 rounded-full opacity-50 blur-xl"></div>
          <div className="absolute -z-10 -top-5 -left-5 w-24 h-24 bg-gradient-to-br from-gmarup-gold to-amber-200 rounded-full opacity-40 blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
