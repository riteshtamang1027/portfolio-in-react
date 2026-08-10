import Footer from "./components/layout/footer";
import Hero from "./sections/hero";

function App(){
  return(
    <div className="flex flex-col">
   <div className="flex-1 min-h-screen">
    <Hero/>
   </div>
    <Footer/>
    </div>
  )
}

export default App;