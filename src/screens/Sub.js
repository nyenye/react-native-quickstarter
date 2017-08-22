import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { getT } from '../i18n'

const t = getT('sub')

const Sub = ({ goToMain }) =>
  <View>
    <Text>
      {t('text')}
    </Text>
    <Button title={t('button')} onPress={goToMain} />
  </View>

Sub.navigationOptions = {
  title: t('title')
}

const mapDispatchToProps = dispatch => ({
  goToMain: () => dispatch(NavigationActions.navigate({ routeName: 'Main' }))
})

export default connect(null, mapDispatchToProps)(Sub)
