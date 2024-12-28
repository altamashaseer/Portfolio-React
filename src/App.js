import './App.css'
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Experience from './components/Experience/Experience';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


function App() {
  
  return (
    <div className="App">
    <Navbar/>
    <Intro/>
    <About/>
    <Skills/>
    <Experience/>
    <Projects/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
