
import React from "react";
import { ArrowLeft } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-[80vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-amber-800 opacity-90 my-[34px]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-64 h-64 bg-gmarup-gold rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center text-center">
          <div className="md:w-1/2 text-gray-900 animate-fade-in mt-6 md:mt-0">
            <h1 className="text-3xl lg:text-5xl font-semibold leading-tight mb-4 md:text-4xl">
              <span className="text-gmarup-brown">GmarUp</span>
              <span className="block mt-2">חוויית לימוד גמרא שלא הכרת</span>
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-8 text-gmarup-brown">
              חוויית לימוד מותאמת-אישית, הבנה קלה,
              ולימוד מהנה בעזרת AI מתקדם.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a 
                href="https://gmarup.com" 
                className="bg-gradient-to-r from-gmarup-gold to-gmarup-dark-gold text-gray-900 py-3 px-6 rounded-xl font-medium transition-all transform hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2"
              >
                התחבר למערכת
                <ArrowLeft size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
