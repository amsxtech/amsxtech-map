import { USER_SIGNED_IN } from '../actions/user/sign-in'
import { USER_SIGNED_OUT } from '../actions/user/sign-out'

export default (state = JSON.parse(localStorage.getItem('user')) || {}, {type, payload} = {}) => {
  switch(type) {
    case USER_SIGNED_IN:
    localStorage.setItem('user', JSON.stringify(payload))
     return payload
     case USER_SIGNED_OUT:
     localStorage.removeItem('user')
     return {}

     default:
      return state
  }
}
