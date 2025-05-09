import React from "react";
import { ArrowLeft } from "lucide-react";
const Hero = () => {
  return <section className="relative min-h-[90vh] md:min-h-[80vh] flex items-center bg-gradient-primary overflow-hidden">
      <div className="absolute inset-0 bg-gradient-primary opacity-90 my-[34px] bg-orange-950"></div>
      <div className="container mx-auto px-6 relative">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center text-center">
          <div className="md:w-1/2 text-white animate-fade-in mt-6 md:mt-0">
            <h1 className="text-3xl lg:text-5xl font-semibold leading-tight mb-4 md:text-4xl">GmarUp 
 חוויית לימוד גמרא שלא הכרת</h1>
            <p className="text-lg md:text-xl opacity-90 mb-8">חוויית לימוד מותאמת-אישית, הבנה קלה,
ולימוד מהנה בעזרת AI מתקדם.</p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="https://gmarup.com" className="bg-gmarup-gold hover:bg-gmarup-gold/90 text-gray-900 py-3 px-6 rounded-xl font-medium transition-all flex items-center justify-center gap-2">
                התחבר למערכת
                <ArrowLeft size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;