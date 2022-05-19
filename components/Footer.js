import Link from 'next/link'
import React from 'react'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'

function Footer() {
    return (
        <div>
            <div>
                <Link href="https://github.com/">
                    <a target="_blank" rel="noopener noreferrer">
                        <AiFillGithub size={32} />
                    </a>
                </Link>
                <Link href="https://linkedin.com/in/realshivesh">
                    <a target="_blank" rel="noopener noreferrer">
                        <AiFillLinkedin size={32} />
                    </a>
                </Link>
                <Link href="https://instagram.com/realshivesh">
                    <a target="_blank" rel="noopener noreferrer">
                        <AiFillInstagram size={32} />
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Footer
