import { SET_LANGUAGE } from '../constants'
import i18n from '../i18n'

const setLanguage = lng => ({
  type: SET_LANGUAGE,
  lng
})

// TODO: setLanguageToDefault

// TODO: loadDefaultLanguage

const changeLanguage = lng => async dispatch => {
  i18n.changeLanguage(lng, (err, t) => {
    // TODO: Hightlight error on UI.
    if (err)
      return console.log('something went wrong loading new language', err)
    dispatch(setLanguage(lng))
  })
}

export { changeLanguage }
