import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { Name } from '../styles/Header.styles'

export const Header = () => {
    return (
        <div>
            <Name>
                <Link href="/">RealShivesh</Link>
            </Name>
            <div>
                <Link href="/about">About</Link>
                <Link href="/projects">
                    <a>Projects</a>
                </Link>
                <Link href="/contact">
                    <a>Contact</a>
                </Link>
            </div>
        </div>
    )
}
