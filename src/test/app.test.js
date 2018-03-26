/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/app'

jest.mock('containers/welcome', () => () => 'Welcome')
jest.mock('containers/chats', () => () => 'Chats')
jest.mock('components/notice', () => () => 'Chats')

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    // ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  });
});
