import styled from 'styled-components'

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    //justify content by taking center as prop
    justify-content: ${(props) => props.justifyContent || 'center'};
    align-items: center;
    margin-bottom: 1rem;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
    margin: 1rem;
    border-radius: 0.5rem;
    background-color: #abc;
`
