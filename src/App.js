import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { addNavigationHelpers, StackNavigator } from 'react-navigation'

//Screens
import Main from './screens/Main'
import Sub from './screens/Sub'

export const AppNavigator = StackNavigator({
  Main: {
    screen: Main
  },
  Sub: {
    screen: Sub
  }
})

const App = ({ dispatch, nav }) =>
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired
}

const mapStateToProps = ({ nav }) => ({
  nav
})

export default connect(mapStateToProps)(App)
