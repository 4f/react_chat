/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Sidebar from 'components/chats/sidebar'

jest.mock('components/chats/sidebar/list', () => () => 'List')
jest.mock('components/chats/sidebar/new', () => () => 'new')

const mockProps = {
  create: jest.fn(),
  chats: [],
  user: {
    _id: "ura",
    firstName: 'Name',
    lastName: 'Surname',
    username: 'username',
    isMember: true,
    isCreator: true,
    isInChat: true
  },
  chat: {
    _id: '13',
    title: 'My Chat',
    messages: [
      {
        chatId: '13',
        content: 'mmm',
        sender: {},
        createdAt: '2018-03-26T11:11:11.100Z',
      }
    ]
  },
  myHash: {}
}

describe('<Sidebar />', () => {
  it('render without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Sidebar {...mockProps} />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Sidebar {...mockProps} />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
