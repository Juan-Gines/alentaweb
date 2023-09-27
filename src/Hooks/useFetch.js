import { useState, useEffect } from 'react'
import axios from 'axios'

const useFetch = (url) => {
  const [apiData, setApiData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [serverError, setServerError] = useState(null)
  useEffect(() => {
    axios.get(url)
      .then(({ data }) => setApiData(data))
      .catch((error) => setServerError(error))
      .finally(() => setIsLoading(false))
  }, [])
  return { apiData, isLoading, serverError }
}

export default useFetch
