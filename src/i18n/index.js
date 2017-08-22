import i18n from 'i18next'

import { FALLBACK_LANGUAGE } from '../constants'
import locales from './locales'

i18n.init({
  fallbackLng: FALLBACK_LANGUAGE,
  lng: FALLBACK_LANGUAGE,
  debug: false,
  resources: locales
})

const getT = namespace => {
  return i18n.getFixedT(null, namespace)
}

export default i18n
export { getT }
