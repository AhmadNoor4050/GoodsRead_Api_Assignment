import {LOGUSER} from './types'
export const  logUser = user => dispatch => {
//   console.log(auth)
  dispatch({
    type: LOGUSER,
    payload: user
  }
  )
    
  }
 


