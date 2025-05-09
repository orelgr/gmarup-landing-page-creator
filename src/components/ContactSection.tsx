import React, { useState } from 'react';
import { Mail, Phone } from 'lucide-react';
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 1500);
  };
  return <section className="section-padding bg-gray-50" id="contact">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-center mb-12 text-gmarup-blue">
          צריכים עזרה? דברו איתנו
        </h2>
        
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Contact Info */}
          <div className="lg:w-5/12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">צרו קשר</h3>
              
              <div className="flex flex-col gap-6">
                <a href="mailto:gmarupil@gmail.com" className="flex items-center gap-3 text-gmarup-blue hover:text-gmarup-turquoise transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">שלחו לנו מייל</p>
                    <p className="text-gray-600">gmarupil@gmail.com</p>
                  </div>
                </a>
                
                <a href="https://wa.me/972539646189" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gmarup-blue hover:text-gmarup-turquoise transition-colors">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-medium">WhatsApp</p>
                    <p className="text-gray-600">972-53-964-6189</p>
                  </div>
                </a>
                
                <div className="mt-4">
                  <p className="font-medium mb-2">הצטרפו לקבוצת הוואטסאפ שלנו:</p>
                  <a href="https://chat.whatsapp.com/LNmVCXvv35S9SsbWTol2qW" target="_blank" rel="noopener noreferrer" className="btn-primary inline-block text-center">
                    הצטרף לקבוצה
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:w-7/12">
            <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-6">שלחו הודעה</h3>
              
              {submitSuccess && <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg">
                  תודה! הודעתך נשלחה בהצלחה.
                </div>}
              
              <div className="mb-4">
                <label htmlFor="name" className="block mb-2 font-medium">
                  שם מלא
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gmarup-blue focus:outline-none" required />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block mb-2 font-medium">
                  אימייל
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gmarup-blue focus:outline-none" required />
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 font-medium">
                  הודעה
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gmarup-blue focus:outline-none" required></textarea>
              </div>
              
              <div className="mb-6">
                
              </div>
              
              <button type="submit" disabled={isSubmitting} className="btn-primary w-full flex justify-center items-center">
                {isSubmitting ? 'שולח...' : 'שליחה'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>;
};
export default ContactSection;