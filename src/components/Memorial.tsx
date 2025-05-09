
import React from 'react';

const Memorial = () => {
  return (
    <section className="py-12 bg-white" id="memorial">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-lg border-t-4 border-gmarup-gold relative">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?auto=format&fit=crop&q=80&w=800"
                alt="רס״ל אור מנצור ז״ל"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="text-center md:text-right">
              <h2 className="text-xl md:text-2xl font-semibold mb-4">לזכר רס״ל אור מנצור ז״ל</h2>
              <p className="text-gray-700 leading-relaxed">
                GmarUp מוקדש לעילוי נשמת רס״ל אור מנצור בן יהודית, שנפל בקרב 
                (מלחמת חרבות ברזל, התמרון הראשון בלבנון).
              </p>
              <p className="text-gray-700 mt-3 font-medium">
                נמשיך להפיץ תורה ואור בזכותו.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Memorial;
