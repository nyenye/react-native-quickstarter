import Expo from 'expo'
import React from 'react'
import { Provider } from 'react-redux'

import App from './App'
import store from './store'

const ProvidedApp = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

Expo.registerRootComponent(ProvidedApp)
