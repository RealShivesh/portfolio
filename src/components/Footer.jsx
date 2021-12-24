import styled from 'styled-components'

const FootRow = styled.footer`
    display: flex;
    flex-direction: column;
    flex: 1;
    padding: 0.6rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    background: #8d99ae;
`

const FootNote = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
`

export const Footer = () => {
    return (
        <>
            <FootRow>
                <FootNote>Made by Shivesh Sinha.</FootNote>
            </FootRow>
        </>
    )
}
