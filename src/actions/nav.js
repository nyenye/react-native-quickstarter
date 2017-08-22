import { RESET_STACK } from '../constants'

// Nav
export const resetStack = targetScreen => ({
  type: RESET_STACK,
  targetScreen: targetScreen
})
