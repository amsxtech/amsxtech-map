import io from 'socket.io-client'
import feathers from 'feathers-client'

class API {
  constructor() {
    // Establish a Socket.io connection
    // const socket = io('http://battleshipsapi.codaisseur.cloud/')
    const socket = io('http://localhost:3030')
    // Initialize our Feathers client application through Socket.io
    // with hooks and authentication.
    this.app = feathers()
      .configure(feathers.socketio(socket))
      .configure(feathers.hooks())
      // Use localStorage to store our login token
      .configure(feathers.authentication({
        type: 'local',
        storage: window.localStorage,
      }))
  }

  service(serviceName) {
    return this.app.service(serviceName)
  }

  authenticate(user) {
    if (!user) return this.app.authenticate()

    const { email, password } = user
    console.log(email)
    console.log(password)
    return this.app.authenticate(
      Object.assign({}, { type: 'local' }, {
      email,
      password,
    }))
  }

  signOut() {
    return this.app.logout()
  }
}

export default API
