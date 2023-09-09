import { useState, useEffect } from 'react'

const AnimateString = props => {
  const [string, setString] = useState('')
  const [string2, setString2] = useState('')

  const arrStr = props.str.split('')
  const arrStr2 = props.str2.split('')

  useEffect(() => {
    if (string.length === 0) setTimeout(() => setString(() => string + arrStr[string.length]), 1500)
    if (string.length !== 0 && string.length < arrStr.length) {
      setTimeout(() => setString(() => string + arrStr[string.length]), 50)
    }
    if (string.length === arrStr.length && string2.length < arrStr2.length) {
      setTimeout(() => setString2(() => string2 + arrStr2[string2.length]), 50)
    }
  }, [string, string2]
  )
  return (
    <>
      <div>{string}</div>
      <div>{string2}</div>
    </>
  )
}

export default AnimateString
