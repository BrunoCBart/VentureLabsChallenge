import PropTypes from 'prop-types'
import React, { useEffect, useState } from 'react'
import VentureFormInput from './VentureFormInput'
import './ventureForm.css'

const INITIAL_FORM_DATA = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  cep: '',
  address: '',
  address2: '',
  birthDate: '',
  cpf: '',
  monthlyIncome: ''
}

interface VentureFormIput {
  name: keyof typeof INITIAL_FORM_DATA
  label: string
  placeholder?: string
  errorMessage?: string
  required?: boolean
  pattern: string
  type: string
  options?: string[]
}

const ventureLabsFormInputs: VentureFormIput[][] = [
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
  ],
  [
    {
      name: 'cep',
      label: 'Cep:',
      placeholder: 'Digite seu cep',
      pattern: '^[0-9]{8}$',
      type: 'string',
      required: true,
      errorMessage: 'Cep precisa ter 8 dígitos'
    },
    {
      name: 'address',
      label: 'Address:',
      placeholder: 'digite seu endereço',
      pattern: '^[a-zA-Z]{6,}$',
      type: 'string',
      required: true,
      errorMessage: 'Endereço precisa ter 6 dígitos'
    },
    {
      name: 'address2',
      label: 'Address2:',
      placeholder: 'digite seu endereço',
      pattern: '^[a-zA-Z]{6,}$',
      type: 'string',
      required: false,
      errorMessage: 'Endereço precisa ter 6 dígitos'
    }
  ],
  [
    {
      name: 'birthDate',
      label: 'Data ter Nascimento:',
      pattern: '^[a-zA-Z]{6,}$',
      type: 'date',
      required: false,
      errorMessage: 'Endereço precisa ter 6 dígitos'
    },
    {
      name: 'cpf',
      label: 'CPF:',
      pattern: '^[0-9]{11}$',
      type: 'string',
      required: true,
      errorMessage: 'Endereço precisa ter 11 dígitos'
    },
    {
      name: 'monthlyIncome',
      label: 'Salário:',
      pattern: '^[0-9]{5}$',
      type: 'select',
      options: [
        'Entre 0.00R$ e 1000.00R$',
        'Entre 1000.00R$ e 2000.00R$',
        'Entre 2000.00R$ e 3000.00R$',
        'Entre 3000.00R$ e 5000.00R$',
        'Entre 5000.00R$ e 10.000.00R$',
        'Mais de 10.000.00R$'
      ]
    }
  ]
]

function VentureForm ({ currentStep }: {currentStep: number}) {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)

  let currentTranslate: number = 0

  const onInputChange = ({ target }: any) => {
    const { name, value } = target
    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    const formSteps: any = document.querySelector('.formSteps-container')
    console.log(window.innerWidth)
    const setPositionByIndex = () => {
      currentTranslate = currentStep * -window.innerWidth
      setSliderPosition()
    }

    const animation = () => {
      setSliderPosition()
      requestAnimationFrame(animation)
    }

    const setSliderPosition = () => {
      if (formSteps) formSteps.style.transform = `translateX(${currentTranslate}px)`
    }
    setPositionByIndex()
    const animationId = requestAnimationFrame(animation)
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [currentStep])

  return (
    <form className="form">
      <div className="formSteps-container" >
        {ventureLabsFormInputs.map((inputs, i) => (
          <div className={`formStep ${currentStep === i && 'active'}`}
           key={`formStep-${i}`}>
             {inputs.map((input, j) => (
              <VentureFormInput
                key={input.name}
                onChange={onInputChange}
                value={formData[input.name]}
                {...input}
              />
             ))}
          </div>
        ))}
      </div>
    </form>
  )
}

VentureForm.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape({
  }))
}

export default VentureForm
