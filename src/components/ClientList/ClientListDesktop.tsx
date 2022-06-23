import React from 'react'
import { FormData } from '../../utils/ventureForm'

function ClientListDesktop ({ clientList, headFormat }:
   {clientList: FormData[], headFormat: FormData}) {
  const clientData = Object.entries(headFormat) as [keyof typeof headFormat, string][]
  return (
    <div className="clientList__desktop">
      {clientData.map(([head, _], i: number) => {
        return (
          <div key={`head-${i}`} className="clientList__desktop-head">
            <div className="clientList__user-header">{headFormat[head]}</div>
          </div>
        )
      })}
      {clientList.map((client) => {
        const values = Object.values(client)
        return values.map((value, i) => (
         <div key={`head-${i}`} className="clientList__desktop-user-data">
            <div className="clientList__user-data">{value}</div>
         </div>
        ))
      })}
    </div>
  )
}

export default ClientListDesktop
