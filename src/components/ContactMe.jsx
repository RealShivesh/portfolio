import styled from 'styled-components'

const Social = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    flex-wrap: wrap;
    & a {
        margin: 0px 20px;
    }
`

export default function ContactMe() {
    return (
        <>
            <div>Feel free to connect with me here.</div>
            <Social>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/Real_Shivesh"
                >
                    Twitter
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://linkedin.com/in/realshivesh"
                >
                    LinkedIn
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://pinterest.com/realshivesh"
                >
                    Pinterest
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/realshivesh"
                >
                    GitHub
                </a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://medium.com/@realshivesh"
                >
                    Medium
                </a>
            </Social>
        </>
    )
}
