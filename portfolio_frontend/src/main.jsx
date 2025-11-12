import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from "react-router";
import AboutSection from './pages/about_page.jsx';
import Navbar from './components/navbar.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <BrowserRouter>
     <div className='sticky top-0'>
         <Navbar/>
       </div>
     <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutSection />} />

    </Routes>
  </BrowserRouter>,
  </StrictMode>,
)
