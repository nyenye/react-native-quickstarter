import React from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

const Sub = ({ goToMain }) =>
  <View>
    <Text>Sub content</Text>
  </View>

Sub.navigationOptions = {
  title: 'Sub screen'
}

const mapDispatchToProps = dispatch => ({
  goToMain: () => dispatch(NavigationActions.navigate({ routeName: 'Main' }))
})

export default connect(null, mapDispatchToProps)(Sub)
