import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './ventureSteps.css'
import { FormData, ventureLabsFormInputs } from '../../utils/ventureForm'
import { InitialSteps, Step, stepsLen } from '../../utils/ventureSteps'
import StepBtn from './StepBtn'

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

  const disableNextBtn = () => {
    if (currentStep === stepsLen - 1) return
    const nextIsDisabled = ventureLabsFormInputs[currentStep]
      .every(({ name, pattern }) => {
        if (!pattern) return true
        if (formData[name].match(pattern)) return true
        return false
      })
    setNextDisabled(!nextIsDisabled)
  }

  useEffect(() => {
    disableNextBtn()
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

  const notFinalStep = () => currentStep < steps.length - 1

  const firstStep = () => currentStep === 0

  const notFirstStep = () => currentStep > 0

  const prevStep = () => currentStep > 0 ? currentStep - 1 : 0

  const nextStep = () => steps.length - 1 === currentStep ? currentStep : currentStep + 1

  const invalidFormOrNotLastStep = () => currentStep === steps.length - 1 || nextDisabled

  const formStep = () => currentStep < stepsLen - 2

  return (
    <div className="ventureSteps">
        { notFinalStep() && <div className="ventureSteps__buttons">
          <StepBtn
            label="Voltar"
            type="button"
            className={`btn ${notFirstStep() && 'active'}`}
            setCurrentStep={setCurrentStep}
            disabled={firstStep()}
            nextOrPrev={prevStep()}
            />
          {formStep()
            ? <StepBtn
            label="Próximo"
            type="button"
            className={`btn ${notFinalStep() && 'active'}`}
            setCurrentStep={setCurrentStep}
            disabled={invalidFormOrNotLastStep()}
            nextOrPrev={nextStep()}
            />
            : <StepBtn
            label="Enviar"
            type="submit"
            className={`btn ${notFinalStep() && 'active'}`}
            setCurrentStep={setCurrentStep}
            disabled={invalidFormOrNotLastStep()}
            nextOrPrev={nextStep()}
            />}
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
