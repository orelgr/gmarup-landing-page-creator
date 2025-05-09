
import React from 'react';
import { ArrowLeft } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-primary text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold mb-8">
          הצטרפו לאלפי לומדים שכבר מתקדמים עם GmarUp
        </h2>
        <div className="flex justify-center">
          <a 
            href="https://app.gmarup.com" 
            className="bg-white text-gmarup-blue py-3 px-6 rounded-xl font-medium hover:bg-gray-100 transition-all flex items-center gap-2"
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
