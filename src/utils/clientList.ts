import { FormData } from './ventureForm'

interface HeadFormat extends FormData {
  id: 'id'
}

export const headFormat: HeadFormat = {
  id: 'id',
  name: 'Cliente',
  lastName: 'Sobrenome',
  email: 'Email',
  phone: 'Telefone',
  cep: 'CEP',
  address: 'Endereço',
  address2: 'Endereço2',
  birthDate: 'Nascimento',
  cpf: 'CPF',
  monthlyIncome: 'Salário'
}

export interface ClientList extends FormData {
  id: number
}
