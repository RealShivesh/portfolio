import styled from 'styled-components'

export const Name = styled.a`
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    margin: 0.5em 0;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Menu = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    padding: 0 1rem;
`

export const NavLink = styled.a`
    text-decoration: none;
    color: #000;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 1rem;
    transition: all 0.2s ease-in-out;
    &::hover {
        color: #fff;
    }
`
