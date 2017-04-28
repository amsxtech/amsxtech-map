import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import MapContainer from './MapContainer'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute} from 'react-router'
import store, { history } from './store'
import { ROOT_PATH, USER_SIGN_UP_PATH, USER_SIGN_IN_PATH, ADD_BUSINESS_PATH, BUSINESSES_INDEX_PATH } from './routes'

import RequestBusiness from './components/requestBusiness'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import RequestsIndex from './components/requestsIndex'

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path={ROOT_PATH} component={App}>
        <IndexRoute component={MapContainer} />
        <Route path={BUSINESSES_INDEX_PATH} component={RequestsIndex} />
        <Route path={USER_SIGN_IN_PATH} component={SignIn} />
        <Route path={USER_SIGN_UP_PATH} component={SignUp} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
