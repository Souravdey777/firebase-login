import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const ButtonDiv = styled.button`
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    border: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    padding: 8px 32px;
    width: 200px;
    border: 2px solid #ff8467;
    border-radius: 6px;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    margin: 24px;
    color: ${(props) => (props?.primary ? '#ffffff' : '#ff8467')};
    background: ${(props) => (props?.primary ? '#ff8467' : '#191034')};
`

const ButtonIcon = styled.img`
    width: 18px;
    height: 18px;
    margin-right: 16px;
`

const Button = ({ type, onClick, icon, children, ...props }) => {
    return (
        <ButtonDiv type={type} onClick={onClick} {...props}>
            {icon && <ButtonIcon src={icon} alt={children} />}
            {children}
        </ButtonDiv>
    )
}

export default Button

Button.propTypes = {
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    onClick: PropTypes.func,
    icon: PropTypes.string,
    children: PropTypes.node,
    primary: PropTypes.bool
}
