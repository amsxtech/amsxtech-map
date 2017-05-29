import API from '../../lib/api'
import signIn from './sign-in'

const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) =>{
    users.create(user)
    .then((result) => {
      dispatch(signIn(user))
    })
    .catch((error) => {
      console.error('oops there has been an error')
      console.error(error)
    })
  }
}
