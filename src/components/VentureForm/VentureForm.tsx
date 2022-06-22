import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import VentureFormInput from './VentureFormInput'
import './ventureForm.css'
import { FormData, ventureLabsFormInputs } from '../../utils/ventureForm'

function VentureForm ({ currentStep, formData, setFormData }:
   {currentStep: number, formData: FormData, setFormData: (e: any) => void }) {
  let currentTranslate: number = 0

  const onInputChange = ({ target }: any) => {
    const { name, value } = target
    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    const formSteps: any = document.querySelector('.formSteps-container')
    console.log(window.innerWidth)
    const setPositionByIndex = () => {
      currentTranslate = currentStep * -window.innerWidth
      setSliderPosition()
    }

    const animation = () => {
      setSliderPosition()
      requestAnimationFrame(animation)
    }

    const setSliderPosition = () => {
      if (formSteps) formSteps.style.transform = `translateX(${currentTranslate}px)`
    }
    setPositionByIndex()
    const animationId = requestAnimationFrame(animation)
    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [currentStep])

  return (
    <form className="form">
      <div className="formSteps-container" >
        {ventureLabsFormInputs.map((inputs, i) => (
          <div className={`formStep ${currentStep === i && 'active'}`}
           key={`formStep-${i}`}>
             {inputs.map((input, j) => (
              <VentureFormInput
                key={input.name}
                onChange={onInputChange}
                value={formData[input.name]}
                {...input}
              />
             ))}
          </div>
        ))}
      </div>
    </form>
  )
}

VentureForm.propTypes = {
  inputs: PropTypes.arrayOf(PropTypes.shape({
  }))
}

export default VentureForm
