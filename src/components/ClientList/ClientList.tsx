import { connect } from 'react-redux'
import { ClientList, headFormat } from '../../utils/clientList'
import './clientList.css'
import ClientListDesktop from './ClientListDesktop'
import ClientListMobile from './ClientListMobile'

function ClientTable ({ clientList, dimensions }:
   {clientList: ClientList[], dimensions: {height: number, width: number}}) {
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
