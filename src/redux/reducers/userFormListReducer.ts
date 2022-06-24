import { SUBMIT_FORM } from '../actions'
const userFormListReducer = (state = [], action: {state: FormData, type: string, payload: any}) => {
  switch (action.type) {
    case SUBMIT_FORM:
      return [...state, { id: state.length, ...action.payload }]
    default:
      return state
  }
}

export default userFormListReducer
