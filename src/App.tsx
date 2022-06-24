import { useEffect, useState } from 'react'
import VentureForm from './components/VentureForm/VentureForm'
import VentureSteps from './components/VentureSteps/VentureSteps'
import { INITIAL_FORM_DATA } from './utils/ventureForm'
import Header from './components/Header/Header'
import Menu from './components/Menu/Menu'
import ClientList from './components/ClientList/ClientList'

function App () {
  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })

  useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  })

  const [formData, setFormData] = useState(INITIAL_FORM_DATA)
  const [currentStep, setCurrentStep] = useState(0)
  const [menuItem, setMenuItem] = useState('newClient')

  useEffect(() => {
    setFormData(INITIAL_FORM_DATA)
    setCurrentStep(0)
  }, [menuItem])

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
          dimensions={dimensions}
        />
        <VentureSteps
          formData={formData}
          currentStep={currentStep}
          setCurrentStep={setCurrentStep}
          />
        </>
        : <ClientList
          clientList={[]}
          dimensions={dimensions}
          />
      }
    </div>
  )
}

export default App
