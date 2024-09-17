import About from "./components/About";
import { Contact } from "./components/Contact";
import Hero from "./components/Hero"; 
import Navbar from "./components/Navbar";  
import { Projects } from "./components/Projects";
import { Technologies } from "./components/Technologies";

export default function App() { 
  return ( 
    <> 
      <div className="min-h-screen overflow-x-hidden text-neutral-200 antialiased selection:text-black selection:bg-white"> 
        <div className="fixed top-0 z-[-10] h-full w-full bg-neutral-950">
          <div className="absolute top-0 z-[-9] h-full w-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>   
        </div> 
        <div className="container mx-auto px-8 relative z-10"> 
          <Navbar /> 
          <Hero /> 
          <About/>
          <Technologies/>
          <Projects/>
          <Contact/>
        </div> 
      </div> 
    </> 
  ); 
}
