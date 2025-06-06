import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
type FaqItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
};
const FaqItem = ({
  question,
  answer,
  isOpen,
  toggleOpen
}: FaqItemProps) => {
  return <div className="border-b border-gray-200 last:border-0">
      
      <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-4' : 'max-h-0'}`}>
        <p className="text-gray-600">{answer}</p>
      </div>
    </div>;
};
const FaqAccordion = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const faqs = [{
    question: "איך מתחברים?",
    answer: "להתחברות למערכת GmarUp, יש לגשת לאתר app.gmarup.com וליצור חשבון משתמש באמצעות כתובת אימייל או חשבון Google. לאחר אימות המייל, תוכלו להתחיל ללמוד מיד."
  }, {
    question: "האם המערכת חינמית?",
    answer: "GmarUp מציעה גישה חינמית לחלק מהתכנים והפונקציות הבסיסיות. אנו מציעים גם חבילות פרימיום עם תכונות נוספות כמו גישה למסכתות נוספות, זיהוי קול, ועוד פיצ'רים מתקדמים. פרטים מלאים על המחירים ניתן למצוא באתר."
  }, {
    question: "האם יש גרסה באנגלית/שפות נוספות?",
    answer: "כרגע המערכת זמינה בעברית וארמית בלבד, אך אנחנו עובדים על תמיכה בשפות נוספות כולל אנגלית. עדכונים בנושא יפורסמו בערוצי התקשורת הרשמיים שלנו."
  }, {
    question: "למי מתאים – מתחילים או מתקדמים?",
    answer: "GmarUp מתאימה לכל רמות הלימוד! למתחילים, המערכת מספקת הסברים בסיסיים והבהרות לטקסט. ללומדים מתקדמים, ישנה אפשרות לדיונים מעמיקים בסוגיות, השוואה בין פרשנויות שונות, וכלים מתקדמים לניתוח מקורות."
  }, {
    question: "איך לשמור על פרטיות הלימוד והנתונים?",
    answer: "אנו מקפידים על אבטחת מידע ופרטיות המשתמשים. השיחות והנתונים שלכם מאובטחים ואינם נחשפים לצדדים שלישיים. ניתן להגדיר העדפות פרטיות נוספות בהגדרות החשבון שלכם."
  }];
  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return <section className="section-padding" id="faq">
      <div className="container mx-auto px-6">
        
        
        
      </div>
    </section>;
};
export default FaqAccordion;