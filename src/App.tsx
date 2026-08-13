import Footer from "./components/layout/footer";
import Hero from "./sections/hero";
import TrustIndicators from "./sections/trustIndicators";

function App(){
  return(
    <div className="flex flex-col">
   <div className="flex-1 min-h-screen">
    <Hero/>
    <TrustIndicators/>
   </div>
    <Footer/>
    </div>
  )
}

export default App;