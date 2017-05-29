import API from '../../lib/api'
import { history } from '../../store'

export const USER_SIGNED_IN = 'USER_SIGNED_IN'
const api = new API()
const users = api.service('users')

export default (user) => {
  return (dispatch) =>{
    api.authenticate(user)
    .then((result) => {
      dispatch(signedInUser(result))
      history.push('/businesses')
    })
    .catch((error) => {
      console.error('oops there has been an error', error)
    })
  }
}

const signedInUser = (result) => {
  return {
    type: USER_SIGNED_IN,
    payload: result.data
  }
}
