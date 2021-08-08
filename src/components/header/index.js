import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Button from '../button'

const HeaderRoot = styled.header`
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 64px;
    background-color: #eeeeee22;
    backdrop-filter: blur(10px);
    box-shadow: 2px 0px 15px #23262666;
`

const Image = styled.img`
    margin: 8px;
    width: 150px;
`

const Links = styled.div`
    display: flex;
    align-items: center;
`

const EachLink = styled.div`
    margin: 0 16px;
    color: white;
    font-weight: bold;
`

const Header = ({ logo, user, logout, options, login, ...props }) => {
    return (
        <HeaderRoot {...props}>
            <Image src={logo} alt={logo} />
            <Links>
                {options &&
                    options.map(({ optionSelected, isOptionSelected, text }, idx) => (
                        <EachLink
                            key={idx}
                            role="button"
                            tabIndex={idx}
                            styling="link"
                            style={{ color: isOptionSelected ? '#ff8467' : '#ffffff' }}
                            onClick={() => optionSelected()}
                            onKeyDown={() => optionSelected()}
                        >
                            {text}
                        </EachLink>
                    ))}
                {user ? (
                    <Button onClick={logout} style={{ margin: '8px', width: '100px' }}>
                        Logout
                    </Button>
                ) : (
                    <Button onClick={login} style={{ margin: '8px', width: '100px' }}>
                        Login
                    </Button>
                )}
            </Links>
        </HeaderRoot>
    )
}

export default Header

Header.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    logo: PropTypes.string.isRequired,
    user: PropTypes.string,
    options: PropTypes.arrayOf(PropTypes.object)
}
