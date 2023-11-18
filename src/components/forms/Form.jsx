import { useContext, useEffect, useState } from 'react'
import { Input } from './Input'
import { UiContext, UiDispatchContext } from '../../context/uiContext'
import { FormProvider, useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { IconEmail, IconName, IconPassword } from './icons/iconsForm'
import axios from 'axios'
import { api } from '../../constants/api'
import ErrorForms from './errorForms'
import { emailValidation, nameValidation, passwordValidation } from '../../utils/inputValidations'

export const Form = () => {
  const { page, sections } = useContext(UiContext)
  const methods = useForm()
  const registerPage = sections.find((sec) => sec.title === 'Registro')
  const login = sections.find((sec) => sec.title === 'Login')
  const [errorLogin, setErrorLogin] = useState(false)
  const dispatch = useContext(UiDispatchContext)
  const navigate = useNavigate()

  const onSubmit = methods.handleSubmit(async (data) => {
    setErrorLogin(false)
    try {
      await axios.post(api.register, data)
      methods.reset()
      navigate('/login')
    } catch (error) {
      if (error.response && error.response.data.status === 'FAILED') {
        const { data } = error.response.data
        setErrorLogin(data.error)
      } else if (error.response) {
        setErrorLogin(error.response.data.data.error)
      } else {
        console.error('Error en la solicitud:', error)
        setErrorLogin('Ha ocurrido un error de conexión.')
      }
    }
  })

  useEffect(() => {
    if (page !== registerPage) {
      dispatch({
        type: 'changedpage',
        page: registerPage
      })
    }
  }, [])

  return (
    <section className='min-h-screen grid place-items-center'>
      <div className='w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800'>
        <div className='px-6 py-4'>
          <div className='flex justify-center mx-auto'>
            <img className='w-auto h-7 sm:h-8' src={page.icon} alt='' />
          </div>

          <h3 className='mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200'>Alenta Dev</h3>
          <FormProvider {...methods}>
            <form
              onSubmit={e => e.preventDefault()}
              noValidate
              className='w-ful max-w-md mt-4'
            >
              <Input
                icon={<IconName />}
                {...nameValidation}
              />
              <Input
                icon={<IconEmail />}
                {...emailValidation}
              />
              <Input
                icon={<IconPassword />}
                {...passwordValidation}
              />
              {errorLogin && <ErrorForms error={errorLogin} />}

              <div className='mt-6'>
                <button
                  className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                  type='submit'
                  onClick={onSubmit}
                >
                  Registro
                </button>
                <div className='mt-6 text-center '>
                  <Link
                    to={login.url}
                    onClick={() => {
                      dispatch({
                        type: 'changedpage',
                        page: login
                      })
                    }}
                  >
                    <span className='text-sm font-semibold text-blue-500 hover:underline hover:text-blue-400 dark:text-blue-400'>
                      ¿Ya tienes una cuenta?
                    </span>
                  </Link>
                </div>
              </div>
            </form>
          </FormProvider>
        </div>
      </div>
    </section>
  )
}
