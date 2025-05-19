
import React, { useEffect, useRef } from 'react';
import { MessageCircle, Book, Users } from 'lucide-react';

const FeatureCard = ({ 
  icon: Icon, 
  title, 
  description, 
  delay = 0 
}: { 
  icon: React.ElementType; 
  title: string; 
  description: string;
  delay: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('opacity-100', 'translate-y-0');
              entry.target.classList.remove('opacity-0', 'translate-y-4');
            }, delay);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [delay]);

  return (
    <div 
      ref={cardRef}
      className="bg-white rounded-lg p-6 shadow-md transition-all duration-500 ease-out opacity-0 translate-y-4"
    >
      <div className="text-gmarup-blue mb-4 flex items-center justify-center w-16 h-16 bg-blue-50 rounded-full">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gmarup-blue">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Features = () => {
  const featuresData = [
    {
      icon: MessageCircle,
      title: "צ׳אט-בוט 24/7",
      description: "שואל-עונה בזמן אמת על כל שאלה בגמרא, מסייע בהבנת הסוגיה ומספק הסברים מותאמים אישית.",
      delay: 0,
    },
    {
      icon: Book,
      title: "פירושים והסברים מובנים",
      description: "תרגום, ביאורים ומבנה סוגיה - כל מה שצריך כדי להבין את הגמרא בצורה ברורה ומסודרת.",
      delay: 200,
    },
    {
      icon: Users,
      title: "מותאם לכל רמה",
      description: "בין אם אתם מתחילים או תלמידי חכמים, המערכת מתאימה את עצמה לרמת הידע שלכם.",
      delay: 400,
    },
  ];

  return (
    <section className="section-padding bg-gray-50" id="features">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gmarup-blue">
          מה מיוחד במערכת?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuresData.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
