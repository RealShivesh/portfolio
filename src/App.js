import {
  About,
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
      <h1 id="blogs">Blogs</h1>
      <section>
        I like to write some blogs, so here, my medium articles will be present.
      </section>
      <div id="contactme"></div>
      <ContactMe />
      <Footer />
    </>
  )
}

export default App
