import { useEffect, useState } from 'react'
import VentureForm from './components/VentureForm/VentureForm'
import VentureSteps from './components/VentureSteps/VentureSteps'
import { INITIAL_FORM_DATA } from './utils/ventureForm'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import ClientList from './components/ClientList/ClientList'

function App () {
  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [currentStep, setCurrentStep] = useState(0)
  const [menuItem, setMenuItem] = useState('newClient')

  useEffect(() => {
    setFormData(INITIAL_FORM_DATA)
    setCurrentStep(0)
  }, [menuItem])

  // There is a bug making a button type 'button trigger submit'

  return (
    <div className="App">
      <Header />
      <Menu setMenuItem={setMenuItem}/>
      {menuItem === 'newClient'
        ? <>
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
        </>
        : <ClientList clientList={[]}/>
      }
    </div>
  )
}

export default App
