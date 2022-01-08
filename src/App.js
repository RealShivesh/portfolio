import {
  About,
  Blogs,
  ContactMe,
  Footer,
  Navigation,
  Projects,
  Skills,
} from './components'

function App() {
  return (
    <>
      <Navigation />
      <div id="about"></div>
      <About />
      <div id="skills"></div>
      <Skills />
      <div id="projects"></div>
      <Projects />
      <div id="blogs"></div>
      <Blogs />
      <div id="contactme"></div>
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
