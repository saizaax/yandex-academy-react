import React, { useState } from "react"
import styles from "./Input.module.scss"
import { ReactComponent as ClearIcon } from "../../icons/clear.svg"

function Input(props) {
  const {
    type,
    variant,
    label,
    labelValue,
    placeholder,
    isRequired,
    defaultValue,
    value,
    setValue,
    validateRegex,
    setValid,
  } = props

  const variants = ["default", "small", "default-invalid", "small-invalid"]
  const defaultVariant = variants.includes(variant)
    ? styles[variant]
    : styles.default

  const errorVariant = variants.includes(variant)
    ? styles[`${variant}-invalid`]
    : styles["default-invalid"]

  const [inputVariant, setInputVariant] = useState(defaultVariant)

  const validate = (str) => {
    if (validateRegex) {
      const isValid = validateRegex.test(str)

      if (!isValid) setInputVariant(errorVariant)
      else setInputVariant(defaultVariant)

      if (setValid) setValid(isValid)
    }
    return str
  }

  return (
    <div className={inputVariant}>
      <label>
        {label ? (
          <p>
            {label}
            {isRequired ? <span>*</span> : null}
          </p>
        ) : null}
        <div className={styles["input-container"]}>
          <input
            type={type ? type : "text"}
            placeholder={placeholder}
            onChange={(e) => setValue(validate(e.target.value))}
            value={value}
            defaultValue={defaultValue}
          />
          {variant !== "small" && value ? (
            <ClearIcon
              onClick={() => {
                setValue("")
                validate("")
              }}
            />
          ) : null}
        </div>
        {labelValue}
      </label>
    </div>
  )
}

export default Input
