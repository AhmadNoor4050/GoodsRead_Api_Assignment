import { GETBOOKS, GETBOOK , GETALLBOOKS} from './types'

const initialState = {
  books: [],
  book: '',
  allbooks: []
}
export default function booksfetch (state = initialState, action) {
  switch (action.type) {
    case GETBOOKS: {

      return {
        ...state,
        books: action.payload
      }
    }
    case GETBOOK: {

      return {
        ...state,
        book: action.payload
      }
    }
    case GETALLBOOKS: {
// let newBook= action.payload
      return {
        ...state,
        allbooks: [...state.allbooks, ...action.payload]
      }
    }
    default:
      return state
  }
}