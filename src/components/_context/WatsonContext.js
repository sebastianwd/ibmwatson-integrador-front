import React, { useState } from "react"

const WatsonContext = React.createContext([{}, () => {}])

const WatsonProvider = props => {
  const [state, setState] = useState({})

  return (
    <WatsonContext.Provider value={[state, setState]}>
      {props.children}
    </WatsonContext.Provider>
  )
}

export { WatsonContext, WatsonProvider }
