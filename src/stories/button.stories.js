import React from 'react'
import Button from '../components/button'
import GoogleLogo from '../assets/images/google-logo.png'

export default {
    title: 'Unlu Design System/Button',
    component: Button
}

const Template = (args) => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
    type: 'submit',
    children: 'Primary Button',
    primary: true
}

export const Secondary = Template.bind({})
Secondary.args = {
    type: 'submit',
    children: 'Secondary Button',
    primary: false
}

export const IconButton = Template.bind({})
IconButton.args = {
    type: 'submit',
    children: 'Icon Button',
    primary: false,
    icon: GoogleLogo,
    style: {
        backgroundColor: '#fff'
    }
}

export const WhiteButton = Template.bind({})
WhiteButton.args = {
    type: 'submit',
    children: 'White Button',
    primary: false,
    style: {
        backgroundColor: '#fff'
    }
}
