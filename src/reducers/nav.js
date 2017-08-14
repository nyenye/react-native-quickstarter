import { NavigationActions } from 'react-navigation'
import { RESET_STACK } from '../constants'
import { AppNavigator } from '../App'

const firstAction = NavigationActions.reset({
  index: 0,
  actions: [NavigationActions.navigate({ routeName: 'Main' })]
})
const initialState = AppNavigator.router.getStateForAction(firstAction)

const nav = (state = initialState, action) => {
  let nextState
  switch (action.type) {
    case RESET_STACK:
      const resetAction = NavigationActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: action.targetScreen })
        ]
      })
      nextState = AppNavigator.router.getStateForAction(resetAction, state)
      break
    default:
      nextState = AppNavigator.router.getStateForAction(action, state)
      break
  }

  return nextState || state
}

export default nav
