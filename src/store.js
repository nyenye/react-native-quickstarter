import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'

import reducers from './reducers'

const middlewares = []
if (process.env.NODE_ENV !== 'production') {
  middlewares.push(createLogger())
}

const composeEnhancers =
  (process.env.NODE_ENV !== 'production' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose

const enhancer = composeEnhancers(
  applyMiddleware(thunkMiddleware, ...middlewares)
)

const store = createStore(reducers, undefined, enhancer)

export default store
