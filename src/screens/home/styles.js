import styled from 'styled-components'

const PageRoot = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #191034;
`

const H1 = styled.h1`
    margin: 128px 16px;
    color: white;
    text-align: center;
`

const H2 = styled.h2`
    margin: 16px;
    color: white;
    text-align: center;
`

const CardWrapper = styled.section`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-evenly;
    background: #241d4c;
    border-radius: 32px;
    width: 80%;
    padding: 32px;
    margin: 64px 0;
`

const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Image = styled.img`
    width: 200px;
    border-radius: 32px;
`

const TextSpace = styled.section`
    height: 500px;
    background: #241d4c;
    width: 100%;
`

const Footer = styled.footer`
    height: 500px;
    background: #241d4c;
    width: 100%;
`

export { PageRoot, H1, H2, CardWrapper, Card, Image, Footer, TextSpace }
