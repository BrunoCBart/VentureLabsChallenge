import PropTypes from 'prop-types'
import { useState } from 'react'

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
          ? <select onChange={onChange} name={name} value={value}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
        </select>
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
VentureFormInput.propTypes = {
  errorMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired
}

export default VentureFormInput
