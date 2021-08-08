import React, { useRef } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import firebase from '../../utils/firebase'
import Header from '../../components/header'
import { PageRoot, H1, H2, CardWrapper, Card, Image, Footer, TextSpace } from './styles.js'
import { ROUTES } from '../../utils/routes'

import image from '../../assets/images/unnamed.jpg'

// The user managment is done through the routes only. Not ideal for any complex web application.
// This is a simple implementation as the primary objective was firebase login.

const Home = () => {
    const { state } = useLocation()
    const history = useHistory()
    const Section1 = useRef()
    const Section2 = useRef()
    const Section3 = useRef()
    const Section4 = useRef()

    const headerOptions = [
        {
            text: 'Section1',
            optionSelected: () => Section1.current.scrollIntoView()
        },
        {
            text: 'Section2',
            optionSelected: () => Section2.current.scrollIntoView()
        },
        {
            text: 'Section3',
            optionSelected: () => Section3.current.scrollIntoView()
        },
        {
            text: 'Section4',
            optionSelected: () => Section4.current.scrollIntoView()
        }
    ]

    const userLogout = () => {
        firebase.logout().then(() => {
            console.log('Logged Out')
            history.push(ROUTES.LOGIN_PAGE)
        })
    }
    return (
        <PageRoot>
            <Header
                login={() => history.push(ROUTES.LOGIN_PAGE)}
                logout={() => userLogout()}
                logo="https://img.shields.io/badge/-Firebase Login App-ff8467?style=flat"
                user={state?.name}
                options={headerOptions}
            />
            <div ref={Section1}>
                <H1>Hi {state?.name ? `${state?.name}` : `Join Us`}</H1>
                <H2>Welcome to the Firebase Login App</H2>
            </div>
            <CardWrapper ref={Section2}>
                <Card>
                    <Image src={image} alt="dummy" />
                    <H2>Image 1</H2>
                </Card>
                <Card>
                    <Image src={image} alt="dummy" />
                    <H2>Image 2</H2>
                </Card>
                <Card>
                    <Image src={image} alt="dummy" />
                    <H2>Image 3</H2>
                </Card>
            </CardWrapper>
            <TextSpace ref={Section3}>
                <H2>Text Space</H2>
            </TextSpace>
            <Footer ref={Section4}>
                <H2>Footer</H2>
            </Footer>
        </PageRoot>
    )
}

export default Home
