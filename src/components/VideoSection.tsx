
import React, { useState } from 'react';
import { Play } from 'lucide-react';

const VideoSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
    // In a real implementation, this would trigger the video to play
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
        
        <div className="relative max-w-3xl mx-auto aspect-video bg-gray-200 rounded-xl overflow-hidden shadow-lg">
          {!isPlaying ? (
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
          ) : (
            <div className="w-full h-full bg-black flex items-center justify-center text-white">
              <p>סרטון לדוגמה - יוחלף בסרטון אמיתי</p>
            </div>
          )}
          <img 
            src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=1600"
            alt="תמונת קדימון לסרטון הדרכה"
            className={`w-full h-full object-cover ${isPlaying ? 'hidden' : 'block'}`}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
