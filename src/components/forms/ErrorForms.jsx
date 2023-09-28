import { useEffect, useState } from 'react'

const ErrorForms = ({ error }) => {
  const [isArray, setIsArray] = useState(false)
  useEffect(() => {
    if (Array.isArray(error)) setIsArray(true)
  }, [])
  return (
    <>
      <div className='text-sm italic pt-1 text-red-400'>
        {isArray
          ? error.map((e, i) => <p key={i}>*{e.property}: {e.message}</p>)

          : (<p>* Ha ocurrido un error de conexión</p>)}
      </div>
    </>
  )
}

export default ErrorForms
