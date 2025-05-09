import React from 'react';
const Footer = () => {
  return <footer className="bg-gray-50 pt-12 pb-6">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between mb-8 gap-8">
          <div className="md:w-1/3">
            <div className="mb-4">
              <h2 className="text-xl font-bold text-gmarup-blue">GmarUp</h2>
              <p className="text-gray-600 mt-2">לומדים, מבינים, מתקדמים</p>
            </div>
            <p className="text-gray-500 text-sm">חוויית לימוד מותאמת-אישית, הבנה קלה, ולימוד מהנה בעזרת AI מתקדם.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gmarup-blue">ניווט מהיר</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gmarup-blue transition-colors">דף הבית</a>
              </li>
              <li>
                <a href="#features" className="text-gray-600 hover:text-gmarup-blue transition-colors">תכונות</a>
              </li>
              <li>
                <a href="#video" className="text-gray-600 hover:text-gmarup-blue transition-colors">איך זה עובד</a>
              </li>
              <li>
                <a href="#faq" className="text-gray-600 hover:text-gmarup-blue transition-colors">שאלות נפוצות</a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 hover:text-gmarup-blue transition-colors">צור קשר</a>
              </li>
            </ul>
          </div>
          
          <div>
            
            <ul className="space-y-2">
              <li>
                
              </li>
              <li>
                
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 mt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © 2025 GmarUp. כל הזכויות שמורות.
            </p>
            <div>
              
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;