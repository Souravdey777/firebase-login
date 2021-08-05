import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const InputBox = styled.input`
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,
        'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 600;
    outline: none;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    line-height: 1;
    padding: 8px;
    width: 250px;
    border: 2px solid #ff8467;
    border-radius: 6px;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    margin: 8px;
`

const Input = ({ type, placeholder, value, onChange, ...props }) => {
    return <InputBox type={type} placeholder={placeholder} value={value} onChange={onChange} {...props} />
}

export default Input

Input.propTypes = {
    type: PropTypes.string,
    onChange: PropTypes.func,
    children: PropTypes.node,
    placeholder: PropTypes.string,
    value: PropTypes.string
}
