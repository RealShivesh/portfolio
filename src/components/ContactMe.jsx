import { Heading, Page, Social } from '../styles/Main.styles'
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
              <contact.icon />
            </a>
            {contact.mode}
          </Social>
        ))}
      </Page>
    </>
  )
}
