
import React from "react";
import { ArrowLeft } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[80vh] flex items-center bg-gradient-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-90"></div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col-reverse md:flex-row md:items-center md:justify-between">
          <div className="md:w-1/2 text-white animate-fade-in mt-6 md:mt-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold leading-tight mb-4">
              ברוכים הבאים ל-GmarUp – לומדים גמרא כמו שלא חוויתם מעולם
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">
              צ׳אט-בוט AI, פירושים בצד, וחוויית לימוד מותאמת-אישית
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://app.gmarup.com" 
                className="bg-gmarup-gold hover:bg-gmarup-gold/90 text-gray-900 py-3 px-6 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
              >
                התחבר למערכת
                <ArrowLeft size={18} />
              </a>
            </div>
          </div>
          <div className="md:w-5/12 mb-8 md:mb-0 animate-slide-in">
            <div className="relative w-full">
              <svg
                viewBox="0 0 500 500"
                className="w-full h-auto"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="0" y="0" width="500" height="500" fill="none" />
                <g transform="matrix(1,0,0,1,250,250)">
                  <g transform="matrix(1,0,0,1,0,0)">
                    <path
                      stroke="white"
                      strokeWidth="2"
                      fill="rgba(255,255,255,0.1)"
                      d="M-150 -125 L150 -125 L150 125 L-150 125 Z"
                    />
                    <foreignObject x="-140" y="-115" width="280" height="230">
                      <div className="text-white text-right font-medium p-4">
                        <p className="mb-2">תלמוד בבלי מסכת ברכות דף ב עמוד א</p>
                        <p>מאימתי קורין את שמע בערבין? משעה שהכהנים נכנסים לאכול בתרומתן</p>
                      </div>
                    </foreignObject>
                    <g transform="matrix(1,0,0,1,0,70)">
                      <circle fill="rgba(255,255,255,0.2)" cx="0" cy="0" r="20" />
                      <g transform="matrix(1,0,0,1,0,0)">
                        <path
                          fill="white"
                          d="M-10 -15 L10 -15 L10 15 L-10 15 Z"
                          stroke="rgba(255,255,255,0.5)"
                          strokeWidth="1"
                        />
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,-80,-60)">
                      <circle fill="#00C7C7" cx="0" cy="0" r="10" />
                    </g>
                    <g transform="matrix(1,0,0,1,80,40)">
                      <circle fill="#1E2A78" cx="0" cy="0" r="15" />
                    </g>
                  </g>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
