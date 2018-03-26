/* eslint-env jest */
import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import Avatar from 'components/ava'

describe('<Avatar />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<Avatar colorFrom="12345" label="smit" />, div)
    ReactDOM.unmountComponentAtNode(div)
  })

  it('renders correctly', () => {
    const tree = renderer.create(<Avatar colorFrom="12345" label="smit" />).toJSON()

    expect(tree).toMatchSnapshot()
  })
})
