import React from 'react'

function StepBtn ({ label, setCurrentStep, disabled, nextOrPrev, type, className }:
   {label: string, nextOrPrev: number, type: 'button' | 'submit',
     setCurrentStep: (step: number) => void, disabled: boolean, className: string }) {
  return (
    <button
    type={type}
    className={className}
    disabled={disabled}
    onClick={() => setCurrentStep(nextOrPrev)}
    >
      {label}
    </button>
  )
}

export default StepBtn
