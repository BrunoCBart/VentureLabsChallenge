import { useState } from 'react'
import VentureForm from './components/VentureForm/VentureForm'
import VentureSteps from './components/VentureSteps/VentureSteps'
import { INITIAL_FORM_DATA } from './utils/ventureForm'
import { stepsLen } from './utils/ventureSteps'
import cutePanda from '../images/cutepanda.gif'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'

function App () {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="App">
      <Header />
      <Menu />
      {currentStep < stepsLen - 1
        ? <VentureForm
        currentStep={currentStep}
        formData={formData}
        setFormData={setFormData}
      />
        : (
        <div className="formSentMessage">
          <h2>Formulário enviado com sucesso!</h2>
          <p>Muito obrigado!</p>
          <img src={cutePanda}/>
        </div>
          )}
      <VentureSteps
        formData={formData}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  )
}

export default App
