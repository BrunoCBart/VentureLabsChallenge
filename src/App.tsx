import { useState } from 'react'
import VentureForm from './components/VentureForm/VentureForm'
import VentureSteps from './components/VentureSteps/VentureSteps'

function App () {
  const [currentStep, setCurrentStep] = useState(0)

  return (
    <div className="App">
      <section className="ventureWizardForm">
        <VentureForm currentStep={currentStep} />
        <VentureSteps
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
        />
      </section>
    </div>
  )
}

export default App
