import React, { ReactElement } from 'react'
import './ventureSteps.css'
import Contact from '../svgs/Contact'
import Address from '../svgs/Address'
import Income from '../svgs/Income'
import Done from '../svgs/Done'

interface Step {
  label: string
  icon: ReactElement
  active: boolean
}

const steps: Step[] = [
  {
    label: 'Contact',
    icon: <Contact className="progress-icon"/>,
    active: true
  },
  {
    label: 'Address',
    icon: <Address className="progress-icon"/>,
    active: false

  },
  {
    label: 'Income',
    icon: <Income className="progress-icon"/>,
    active: false
  },
  {
    label: 'Done',
    icon: <Done className="progress-icon"/>,
    active: false
  }
]

function VentureSteps () {
  return (
    <div className="ventureSteps">
      <div id="progress"></div>
      {steps.map((step: Step, index:number) => {
        return (
          <div className={`ventureStep circle ${step.active ? 'active' : ''}`} key={index}>
            {step.icon}
          </div>
        )
      })}
    </div>
  )
}

export default VentureSteps
