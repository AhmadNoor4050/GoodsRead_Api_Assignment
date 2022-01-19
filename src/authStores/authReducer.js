import {LOGUSER,LOGOUT} from './types'

const initialState = {
  loading:false,
  user : ''
}

const authReducer = (state = initialState, action) => {

     
  switch (action.type) {
      case LOGUSER:
        console.log(action.payload)
        console.log(state)
        return {
          ...state,
          loading:true,
          user: action.payload
    
        }
        
        case LOGOUT:
          console.log(action.payload)
          console.log(state)
          return {
            ...state,
            loading:false,
           
      
          }
  
      default:
        return state
        
    }

}

export default authReducer