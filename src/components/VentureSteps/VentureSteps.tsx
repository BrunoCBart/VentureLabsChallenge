import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './ventureSteps.css'
import { FormData, ventureLabsFormInputs } from '../../utils/ventureForm'
import { InitialSteps, Step, stepsLen } from '../../utils/ventureSteps'

function VentureSteps ({ currentStep, setCurrentStep, formData }:
   {currentStep: number, setCurrentStep: (index: number) => void, formData: FormData}) {
  const [steps, setSteps] = useState(InitialSteps)
  const [nextDisabled, setNextDisabled] = useState(true)

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

  useEffect(() => {
    console.log(currentStep)
    const nextIsDisabled = ventureLabsFormInputs[currentStep]
      .every(({ name, pattern }) => {
        if (!pattern) return true
        if (formData[name].match(pattern)) return true
        return false
      })
    setNextDisabled(!nextIsDisabled)
  }, [formData, currentStep])

  const onStepCircleButtonClick = (i: number) => {
    if (currentStep + 1 === i && !nextDisabled) setCurrentStep(i)
    if (currentStep - 1 === i && currentStep < stepsLen - 1) setCurrentStep(i)
  }

  useEffect(() => {
    const progress: any = document.querySelector('#progress')
    progress.style.width = ((currentStep) / (steps.length - 1)) * 100 + '%'
    onNextAndPrevStep()
  }, [currentStep])

  return (
    <div className="ventureSteps">
        {currentStep < steps.length - 1 && <div className="ventureSteps__buttons">
          <button
          type='submit'
          className={`btn ${currentStep > 0 && 'active'}`}
          disabled={currentStep === 0}
          onClick={() => setCurrentStep(currentStep > 0 ? currentStep - 1 : 0)}
          >
            Voltar
          </button>
         { <button className={`btn ${currentStep < steps.length - 1 && 'active'}`}
          disabled={currentStep === steps.length - 1 || nextDisabled}
          type={currentStep === 2 ? 'submit' : 'button'}
          onClick={() => setCurrentStep(steps.length - 1 === currentStep ? currentStep : currentStep + 1)}
          >
            {steps.length - 2 <= currentStep ? 'Enviar' : 'Próximo'}
          </button>}
        </div>}
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

VentureSteps.propTypes = {
  currentStep: PropTypes.number.isRequired
}

export default VentureSteps
