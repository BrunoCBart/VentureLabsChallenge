import Contact from '../components/svgs/Contact'
import Address from '../components/svgs/Address'
import Income from '../components/svgs/Income'
import Done from '../components/svgs/Done'
import { ReactElement } from 'react'

export interface Step {
  label: string
  icon: ReactElement
  active: boolean
}

export const InitialSteps: Step[] = [
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

export const stepsLen:number = InitialSteps.length
