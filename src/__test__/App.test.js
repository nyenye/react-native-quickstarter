import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'
import { Provider } from 'react-redux'
import store from '../store'
import App from '../App'

describe('App', function() {
  it('renders correctly', () => {
    const component = renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    )
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
  })
})
