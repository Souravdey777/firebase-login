import React, { useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import { ROUTES } from '../../utils/routes'

const H1Black = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 80vh;
`
const Home = () => {
    const { state } = useLocation()
    const history = useHistory()
    useEffect(() => {
        if (state === undefined) {
            history.push(ROUTES.LOGIN_PAGE)
        }
    }, [])

    return <H1Black>Hi {state?.name}</H1Black>
}

export default Home
