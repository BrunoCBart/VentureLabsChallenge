import React from 'react'
import { FormData } from '../../utils/ventureForm'

function ClientListMobile ({ clientList, headFormat }:
   {clientList: FormData[], headFormat: FormData}) {
  return (
    <>
    {clientList.sort().map((client) => {
      const clientData = Object.entries(client) as [keyof typeof headFormat, string][]
      return clientData.map(([head, value], i) => (
       <div key={`head-${i}`} className={`clientList__user-container ${i === 0 && 'client'} ${i % 2 === 1 && 'gray'}`}>
          <div className='clientList__user-header'>{headFormat[head]}:</div>
          <div className="clientList__user-data">{value}</div>
       </div>
      ))
    })}
    </>
  )
}

export default ClientListMobile
