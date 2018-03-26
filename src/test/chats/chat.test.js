/* eslint-env jest */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Chat from 'components/chats/chat';

jest.mock('components/chats/chat/messages', () => () => 'Messages');
jest.mock('components/chats/chat/input', () => () => 'inputMessage');

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
  join: jest.fn(),
  send: jest.fn(),
};

describe('<Chat />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter>
        <Chat {...mockProps} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly ', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <Chat {...mockProps} />
              </MemoryRouter>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
