import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter, Routes, Route } from "react-router";
import Navbar from './components/layout/navbar.tsx';
import Footer from './components/layout/footer.tsx';
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <div className='sticky top-0 z-50'>
      <Navbar/>
    </div>
     <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>,
  </StrictMode>,
)
