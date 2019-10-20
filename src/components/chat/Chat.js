import React, { useState, useEffect, useRef } from "react"
import Input from "./Input"
import Message from "./Message"
import Options from "./Options"

const Chat = () => {
  const [state, setState] = useState({ messages: [], options: [] })
  const containerRef = useRef()

  const updateMessages = (newMessage, sender) => {
    newMessage.sender = sender
    setState(prevState => {
      return {
        messages: [...prevState.messages, newMessage],
        options: newMessage.options,
      }
    })
    containerRef.current.scrollTop = containerRef.current.scrollHeight
  }
  return (
    <div className="chat-container">
      <div className="chat" ref={containerRef}>
        {state.messages.map((item, index) => {
          console.log("messages", item)
          return (
            <Message
              key={index}
              message={item.text || null}
              from={item.sender || "user"}
              type={item.response_type}
              title={item.title || null}
            ></Message>
          )
        })}
        {/* las opciones viviran solo en un intercambio de mensajes */}
        {state.options && (
          <ul className="options">
            {state.options.map((item, index) => {
              return (
                <Options
                  triggerUpdateMessages={updateMessages}
                  className="options__items"
                  key={index}
                  text={item.label}
                ></Options>
              )
            })}
          </ul>
        )}
      </div>
      <Input triggerUpdateMessages={updateMessages}></Input>
    </div>
  )
}

export default Chat
