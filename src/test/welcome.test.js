/* eslint-env jest */
import React from 'react';
import ReactDOM from 'react-dom';
import { MemoryRouter, Route } from 'react-router-dom';
import renderer from 'react-test-renderer';
import WelcomePage from 'components/welcome';

jest.mock('components/welcome/form', () => () => 'Form');

const mockProps = {
  actions: {
    auth: {
      signup: jest.fn(),
      login: jest.fn(),
    },
  },
  classes: {
    tab: 'tab',
    paper: 'paper',
    tabContent: 'tabContent',
  },
};

describe('<WelcomePage />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <MemoryRouter >
        <WelcomePage {...mockProps} />
      </MemoryRouter>,
      div,
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<MemoryRouter>
        <WelcomePage {...mockProps} />
              </MemoryRouter>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
