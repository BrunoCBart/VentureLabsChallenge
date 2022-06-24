import React from 'react'

function SelectForm ({ onChange, name, value, options }:
   {onChange: any, name: string, value: string, options: string[]}) {
  return (
    <select onChange={onChange} name={name} value={value} className="ventureLabs-select">
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  )
}

export default SelectForm
