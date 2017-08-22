import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import { NavigationActions } from 'react-navigation'
import { changeLanguage } from '../actions'
import { getT } from '../i18n'

const t = getT('main')

import { StyleSheet } from 'react-native'
const styles = StyleSheet.create({
  languageZone: {
    marginTop: 'auto',
    paddingTop: 30,
    paddingBottom: 30,
    paddingLeft: 30,
    paddingRight: 30
  }
})

const Main = ({ language, changeLanguage, goToSub }) =>
  <View>
    <Text>
      {t('text')}
    </Text>
    <Button title={t('button')} onPress={goToSub} />
    <View style={styles.languageZone}>
      <Button
        title={language === 'en' ? 'ES' : 'EN'}
        onPress={() =>
          language === 'en' ? changeLanguage('es') : changeLanguage('en')}
      />
    </View>
  </View>

/*This doesn't update automatically when language is changed. On willRecieveProps,
can check if language has changed, and set it again acordingly.*/
Main.navigationOptions = {
  title: t('title')
}

const mapStateToProps = ({ language }) => ({ language })

const mapDispatchToProps = dispatch => ({
  goToSub: () => dispatch(NavigationActions.navigate({ routeName: 'Sub' })),
  changeLanguage: language => dispatch(changeLanguage(language))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
