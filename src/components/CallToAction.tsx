
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-amber-50 to-amber-800 text-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gmarup-gold via-gmarup-light-gold to-gmarup-gold"></div>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-gmarup-gold via-gmarup-light-gold to-gmarup-gold"></div>
      <div className="absolute -left-24 top-1/2 w-48 h-48 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      <div className="absolute -right-24 top-1/2 w-48 h-48 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8 text-gmarup-brown">
          הצטרפו לאלפי לומדים שכבר מתקדמים עם GmarUp
        </h2>
        <div className="flex justify-center">
          <a 
            href="https://gmarup.com" 
            className="bg-gradient-to-r from-gmarup-gold to-gmarup-dark-gold text-gray-900 py-3 px-6 rounded-xl font-medium transition-all transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
          >
            התחבר למערכת
            <ArrowLeft size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
