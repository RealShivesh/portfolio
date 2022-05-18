import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { Name } from '../styles/Header.styles'

export const Header = () => {
    return (
        <div>
            <div>
                <Name>
                    <Link href="/">RealShivesh</Link>
                </Name>
                <Link href="/about">About</Link>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </div>
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
