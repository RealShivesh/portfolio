import { FooterRow } from '../styles/Main.styles'
import { FaGithub } from 'react-icons/fa'

export const Footer = () => {
  const CurrentYear = new Date().getFullYear()
  return (
    <>
      <FooterRow>
        Created by Shivesh Sinha Copyright (c) {CurrentYear}{' '}
        <FaGithub size={30} />{' '}
        <a href="http://github.com/realshivesh">github.com/realshivesh</a>
      </FooterRow>
    </>
  )
}
