import Link from 'next/link'
import React from 'react'
import {
    AiFillGithub,
    AiFillInstagram,
    AiFillLinkedin,
    AiFillTwitterCircle,
} from 'react-icons/ai'
import { Icon, Row } from '../styles/Footer.styles'

function Footer() {
    return (
        <Row>
            <Icon
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/realshivesh"
            >
                <AiFillGithub size={32} />
            </Icon>
            <Icon
                target="_blank"
                rel="noopener noreferrer"
                href="https://linkedin.com/in/realshivesh"
            >
                <AiFillLinkedin size={32} />
            </Icon>
            <Icon
                target="_blank"
                rel="noopener noreferrer"
                href="https://twitter.com/Real_Shivesh"
            >
                <AiFillTwitterCircle size={32} />
            </Icon>
        </Row>
    )
}

export default Footer
