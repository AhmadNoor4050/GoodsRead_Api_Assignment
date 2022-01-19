import {LOGOUT} from './types'

  export const  logOut = user => dispatch => {
    //   console.log(auth)
      dispatch({
        type: LOGOUT,
        payload: user
      }
      )
        
      }