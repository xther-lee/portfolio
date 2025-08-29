import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Bar/Header';
import Footer from './Bar/Footer';
import Home from './Main/Home';
import About from './About/About';
import Contact from './About/Contact';
import Project from './Project/Project';
import Intro from './Main/Intro';
import Skills from './Main/Skills';
import Explain from './Main/Explain';
import ProjectSub from './Project/ProjectSub';
import ProjectDetail from './Project/ProjectDetail';

/* 2025 포트폴리오 */
function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <>
            <Intro />
            <Home />
            <Skills/>
            <Explain/>
            </>
            } />
            <Route path="/project" element={<Project />} />
        <Route path="/project" element={<ProjectSub />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
