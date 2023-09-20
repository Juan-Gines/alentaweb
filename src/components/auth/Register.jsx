import { useContext, useEffect } from 'react'
import { UiContext, UiDispatchContext } from '../../context/uiContext'

const Register = () => {
  const { page, sections } = useContext(UiContext)
  const register = sections.find((sec) => sec.title === 'Registro')
  const dispatch = useContext(UiDispatchContext)
  useEffect(() => {
    if (page !== register) {
      dispatch({
        type: 'changedpage',
        page: register
      })
    }
  }, [])
  return (
    <div>Registro</div>
  )
}

export default Register
