import React from 'react'
import './App.css'
import { RiWhatsappFill } from 'react-icons/ri'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { GrMail } from 'react-icons/gr'

function App() {
  return (
    <div className="App">
      <header>
        Welcome to my page I am Shivesh Sinha Yo soy Shivesh Sinha Ich bin
        Shivesh Sinha
      </header>
      <nav>
        <div className="nav-header">RealShivesh</div>
        <div className="nav-menu">
          <li className="items">About</li>
          <li className="items">Skills</li>
          <li className="items">Projects</li>
          <li className="items">Blog</li>
          <li className="items">Connect with me</li>
        </div>
      </nav>
      <section>
        Shivesh is currently a final year undergraduate student studying in BITS
        Pilani Goa Campus. I am a front end web developer with a keen awareness
        about the web development as well as UI/UX desgning. I possess different
        passions and interests, including watching football, learning languages,
        writing poetry, pushing my body to the limits by working out and
        learning more about psychology.
      </section>
      <section>
        My skills: HTML, CSS, JavaScript, React.js, Figma, C++, Git, Python,
        SASS, Bootstrap Apart from English, I have native fluency in Hindi,
        conversational fluency in Spanish and German and basic fluency in
        French.
      </section>
      <section>
        This space will contain my projects, which are yet to be done.
      </section>
      <section>
        I like to write some blogs, so here, my medium articles will be present.
      </section>
      <section>
        Wanna connect with me? Why not? You can connect with me using the
        following links:
        <div>
          <GrMail size={40} />
          <FaGithub size={40} />
          <FaLinkedin size={40} fill={'blue'} />
          <RiWhatsappFill size={40} fill={'#25D366'} />
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
