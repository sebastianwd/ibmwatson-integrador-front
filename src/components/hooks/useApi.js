import { useState } from "react"
import axios from "axios"

const useApi = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const urlWatson = "http://localhost:3000/conversation/"

  const fetchData = async (rootUrl, endpoint, params = {}, method = "get") => {
    setIsError(false)
    setIsLoading(true)
    try {
      const result = await axios({
        method: method,
        url: rootUrl + endpoint,
        data: params,
      })
      setIsLoading(false)
      return result.data
    } catch (error) {
      console.log("useApi", error)
      setIsLoading(false)
      setIsError(true)
    }
  }

  async function getWatsonMessage(payload = {}) {
    let response = await fetchData(urlWatson, "", payload, "post")
    return response
  }

  return [{ isLoading, isError }, getWatsonMessage]
}

export default useApi
