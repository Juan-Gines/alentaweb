import { useContext, useEffect, useState } from 'react'
import { UiContext } from '../../context/uiContext'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { api } from '../../constants/api'
import ErrorForms from '../forms/ErrorForms'
import { FormProvider, useForm } from 'react-hook-form'
import { Input } from '../forms/Input'
import { IconEmail, IconName, IconPassword } from '../forms/icons/iconsForm'
import { emailValidation, nameValidation, passwordValidation } from '../../utils/inputValidations'
import AuthHeader from '../forms/headers/AuthHeader'

const Register = () => {
  const { ui: { page, sections }, changePage } = useContext(UiContext)
  const methods = useForm()
  const { login: loginPage, register: registerPage } = sections.auth
  const [errorLogin, setErrorLogin] = useState(false)
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
    if (page !== registerPage) changePage(registerPage)
  }, [])
  return (
    <section className='min-h-screen grid place-items-center'>
      <div className='w-full max-w-sm mx-auto overflow-hidden bg-slate-100 rounded-lg shadow-md dark:bg-gray-800'>
        <div className='px-6 py-4'>
          <AuthHeader />

          <FormProvider {...methods}>
            <form
              onSubmit={e => e.preventDefault()}
              noValidate
              autoComplete='off'
              className='w-ful max-w-md mt-8'
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

              </div>
            </form>
          </FormProvider>
        </div>
        <div className='py-5 mt-1 text-center bg-slate-300'>
          <Link
            to={loginPage.url}
            onClick={() => changePage(loginPage)}
          >
            <span className='text-sm font-semibold text-blue-500 hover:underline hover:text-blue-400 dark:text-blue-400'>
              ¿Ya tienes una cuenta?
            </span>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Register
