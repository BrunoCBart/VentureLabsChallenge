import { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { FormData } from '../../utils/ventureForm'
import './clientList.css'
import ClientListDesktop from './ClientListDesktop'
import ClientListMobile from './ClientListMobile'

const headFormat: FormData = {
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

function ClientTable ({ clientList }: {clientList: FormData[]}) {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })
  return (
    <section className='clientList'>
      <h2>Lista de Clientes</h2>
    {dimensions.width < 768
      ? <ClientListMobile clientList={clientList} headFormat={headFormat} />
      : <ClientListDesktop clientList={clientList} headFormat={headFormat}/> }
    </section>
  )
}

const mapStateToProps = (state: any) => ({
  clientList: state.userFormList
})

export default connect(mapStateToProps, null)(ClientTable)
