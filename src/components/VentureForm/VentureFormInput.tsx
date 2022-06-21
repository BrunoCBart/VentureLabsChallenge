import PropTypes from 'prop-types'
import React, { useState } from 'react'

function VentureFormInput (
  { name, label, placeholder, errorMessage, required, ...inputProps }:
   {name: string, label: string, placeholder: string, errorMessage: string, required: boolean}) {
  const [focused, setFocused] = useState(false)

  const handleFocus = () => {
    setFocused(true)
  }

  return (
    <div className="form-group">
      <label htmlFor={name}>
        <span className="form-label">{required ? `${label}*` : label}</span>
        <input
          name={name}
          placeholder={placeholder}
          onBlur={handleFocus}
          id={name}
          focused={focused.toString()}
          {...inputProps}
         />
        <span className='error-msg'>{errorMessage}</span>
      </label>
    </div>
  )
}

VentureFormInput.propTypes = {
  errorMessage: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  required: PropTypes.bool,
  type: PropTypes.string.isRequired
}

export default VentureFormInput
