import API from '../../lib/api'
import { history } from '../../store'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'
const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) =>{
    console.log('logging in user...')
    console.log(user)
    api.authenticate(user)
    .then((result) => {
      console.log('user successfully logged in')
      dispatch(signedInUser(result))
      history.push('/')
    })
    .catch((error) => {
      console.error('oops there has been an error', error)
    })
  }
}

const signedInUser = (result) => {
  console.log('dispatching signed in user')
  console.log(result.data)
  return {
    type: USER_SIGNED_IN,
    payload: result.data
  }
}
