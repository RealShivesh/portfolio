import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import {
  About,
  Blogs,
  ContactMe,
  Footer,
  Navigation,
  Projects,
  Skills,
} from './components'
import { darkTheme, lightTheme } from './styles/Themes'

function App() {
  const [theme, setTheme] = useState('light')

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <>
        <Navigation
          theme={theme}
          setTheme={setTheme}
          themeToggler={themeToggler}
        />
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
    </ThemeProvider>
  )
}

export default App
