import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience';
import Expertise from './components/expertise/Expertise';
import Education from './components/services/Education'
import Projects from './components/portfolio/Projects'
import Achievements from './components/achievements/Achievements';
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Expertise/>
      <Education/>
      <Projects/>
      <Achievements/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
