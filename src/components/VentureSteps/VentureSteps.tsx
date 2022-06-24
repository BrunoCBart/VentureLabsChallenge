import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import './ventureSteps.css'
import { FormData, ventureLabsFormInputs } from '../../utils/ventureForm'
import { InitialSteps, Step, stepsLen } from '../../utils/ventureSteps'
import StepBtn from './StepBtn'
import { connect } from 'react-redux'
import { submitForm } from '../../redux/actions'
function VentureSteps ({ currentStep, setCurrentStep, formData, submitClientForm }:
   {currentStep: number, submitClientForm: (payload: FormData) => void,
    setCurrentStep: (index: number) => void, formData: FormData}) {
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

  const enableNextStep = (i:number) => currentStep + 1 === i && !nextDisabled
  const enablePrevStep = (i:number) => currentStep - 1 === i && currentStep < stepsLen - 1
  const enableSubmitForm = (i: number) => currentStep + 1 === stepsLen - 1 && !nextDisabled
  const onStepCircleButtonClick = (i: number) => {
    if (enableNextStep(i)) setCurrentStep(i)
    if (enablePrevStep(i)) setCurrentStep(i)
    if (enableSubmitForm(i)) submitClientForm(formData)
  }

  useEffect(() => {
    const progress: any = document.querySelector('#progress')
    progress.style.width = ((currentStep) / (steps.length - 1)) * 100 + '%'
    onNextAndPrevStep()
  }, [currentStep])

  const notFinalStep = (): boolean => currentStep < steps.length - 1

  const firstStep = ():boolean => currentStep === 0

  const notFirstStep = ():boolean => currentStep > 0

  const prevStep = (): number => currentStep > 0 ? currentStep - 1 : 0

  const nextStep = (): number => steps.length - 1 === currentStep ? currentStep : currentStep + 1

  const invalidFormOrNotLastStep = (): boolean => currentStep === steps.length - 1 || nextDisabled

  const formStep = (): boolean => currentStep < stepsLen - 2

  const onPrevButtonClick = (e:any, type: string) => {
    e.preventDefault()
    setCurrentStep(prevStep())
  }

  const onNextButtonClick = (e:any, type: string) => {
    e.preventDefault()
    setCurrentStep(nextStep())
    type === 'submit' && submitClientForm(formData)
  }

  return (
    <div className="ventureSteps">

        { notFinalStep() && <div className="ventureSteps__buttons">
          <StepBtn
            label="Voltar"
            type="button"
            className={`btn ${notFirstStep() && 'active'}`}
            setCurrentStep={setCurrentStep}
            disabled={firstStep()}
            nextOrPrev={onPrevButtonClick}
            />
          {formStep()
            ? <StepBtn
            label="Próximo"
            type="button"
            className={`btn ${notFinalStep() && 'active'}`}
            setCurrentStep={setCurrentStep}
            disabled={invalidFormOrNotLastStep()}
            nextOrPrev={onNextButtonClick}
          />
            : <StepBtn
            label="Enviar"
            type="submit"
            formId='ventureForm'
            className={`btn ${notFinalStep() && 'active'}`}
            setCurrentStep={setCurrentStep}
            disabled={invalidFormOrNotLastStep()}
            nextOrPrev={onNextButtonClick}
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

const mapDispatchToProps = (dispatch: any) => ({
  submitClientForm: (payload: FormData) => dispatch(submitForm(payload))
})

export default connect(null, mapDispatchToProps)(VentureSteps)
