import React from 'react'
import Input from '../components/input'

export default {
    title: 'Unlu Design System/Input',
    component: Input
}

const Template = (args) => <Input {...args} />

export const EmailInputBox = Template.bind({})
EmailInputBox.args = {
    type: 'email',
    placeholder: 'Email'
}

export const PasswordInputBox = Template.bind({})
PasswordInputBox.args = {
    type: 'password',
    placeholder: 'Password'
}

export const NameInputBox = Template.bind({})
NameInputBox.args = {
    type: 'name',
    placeholder: 'Name'
}
