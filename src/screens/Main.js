import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'

const Main = ({ goToSub }) =>
  <View>
    <Text>Sub content</Text>
    <Button title="Go to sub" onPress={goToSub} />
  </View>

Main.navigationOptions = {
  title: 'Main screen'
}

const mapDispatchToProps = dispatch => ({
  goToSub: () => dispatch(NavigationActions.navigate({ routeName: 'Sub' }))
})

export default connect(null, mapDispatchToProps)(Main)
