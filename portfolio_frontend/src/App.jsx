import { useContext } from "react";
import About_section from "./components/about_section";
import Category_section from "./components/category_section";
import HeroSection from "./components/heroSection";
import Socialmedia_icon from "./components/socialmedia_icon";
import Techstack_section from "./components/techstack_section";
import Theme_toggle from "./components/theme_toggle";
import { ThemeContext } from "./theme_provider";


export default function App() {
  const {theme} = useContext(ThemeContext)
  return (
    <div className= {`${theme==="dark" ? "bg-dark": "bg-light"} w-full min-h-screen xl:px-64 lg:px-32 md:px-16 px-4 sm:px-32 py-16`}>
      <div className="space-y-16">
        <HeroSection />
        <Theme_toggle/>
        <Socialmedia_icon />
        <About_section/>
        <Techstack_section />
        <Category_section/>
      </div>
    </div>
  );
}
