import React from 'react'
import firebase from '../../utils/firebase'
import Button from '../../components/button'
import { ROUTES } from '../../utils/routes'

import { ButtonWrapper, Card, PageRoot, Error, H1 } from './style.js'
import Input from '../../components/inputBox'
import { useHistory } from 'react-router-dom'

import GoogleLogo from '../../assets/images/google-logo.png'

const Login = () => {
    const [islogin, setIsLogin] = React.useState(true)
    const [name, setName] = React.useState('')
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')

    const history = useHistory()

    const UserRegister = (name, email, password) => {
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
                console.log(err.message)
            })
    }

    const UserLogin = (email, password) => {
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

    const GoogleLogin = () => {
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
                <Card>
                    <H1>
                        Hi, <br />
                        Welcome back
                    </H1>
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    {error && <Error className="error">{error}</Error>}
                    <Button type="submit" onClick={() => UserLogin(email, password)}>
                        Login
                    </Button>
                    <Button icon={GoogleLogo} style={{ backgroundColor: 'white' }} onClick={() => GoogleLogin()}>
                        Google Login
                    </Button>
                </Card>
            ) : (
                <Card>
                    <H1>Join us</H1>
                    <Input type="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" />
                    <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
                    <Input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                    {error && <Error className="error">{error}</Error>}
                    <Button type="submit" onClick={() => UserRegister(email, password)}>
                        Register
                    </Button>
                    <Button icon={GoogleLogo} style={{ backgroundColor: 'white' }} onClick={() => GoogleLogin()}>
                        Login with Google
                    </Button>
                </Card>
            )}
        </PageRoot>
    )
}

export default Login
