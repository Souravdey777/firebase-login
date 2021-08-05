import React from 'react'
import firebase from '../../utils/firebase'
import Button from '../../components/button'
import { ROUTES } from '../../utils/routes'

import { ButtonWrapper, Card, PageRoot, Error, H1 } from './style.js'
import Input from '../../components/input'
import { useHistory } from 'react-router-dom'

import GoogleLogo from '../../assets/images/google-logo.png'
import { isValidEmail, isValidPassword } from '../../utils/validators'

const Login = () => {
    const [islogin, setIsLogin] = React.useState(true)
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const history = useHistory()

    const userRegister = (name, email, password) => {
        if (checkInput(email, password))
            firebase
                .register(name, email, password)
                .then(({ user }) => {
                    console.log('Registered', user.displayName)
                    history.push({
                        pathname: ROUTES.HOME_PAGE,
                        state: { name: user.displayName }
                    })
                })
                .catch((err) => {
                    setError(err.message)
                })
    }

    const userLogin = (email, password) => {
        if (checkInput(email, password))
            firebase
                .login(email, password)
                .then(({ user }) => {
                    console.log('Registered', user.displayName)
                    history.push({
                        pathname: ROUTES.HOME_PAGE,
                        state: { name: user.displayName }
                    })
                })
                .catch((err) => {
                    setError(err.message)
                })
    }

    const googleLogin = () => {
        firebase
            .doSignInWithGoogle()
            .then(({ user }) => {
                console.log('Registered', user.displayName)
                history.push({
                    pathname: ROUTES.HOME_PAGE,
                    state: { name: user.displayName }
                })
            })
            .catch((err) => {
                setError(err.message)
            })
    }

    const checkInput = (email, password) => {
        setError('')
        if (!email || !password) {
            setError('Please enter email and password')
        } else if (!isValidEmail(email)) {
            setError('Please enter valid email')
        } else if (!isValidPassword(password)) {
            setError('Please enter valid password')
        } else {
            return true
        }
        return false
    }

    return (
        <PageRoot>
            <ButtonWrapper>
                <Button
                    onClick={() => {
                        setIsLogin(true)
                        setName('')
                        setEmail('')
                        setPassword('')
                        setError('')
                    }}
                    primary={islogin}
                >
                    Login
                </Button>
                <Button
                    onClick={() => {
                        setIsLogin(false)
                        setName('')
                        setEmail('')
                        setPassword('')
                        setError('')
                    }}
                    primary={!islogin}
                >
                    Register
                </Button>
            </ButtonWrapper>
            {islogin ? (
                <Card onSubmit={(e) => e.preventDefault()}>
                    <H1>
                        Hi, <br />
                        Welcome back
                    </H1>
                    <Input
                        autocomplete
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <Input
                        autocomplete
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    {error && <Error className="error">{error}</Error>}
                    <Button type="submit" onClick={() => userLogin(email, password)}>
                        Login
                    </Button>
                    <Button icon={GoogleLogo} style={{ backgroundColor: 'white' }} onClick={() => googleLogin()}>
                        Google Login
                    </Button>
                </Card>
            ) : (
                <Card onSubmit={(e) => e.preventDefault()}>
                    <H1>Join us</H1>
                    <Input
                        autocomplete
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    />
                    <Input
                        autocomplete
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <Input
                        autocomplete
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    {error && <Error className="error">{error}</Error>}
                    <Button type="submit" onClick={() => userRegister(email, password)}>
                        Register
                    </Button>
                    <Button icon={GoogleLogo} style={{ backgroundColor: 'white' }} onClick={() => googleLogin()}>
                        Google Login
                    </Button>
                </Card>
            )}
        </PageRoot>
    )
}

export default Login
