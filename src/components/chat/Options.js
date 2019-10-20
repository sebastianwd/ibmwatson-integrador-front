import React, { useContext } from "react"
import useApi from "../hooks/useApi"
import { WatsonContext } from "../_context/WatsonContext"

const Options = ({ text, triggerUpdateMessages }) => {
  const [watsonContext, setWatsonContext] = useContext(WatsonContext)
  const [{ isLoading, isError }, getWatsonMessage] = useApi()

  const handleClick = ({ text }) => {
    if (text.trim()) {
      const payload = {
        text: text,
        context: watsonContext,
      }
      triggerUpdateMessages(payload)
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
    <li onClick={() => handleClick({ text: text })} className="options__items">
      {text}
    </li>
  )
}
export default Options
