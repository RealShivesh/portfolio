import './App.css'
import { RiWhatsappFill } from 'react-icons/ri'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'
import styled from 'styled-components'

const NavMenuButton = styled.a`
  color: yellow;
  text-decoration: none;
`

function App() {
  return (
    <div className="App">
      <header>
        Welcome to my page
        <div>I am Shivesh Sinha</div>
        <div>Yo soy Shivesh Sinha</div>
        <div>Ich bin Shivesh Sinha</div>
      </header>
      <nav>
        <div className="nav-header">RealShivesh</div>
        <div className="nav-menu">
          <NavMenuButton href="#about" className="items">
            About
          </NavMenuButton>
          <NavMenuButton href="#skills" className="items">
            Skills
          </NavMenuButton>
          <NavMenuButton href="#projects" className="items">
            Projects
          </NavMenuButton>
          <NavMenuButton href="#blog" className="items">
            Blog
          </NavMenuButton>
          <NavMenuButton href="#contactme" className="items">
            Connect with me
          </NavMenuButton>
        </div>
      </nav>
      <h1 id="about">About Me</h1>
      <section>
        Shivesh is currently a final year undergraduate student studying in BITS
        Pilani Goa Campus. I am a front end web developer with a keen awareness
        about the web development as well as UI/UX desgning. I possess different
        passions and interests, including watching football, learning languages,
        writing poetry, pushing my body to the limits by working out and
        learning more about psychology.
      </section>
      <h1 id="skills">Skills</h1>
      <section>
        My skills:
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Figma</li>
        <li>Git</li>
        <li>Python</li>
        <li>SASS</li>
        <li>Bootstrap</li>
        Apart from English, I have native fluency in Hindi, conversational
        fluency in Spanish and German and basic fluency in French.
      </section>
      <h1 id="projects">Projects</h1>
      <section>
        This space will contain my projects, which are yet to be done.
      </section>
      <h1 id="blogs">Blogs</h1>
      <section>
        I like to write some blogs, so here, my medium articles will be present.
      </section>
      <h1 id="contactme">Connect with me</h1>
      <section>
        Wanna connect with me? Why not? You can connect with me using the
        following links:
        <div>
          <GrMail size={40} style={{ padding: 20 }} />
          <FaGithub size={40} style={{ padding: 20 }} />
          <FaLinkedin size={40} fill={'blue'} style={{ padding: 20 }} />
          <RiWhatsappFill size={40} fill={'#25D366'} style={{ padding: 20 }} />
        </div>
      </section>
      <footer>
        Created by Shivesh Sinha Copyright (c) 2021 <FaGithub size={30} />{' '}
        github.com/realshivesh
      </footer>
    </div>
  )
}

export default App
