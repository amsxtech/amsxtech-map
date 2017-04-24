import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute} from 'react-router'
import store, { history } from './store'
import { ROOT_PATH, USER_SIGN_UP_PATH, USER_SIGN_IN_PATH, ADD_BUSINESS_PATH } from './routes'

import RequestBusiness from './components/requestBusiness'
import SignIn from './components/SignIn'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={ROOT_PATH} component={App}>
        <IndexRoute component={RequestBusiness} />
        <Route path={USER_SIGN_IN_PATH} component={SignIn} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
