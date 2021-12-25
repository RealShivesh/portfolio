import styled from 'styled-components'
import { GrMail } from 'react-icons/gr'
import {
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaGithub,
  FaMedium,
  FaWhatsapp,
  FaEnvelope,
} from 'react-icons/fa'

const Social = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-grow: 1;
  flex-wrap: wrap;
  & a {
    margin: 20px;
  }
`

export const ContactMe = () => {
  return (
    <>
      <h1>Contact Me</h1>
      <div>
        Wanna connect with me? Why not? You can connect with me using the
        following links:
      </div>
      <Social>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Real_Shivesh"
        >
          <FaTwitter size={40} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://linkedin.com/in/realshivesh"
        >
          <FaLinkedin size={40} fill={'blue'} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://pinterest.com/realshivesh"
        >
          <FaPinterest size={40} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/realshivesh"
        >
          <FaGithub size={40} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://medium.com/@realshivesh"
        >
          <FaMedium size={40} />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://mailto:realshivesh@gmail.com"
        >
          <FaEnvelope size={40} />
        </a>
        <a target="_blank" rel="noreferrer" href="https://wa.me/+918789110751">
          {' '}
          <FaWhatsapp size={40} />{' '}
        </a>
      </Social>
    </>
  )
}
