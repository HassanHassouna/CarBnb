import React, { forwardRef } from "react"
import FormControl from "@mui/material/FormControl"
import NativeSelect from "@mui/material/NativeSelect"
import { possibleTimes } from "./data"
import "./style.css"



const Time = forwardRef((props, ref) => {
  const [time, setTime] = React.useState("")
  const handleChange = (event) => {
    if (window.location.href !== "/") {
      if (props.label === "from") {
        props.setTimeFrom(event.target.value)
      } else {
        props.setTimeUntil(event.target.value)
      }
    }

    setTime(event.target.value)
  }

  return (
    <FormControl
      sx={props.width ? { minWidth: props.width } : { minWidth: "10vw", mr: 1 }}
    >
      <NativeSelect
        value={time === null ? possibleTimes[0] : time}
        onChange={handleChange}
        inputRef={ref}
      >
        {possibleTimes.map((time, index) => (
          <option key={index + 1 * 10} value={time}>
            {time}
          </option>
        ))}
      </NativeSelect>
    </FormControl>
  )
})

export default Time
