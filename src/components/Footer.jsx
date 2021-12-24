import styled from 'styled-components'
import { FaGithub } from 'react-icons/fa'

const FootRow = styled.footer`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 0.6rem 0;
  border-top: 1px solid #eaeaea;
  justify-content: center;
  background: #8d99ae;
  text-align: center;
`

export const Footer = () => {
  const CurrentYear = new Date().getFullYear()
  return (
    <>
      <FootRow>
        Created by Shivesh Sinha Copyright (c) {CurrentYear}{' '}
        <FaGithub size={30} /> github.com/realshivesh
      </FootRow>
    </>
  )
}
