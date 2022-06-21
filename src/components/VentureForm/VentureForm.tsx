import PropTypes from 'prop-types'
import React from 'react'
import VentureFormInput from './VentureFormInput'
import './ventureForm.css'

interface VentureFormIput {
  name: string
  label: string
  placeholder: string
  errorMessage: string
  required: boolean
  pattern: string
  type: string
}

const ventureLabsFormInputs: [VentureFormIput[]] = [
  [
    {
      name: 'name',
      label: 'Nome:',
      placeholder: 'Digite o seu nome',
      type: 'text',
      pattern: '^[a-zA-Z\u00C0-\u00FF]{3}[a-zA-Z\u00C0-\u00FF ]*$',
      required: true,
      errorMessage: 'Nome precisa ter mais de 2 caracteres'
    },
    {
      name: 'lastName',
      label: 'Sobrenome:',
      placeholder: 'Digite o seu sobrenome',
      type: 'text',
      pattern: '^[a-zA-Z\u00C0-\u00FF]{3}[a-zA-Z\u00C0-\u00FF ]*$',
      required: true,
      errorMessage: 'Sobrenome precisa ter mais de 2 caracteres'
    },
    {
      name: 'email',
      label: 'Email:',
      placeholder: 'Digite o seu email',
      pattern: '^[a-zA-Z0-9-_.]+@[a-zA-Z]+.com(.br)?$',
      type: 'email',
      required: true,
      errorMessage: 'Email precisa ter um formato válido'
    },
    {
      name: 'phone',
      label: 'Telefone:',
      placeholder: 'Digite o seu telefone',
      pattern: '^[0-9]{11}$',
      type: 'string',
      required: true,
      errorMessage: 'Telefone precisa ter 11 dígitos'
    }
  ]
]
function VentureForm () {
  return (
    <form className="form">
      {ventureLabsFormInputs.map((inputs, i) => {
        return inputs.map((input, j) => (
          <VentureFormInput key={`${i}-${j}`} {...input} />
        ))
      }
      )}

    </form>
  )
}

VentureForm.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape({
  }))
}

export default VentureForm
