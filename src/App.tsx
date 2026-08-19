import BlogHighlights from "./sections/blogHighlights";
import ContactCTA from "./sections/contactCTA";
import ExperienceTimeline from "./sections/experienceTimeline";
import FeaturedProjects from "./sections/featuredProjects";
import Hero from "./sections/hero";
import Skills from "./sections/skills";
import Testimonials from "./sections/testimonials";
import TrustIndicators from "./sections/trustIndicators";

function App() {
  return (
    <div className="flex-1 min-h-screen">
      
       <Hero />
      {/* <TrustIndicators />
      <FeaturedProjects />
      <Skills />
      <ExperienceTimeline />
      <BlogHighlights />
      <Testimonials />
      <ContactCTA /> */}
    </div>
  );
}

export default App;
