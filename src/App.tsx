import Footer from "./components/layout/footer";
import Navbar from "./components/layout/navbar";

function App(){
  return(
    <div className="flex flex-col">
   <Navbar/>
   <div className="flex-1 min-h-screen"></div>
    <Footer/>
    </div>
  )
}

export default App;