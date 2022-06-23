import { useState } from 'react'
import SelectForm from './SelectForm'

function VentureFormInput (
  {
    name, label, placeholder,
    errorMessage, required, type, options = [],
    onChange, value,
    ...inputProps
  }:
   {name: string, label: string, placeholder?: string, onChange: any, value: string
     errorMessage?: string, required?: boolean, type: string, options?: string[]}) {
  const [focused, setFocused] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>
        <span className="form-label">{required ? `${label}*` : label}</span>

        {type === 'select'
          ? <SelectForm
            onChange={onChange}
            name={name}
            options={options}
            value={value}
          />
          : <input
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          onBlur={handleFocus}
          id={name}
          type={type}
          data-focused={focused.toString()}
          {...inputProps}
         />}
        <span className='error-msg'>{errorMessage}</span>
      </label>
    </div>
  )
}

export default VentureFormInput
