import { Page } from '../styles/Main.styles'

export const Projects = () => {
  return (
    <>
      <Page>
        <h1>Projects</h1>
        <article>
          <h2>Country database using JavaScript</h2>
          <a
            href="http://realshivesh.github.io/countries"
            target="_blank"
            rel="noreferrer"
          >
            Country database using Vanilla JavaScript
          </a>
          <div>
            This is a country section which contains various information about
            different countries, their capital, language, etc. I will be
            upgrading this project to react as well, but for now, let's stick to
            vanilla.
          </div>
        </article>
        <article>
          <h2>Weather App using React and Styled Components</h2>
          <a
            href="http://realshivesh.github.io/weather-pwa"
            target="_blank"
            rel="noreferrer"
          >
            Weather App
          </a>
          <div>
            This is a weather app which has been created using React and Styled
            components.
          </div>
        </article>
      </Page>
    </>
  )
}
