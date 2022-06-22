import { useState } from 'react'
import VentureForm from './components/VentureForm/VentureForm'
import VentureSteps from './components/VentureSteps/VentureSteps'

function App () {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="App">
      <VentureForm currentStep={currentStep} />
      <VentureSteps
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
    </div>
  )
}

export default App
