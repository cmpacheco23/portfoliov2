import carla from '../assets/carla.svg'
import githublogo from '../assets/githublogo.svg'
import linkedinlogo from '../assets/linkedinlogo.svg'
import Contact from '../components/Contact/Contact';
import Experience from '../components/Experience/Experience';
import Projects from '../components/Projects/Projects';
import Skills from '../components/Skills/Skills';

const HomePage = () => {
  return ( 
    <div>
      <div>
        <h1>Carla Pacheco</h1>
        <h1>New York</h1>
      </div>
      <div>
        <img src={carla} alt="Carla Headshot Image" />
        <p>Full Stack, Software & Web Development</p>
        <p>Latinx NYC based Software Engineer</p>
        <p>Background in Marketing & Customer Success at MarTech SaaS companies</p>
        <p>Python, JavaScript, HTML, CSS</p>
      </div>
      <div>
        <img src={linkedinlogo} alt="LinkedIn Logo" />
        <img src={githublogo} alt="Github Logo" />
      </div>
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact/>
      
    </div>
  );
}

export default HomePage;