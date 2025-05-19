
import React, { useEffect, useRef } from 'react';
import { MessageCircle, Book, Users } from 'lucide-react';
import { ScrollArea } from './ui/scroll-area';

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
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transition-all duration-500 ease-out opacity-0 translate-y-4 border border-amber-100 hover:border-amber-200"
    >
      <div className="text-gmarup-brown mb-4 flex items-center justify-center w-16 h-16 bg-amber-50 rounded-full mx-auto">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-gmarup-brown text-center">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
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
    <section className="section-padding bg-gradient-to-b from-amber-50 to-amber-100" id="features">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 opacity-0 animate-fade-in" style={{animationDelay: '0.1s', animationFillMode: 'forwards'}}>
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gmarup-brown relative inline-block">
            מה מיוחד במערכת?
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gmarup-gold to-transparent"></span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">לימוד הגמרא בצורה חדשנית ומתקדמת, עם כלים שיעזרו לכם להבין ולזכור</p>
        </div>
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
