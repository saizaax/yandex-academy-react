import React from "react"
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
  } = props

  const variants = ["default", "small"]
  const inputVariant = variants.includes(variant)
    ? styles[variant]
    : styles.default

  return (
    <div className={inputVariant}>
      <label>
        <p>
          {label}
          {isRequired ? <span>*</span> : null}
        </p>
        <div className={styles["input-container"]}>
          <input
            type={type}
            placeholder={placeholder}
            onChange={(e) => setValue(e.target.value)}
            value={value}
            defaultValue={defaultValue}
          />
          {variant !== "small" ? (
            <ClearIcon onClick={() => setValue("")} />
          ) : null}
        </div>
        {labelValue}
      </label>
    </div>
  )
}

export default Input
