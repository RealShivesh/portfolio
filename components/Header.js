import Link from 'next/link'
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'
import { Menu, Name, NavLink } from '../styles/Header.styles'

export const Header = () => {
    return (
        <div>
            <Name>
                <Link href="/">RealShivesh</Link>
            </Name>
            <Menu>
                <NavLink>
                    {' '}
                    <Link href="/about">About</Link>
                </NavLink>
                <NavLink>
                    <Link href="/projects">
                        <a>Projects</a>
                    </Link>
                </NavLink>
                <NavLink>
                    <Link href="/contact">
                        <a>Contact</a>
                    </Link>
                </NavLink>
            </Menu>
        </div>
    )
}
