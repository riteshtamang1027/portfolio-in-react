import Footer from "./components/layout/footer";
import FeaturedProjects from "./sections/featuredProjects";
import Hero from "./sections/hero";
import Skills from "./sections/skills";
import TrustIndicators from "./sections/trustIndicators";

function App(){
  return(
    <div className="flex flex-col">
   <div className="flex-1 min-h-screen">
    <Hero/>
    <TrustIndicators/>
    <FeaturedProjects/>
    <Skills/>
   </div>
    <Footer/>
    </div>
  )
}

export default App;