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
import { ContactList } from '../data/ContactList'

export const ContactMe = () => {
  return (
    <>
      <Page>
        <Heading>Let's get in touch!</Heading>
        <div>
          Wanna connect with me? Why not? You can connect with me using the
          following links:
        </div>
        {ContactList.map((contact) => (
          <Social>
            <a target="_blank" rel="noreferrer" href={contact.link}>
              <contact.icon fill={'#1DA1F2'} />
            </a>
            {contact.mode}
          </Social>
        ))}
      </Page>
    </>
  )
}
