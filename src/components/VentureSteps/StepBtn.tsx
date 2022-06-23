import React from 'react'

function StepBtn ({ label, setCurrentStep, disabled, type, className, nextOrPrev, formId }:
   {label: string, type: 'button' | 'submit', nextOrPrev: (e: any, type:string) => void
     setCurrentStep: (step: number) => void, disabled: boolean, className: string,
    formId?: string }) {
  return (
    <button
    form={formId}
    type={type}
    className={className}
    disabled={disabled}
    onClick={(e) => nextOrPrev(e, type)}
    >
      {label}
    </button>
  )
}

export default StepBtn
