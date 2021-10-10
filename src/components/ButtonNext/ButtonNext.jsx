import React from "react"
import Button from "../Button/Button"

const ButtonNext = React.forwardRef(({ children, ...rest }, ref) => (
  <span ref={ref}>
    <Button {...rest}>{children}</Button>
  </span>
))

export default ButtonNext
