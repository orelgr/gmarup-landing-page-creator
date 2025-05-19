
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add the font link elements to the document head
const fontLinks = [
  'https://fonts.googleapis.com/css2?family=Assistant:wght@300;400;500;600;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Alef:wght@400;700&display=swap',
  'https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@300;400;500;700;900&display=swap'
];

fontLinks.forEach(href => {
  const link = document.createElement('link');
  link.rel = 'stylesheet';
  link.href = href;
  document.head.appendChild(link);
});

createRoot(document.getElementById("root")!).render(<App />);
