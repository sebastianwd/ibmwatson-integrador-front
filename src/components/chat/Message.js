import React, { memo } from "react"

const Message = memo(props => {
  console.log(props.options)
  switch (props.type) {
    case "option":
      return (
        <React.Fragment>
          <div className={`from-${props.from}`}>
            <div className="message-container">
              <p>{props.title}</p>
            </div>
          </div>
        </React.Fragment>
      )
    default:
      return (
        <div className={`from-${props.from}`}>
          <div className="message-container">
            <p>{props.message}</p>
          </div>
        </div>
      )
  }
})

export default Message
