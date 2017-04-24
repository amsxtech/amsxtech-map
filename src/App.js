import React, {PureComponent} from 'react'
import SignIn from './components/SignIn'
import SignUp from './components/SignUp'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import muiTheme from './assets/styles/theme'

import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();



class App extends PureComponent {
  static childContextTypes = {
    muiTheme: React.PropTypes.object.isRequired,
  }
  getChildContext(){
    return { muiTheme }
  }
  render() {
    return (
      <MuiThemeProvider muiTheme={muiTheme}>
        <div className="app">
          {this.props.children}
      </div>
      </MuiThemeProvider>

    )
  }
}

export default App
