import { useEffect } from 'react'
import VentureFormInput from './VentureFormInput'
import './ventureForm.css'
import { FormData, ventureLabsFormInputs } from '../../utils/ventureForm'
import cutePanda from '../../../images/cutepanda.gif'

function VentureForm ({ currentStep, formData, setFormData }:
   {currentStep: number, formData: FormData, setFormData: (data: any) => void }) {
  let currentTranslate: number = 0

  const onInputChange = ({ target }: any) => {
    const { name, value } = target
    setFormData({ ...formData, [name]: value })
  }

  useEffect(() => {
    const formSteps: any = document.querySelector('.formSteps-container')
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
    <form className="form" id="ventureForm">
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
        <div className="formStep">
          <div className="formReceivedMsg">
            <h2>Formulário enviado com sucesso!</h2>
            <p>Muito obrigado!</p>
            <img src={cutePanda}/>
          </div>
        </div>
      </div>
    </form>
  )
}

export default VentureForm
