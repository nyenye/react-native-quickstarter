import { combineReducers } from 'redux'

import nav from './nav'
import language from './language'

const chatApp = combineReducers({ nav, language })

export default chatApp
