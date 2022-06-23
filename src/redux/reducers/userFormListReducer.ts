import { SUBMIT_FORM } from '../actions'
const userFormListReducer = (state = [], action: {type: string, payload: FormData}) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return [...state, action.payload]
    default:
      return state
  }
}

export default userFormListReducer
