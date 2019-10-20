import React, { useRef, useContext } from "react"
import useApi from "../hooks/useApi"
import { WatsonContext } from "../_context/WatsonContext"

const Input = ({ triggerUpdateMessages }) => {
  const [watsonContext, setWatsonContext] = useContext(WatsonContext)

  const inputRef = useRef()
  const [{ isLoading, isError }, getWatsonMessage] = useApi()

  const handleKeydown = e => {
    if (e.keyCode === 13 && inputRef.current.value.trim()) {
      const payload = {
        text: inputRef.current.value,
        context: watsonContext,
      }
      triggerUpdateMessages(payload)
      inputRef.current.value = ""
      console.log("payload sent", payload)
      getWatsonMessage(payload).then(res => {
        setWatsonContext(res.context)
        console.log("context", watsonContext)
        res.output.generic.forEach(item => {
          triggerUpdateMessages(item, res.sender)
        })
      })
    }
  }

  return (
    <React.Fragment>
      <label htmlFor="chatInput" className="text-input__outline">
        <input
          ref={inputRef}
          onKeyDown={handleKeydown}
          className="text-input"
          autoFocus
          id="chatInput"
          placeholder="Escribe algo"
          type="text"
        ></input>
      </label>
      {isLoading && <span>esperando respuesta...</span>}
      {isError && <span>no hay conexión con el servidor :(</span>}
    </React.Fragment>
  )
}

export default Input
