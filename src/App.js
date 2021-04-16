import './App.css';
import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';
import Contact from './components/contactInfo';
import Educations from './components/education';
import Experience from './components/experience';
import Projects from './components/projects';
import Skills from './components/skills';

function App() {
  return (
    <div className="resume">
      <div>
        <Contact />
      </div>
      <div>
        <Educations />
      </div>
      <div>
        <Experience />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Skills />
      </div>
    </div>
  );
}

export default App;
