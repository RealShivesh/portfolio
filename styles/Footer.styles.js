import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    padding: 0 1rem;
`

export const Icon = styled.a`
    color: #000;
    font-size: 1.25rem;
    font-weight: bold;
    margin: 0 1rem;
    transition: all 0.2s ease-in-out;
    &::hover {
        color: #fff;
    }
`
