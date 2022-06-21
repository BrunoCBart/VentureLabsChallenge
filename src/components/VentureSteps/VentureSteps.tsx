import React, { ReactElement, useEffect, useState } from 'react'
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

const InitialSteps: Step[] = [
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
  const [steps, setSteps] = useState(InitialSteps)
  const [currentStep, setCurrentStep] = useState(0)

  const onNextAndPrevStep = () => {
    const newSteps = steps.map((step, i) => {
      if (i <= currentStep) {
        return {
          ...step,
          active: true
        }
      }
      return {
        ...step,
        active: false
      }
    })
    setSteps(newSteps)
  }

  const onStepCircleButtonClick = (i: number) => {
    if (currentStep + 1 === i || currentStep - 1 === i) { setCurrentStep(i) }
  }

  useEffect(() => {
    const progress: any = document.querySelector('#progress')
    progress.style.width = ((currentStep) / (steps.length - 1)) * 100 + '%'
    onNextAndPrevStep()
  }, [currentStep])

  return (
    <div className="ventureSteps">
        <div className="ventureSteps__buttons">
          <button className="btn"
          onClick={() => setCurrentStep(currentStep > 0 ? currentStep - 1 : 0)}
          >
            Voltar
          </button>
          <button className="btn"
          onClick={() => setCurrentStep(steps.length - 1 === currentStep ? currentStep : currentStep + 1)}
          >
            Próximo
          </button>
        </div>
      <div className="ventureSteps__container">
        <div id="progress"></div>
        {steps.map((step: Step, index:number) => {
          return (
            <div className={`ventureStep circle ${step.active ? 'active' : ''}`}
              key={index}
              onClick={() => onStepCircleButtonClick(index)}
            >
              {step.icon}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default VentureSteps
