/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import ChatHeader from 'components/chats/header';

jest.mock('components/ava', () => () => 'Avatar');
jest.mock('components/chats/header/chat_menu', () => () => 'ChatMenu');
jest.mock('components/chats/header/user_menu', () => () => 'UserMenu');

const mockProps = {
  user: {
    _id: 'ura',
    firstName: 'Name',
    lastName: 'Surname',
    username: 'username',
    isMember: true,
    isCreator: true,
    isInChat: true,
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
      },
    ],
  },
  logout: jest.fn(),
  redirect: jest.fn(),
  leaveChat: jest.fn(),
  joinChat: jest.fn(),
  deleteChat: jest.fn(),
  editUser: jest.fn(),
};

describe('<ChatHeader />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ChatHeader {...mockProps} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer.create(<ChatHeader {...mockProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without active chat', () => {
    const tree = renderer.create(<ChatHeader {...mockProps} activeChat={null} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
