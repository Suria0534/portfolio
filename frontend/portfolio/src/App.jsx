
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './components/Footer';
// import IntroCharacter from './components/IntroCharacter';

function App() {
  return (
    <main className="portfolio">
      <div className="starfield" aria-hidden="true">
        <div className="stars stars-small" />
        <div className="stars stars-medium" />
        <div className="stars stars-large" />
      </div>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
