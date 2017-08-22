import {
  SET_LANGUAGE,
  FALLBACK_LANGUAGE,
  FALLBACK_TO_DEFAULT_LANGUAGE
} from '../constants'

const initialState = FALLBACK_LANGUAGE

const language = (state = initialState, action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.lng
    case FALLBACK_TO_DEFAULT_LANGUAGE:
      return FALLBACK_LANGUAGE
    default:
      return state
  }
}

export default language
