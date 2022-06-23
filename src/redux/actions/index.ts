import { FormData } from '../../utils/ventureForm'
export const SUBMIT_FORM = 'SUBMIT_FORM'

export const submitForm = (payload: FormData) => ({
  type: SUBMIT_FORM,
  payload
})
