import { useState } from 'react'
import VentureForm from './components/VentureForm/VentureForm'
import VentureSteps from './components/VentureSteps/VentureSteps'
import { INITIAL_FORM_DATA } from './utils/ventureForm'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'

function App () {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [currentStep, setCurrentStep] = useState(0)
  const [menuItem, setMenuItem] = useState('newClient')

  return (
    <div className="App">
      <Header />
      <Menu setMenuItem={setMenuItem}/>
       <VentureForm
        currentStep={currentStep}
        formData={formData}
        setFormData={setFormData}
      />
      <VentureSteps
        formData={formData}
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  )
}

export default App
