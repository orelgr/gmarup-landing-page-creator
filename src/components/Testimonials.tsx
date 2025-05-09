
import React, { useState, useEffect } from 'react';

const testimonials = [
  {
    id: 1,
    text: "הצ'אט-בוט עזר לי להבין סוגיות מורכבות שהתקשיתי בהן שנים. לראשונה אני מרגיש שאני באמת מבין את הגמרא.",
    author: "יוסי כהן",
    position: "תלמיד ישיבה"
  },
  {
    id: 2,
    text: "אני אוהב את היכולת לקבל הסברים מפורטים ברמה המתאימה לי. כעת אני יכול ללמוד בקצב שלי ובהתאמה אישית.",
    author: "דוד לוי",
    position: "אברך כולל"
  },
  {
    id: 3,
    text: "כמורה לתלמוד, אני ממליץ על GmarUp לתלמידים שלי. זה כלי נהדר שמסייע להם להתגבר על קשיים בהבנת הטקסט.",
    author: "הרב יעקב ישראלי",
    position: "מלמד בישיבה"
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [swiping, setSwiping] = useState(false);
  const [startX, setStartX] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!swiping) {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [swiping]);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleDotClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setSwiping(true);
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const diff = startX - e.touches[0].clientX;
    if (diff > 50) {
      handleNext();
      setSwiping(false);
    } else if (diff < -50) {
      handlePrev();
      setSwiping(false);
    }
  };

  const handleTouchEnd = () => {
    setSwiping(false);
  };

  return (
    <section className="section-padding bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gmarup-blue">
          מה אומרים המשתמשים שלנו
        </h2>

        <div 
          className="max-w-3xl mx-auto relative"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="relative overflow-hidden min-h-[220px]">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`
                  absolute w-full transition-all duration-500 ease-in-out p-8 bg-gray-50 rounded-lg shadow-sm
                  ${index === activeIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}
                `}
              >
                <div className="text-center">
                  <p className="text-gray-600 mb-6 text-lg italic">"{testimonial.text}"</p>
                  <div>
                    <p className="font-semibold text-gmarup-blue">{testimonial.author}</p>
                    <p className="text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === activeIndex ? 'bg-gmarup-blue' : 'bg-gray-300'
                }`}
                aria-label={`עבור לביקורת ${index + 1}`}
              />
            ))}
          </div>

          <div className="flex justify-between absolute top-1/2 right-0 left-0 -translate-y-1/2 px-2">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gmarup-blue hover:bg-gray-50"
              aria-label="ביקורת קודמת"
            >
              &rarr;
            </button>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gmarup-blue hover:bg-gray-50"
              aria-label="ביקורת הבאה"
            >
              &larr;
            </button>
          </div>
        </div>
        
        <div className="mt-16 flex flex-wrap justify-center items-center gap-8">
          <p className="text-gray-500 font-medium text-center w-full mb-4">נזכרנו ב:</p>
          <div className="bg-gray-200 h-12 w-24 rounded flex items-center justify-center text-gray-400 text-sm">
            Coming Soon
          </div>
          <div className="bg-gray-200 h-12 w-24 rounded flex items-center justify-center text-gray-400 text-sm">
            Coming Soon
          </div>
          <div className="bg-gray-200 h-12 w-24 rounded flex items-center justify-center text-gray-400 text-sm">
            Coming Soon
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
