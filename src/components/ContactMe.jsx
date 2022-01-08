import { Heading, Page, Social } from '../styles/Main.styles'
import {
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaGithub,
  FaMedium,
  FaWhatsapp,
} from 'react-icons/fa'
import { SiGmail } from 'react-icons/si'

export const ContactMe = () => {
  return (
    <>
      <Page>
        <Heading>Contact Me</Heading>
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
            <FaTwitter size={60} fill={'#1DA1F2'} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/realshivesh"
          >
            <FaLinkedin size={60} fill={'#0e76a8'} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://pinterest.com/realshivesh"
          >
            <FaPinterest size={60} fill={'#E60023'} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/realshivesh"
          >
            <FaGithub size={60} fill={'#211F1F'} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://medium.com/@realshivesh"
          >
            <FaMedium size={60} fill={'#000'} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:realshivesh@gmail.com"
          >
            <SiGmail size={60} fill={'red'} />
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://wa.me/+918789110751"
          >
            <FaWhatsapp size={60} fill={'#25D366'} />
          </a>
        </Social>
      </Page>
    </>
  )
}
