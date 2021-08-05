import styled from 'styled-components'

const ButtonWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 600px;
    width: 100%;
`

const Card = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 600px;
    width: 100%;
`

const PageRoot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #191034;
`

const Error = styled.p`
    color: red;
    text-align: center;
`

const H1 = styled.h1`
    color: white;
    text-align: center;
    font-size: 2.5em;
    font-weight: bold;
`

export { ButtonWrapper, Card, PageRoot, Error, H1 }
