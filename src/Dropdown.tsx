import React, {ChangeEvent, HTMLProps, useEffect, useState} from 'react'

type DropdownProps<T extends string | number | string[]> = {
  options: T[]
  label?: string
  onChange?: (value: T) => void
  labelclassname?: string
  defaultValue?: T
} & HTMLProps<HTMLSelectElement>

/**
Dropdown component that allows users to select an option from a list of options
@template T - type of the options. Must be either string, number, or string array
@param {Object} props - component props
@param {T[]} props.options - list of available options
@param {string} [props.label] - label to display above the dropdown
@param {(value: T) => void} [props.onChange] - function to call when the selected value changes
@param {string} [props.labelclassname] - class name to apply to the label element
@param {T} [props.defaultValue] - default value for the dropdown
@returns {JSX.Element} - rendered component
*/
const Dropdown = <T extends string | number | string[]>({
  options,
  label,
  defaultValue,
  onChange,
  ...props
}: DropdownProps<T>): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState<T>(
    defaultValue ?? options[0],
  )

  /**
Event handler for when an option is selected
@param {ChangeEvent<HTMLSelectElement>} event - change event from the select element
*/
  const handleSelectChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const selectedIndex = event.target.selectedIndex
    setSelectedValue(options[selectedIndex])
  }

  /**
   * Runs every time the selected value changes
   * If a change handler function was provided as a prop, it is called with the new selected value
   */
  useEffect(() => {
    if (onChange) {
      onChange(selectedValue)
    }
  }, [selectedValue])

  return (
    <div>
      {label && (
        <label htmlFor={label} className={props?.labelclassname}>
          {label}
        </label>
      )}
      <select
        name={label}
        onChange={handleSelectChange}
        value={defaultValue ?? selectedValue}
        role="listbox"
        aria-labelledby={label}
        {...props}
      >
        {options.map(option => (
          <option key={option.toString()} value={option} role="option">
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}

export default Dropdown
