import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import  { Toaster } from "react-hot-toast";

import App from "./App.jsx";
import { BrowserRouter, Route, Routes, useLocation } from "react-router";
import AboutSection from "./pages/about_page.jsx";
import Navbar from "./components/navbar.jsx";
import Resume_section from "./pages/resume_section.jsx";
import Contact_section from "./pages/contact_page.jsx";
import Portfolio_section from "./pages/portfolio_page.jsx";
import Footer_section from "./components/footer_section.jsx";
import { Theme_provider } from "./theme_provider.jsx";
import Theme_toggle from "./components/theme_toggle.jsx";

import Setting from "./components/setting.jsx";


export default function Main() {
  return (
    <StrictMode>
      <Theme_provider>
          <BrowserRouter>
            <App_content />
          </BrowserRouter>
        
      </Theme_provider>
    </StrictMode>
  );
}

const App_content = () => {
  const location = useLocation();
  // const isAdminpage = location.pathname.startsWith("/admin");
  return (
    <>
        <div className="sticky top-0 z-10 footer-gradient">
          <Navbar />
        </div>
      
        <div className="fixed md:right-1/12 right-8 top-1/2 -translate-y-1/2 z-10">
          <Setting />
        </div>
      

      <Routes>
        <Route path="/" element={<App />} />
      
        <Route path="/about" element={<AboutSection />} />
        <Route path="/resume" element={<Resume_section />} />
        <Route path="/portfolio" element={<Portfolio_section />} />
        <Route path="/contact" element={<Contact_section />} />
      </Routes>
      {/* show footer  only  if not admin page */}

    
        <div className="bg-gradient -mb-10">
          <Footer_section />
        </div>
      
      <Toaster />
    </>
  );
};

createRoot(document.getElementById("root")).render(<Main />);
