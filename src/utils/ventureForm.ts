import { JsxElement } from 'typescript'

export interface FormData {
  name: string
  lastName: string
  email: string
  phone: string
  cep: string
  address: string
  address2: string
  birthDate: string
  cpf: string
  monthlyIncome: string
}

export const INITIAL_FORM_DATA: FormData = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
  cep: '',
  address: '',
  address2: '',
  birthDate: '',
  cpf: '',
  monthlyIncome: 'Entre 0.00R$ e 1000.00R$'
}

export interface VentureFormIput {
  name: keyof typeof INITIAL_FORM_DATA
  label: string
  placeholder?: string
  errorMessage?: string
  required?: boolean
  pattern?: string
  type: string
  options?: string[]
  component?: JsxElement
}

export const ventureLabsFormInputs: VentureFormIput[][] = [
  [
    {
      name: 'name',
      label: 'Nome:',
      placeholder: 'Digite o seu nome',
      type: 'text',
      pattern: '^[a-zA-Z\u00C0-\u00FF]{3}[a-zA-Z\u00C0-\u00FF ]*$',
      required: true,
      errorMessage: 'Nome precisa ter mais de 2 caracteres sem espaços'
    },
    {
      name: 'lastName',
      label: 'Sobrenome:',
      placeholder: 'Digite o seu sobrenome',
      type: 'text',
      pattern: '^[a-zA-Z\u00C0-\u00FF]{3}[a-zA-Z\u00C0-\u00FF]*$',
      required: true,
      errorMessage: 'Sobrenome precisa ter mais de 2 caracteres sem espaços'
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
      label: 'Endereço:',
      placeholder: 'digite seu endereço',
      pattern: '^[a-zA-Z0-9 ]{6,}$',
      type: 'string',
      required: true,
      errorMessage: 'Endereço precisa ter no mínimo 6 dígitos'
    },
    {
      name: 'address2',
      label: 'Endereço2:',
      placeholder: 'digite seu endereço',
      pattern: '^[a-zA-Z0-9 ]{6,}$',
      type: 'string',
      required: false,
      errorMessage: 'Endereço precisa ter no mínimo 6 dígitos'
    }
  ],
  [
    {
      name: 'birthDate',
      label: 'Data ter Nascimento:',
      pattern: '^[0-9]{4}-[0-9]{2}-[0-9]{2}',
      type: 'date'
    },
    {
      name: 'cpf',
      label: 'CPF:',
      pattern: '^[0-9]{3}\\.[0-9]{3}\\.[0-9]{3}-[0-9]{2}$',
      type: 'string',
      required: true,
      errorMessage: 'CPF precisa estar no formato 111.111.111-11'
    },
    {
      name: 'monthlyIncome',
      label: 'Salário:',
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
