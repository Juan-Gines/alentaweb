import { useContext, useEffect, useState } from 'react'
import { UiContext } from '../../context/uiContext'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../constants/api'
import axios from 'axios'
import { useAuth } from '../../context/authContext'
import ErrorForms from '../forms/ErrorForms'
import { IconEmail, IconPassword } from '../forms/icons/iconsForm'
import { Input } from '../forms/Input'
import { emailValidation, passwordValidation } from '../../utils/inputValidations'
import { FormProvider, useForm } from 'react-hook-form'
import AuthHeader from '../forms/headers/AuthHeader'

const Login = () => {
  const { ui: { page, sections }, changePage } = useContext(UiContext)
  const methods = useForm()
  const { login: loginPage, register: registerPage, forgotPassword: forgotPasswordPage } = sections.auth
  const { login } = useAuth()
  const [errorLogin, setErrorLogin] = useState(false)
  const navigate = useNavigate()

  const onSubmit = methods.handleSubmit(async (data) => {
    setErrorLogin(false)

    try {
      const response = await axios.post(api.login, data)
      if (response.data && response.data.status === 'OK') {
        login(response.data.data)
        navigate('/home')
      }
    } catch (error) {
      if (error.response && error.response.data.status === 'FAILED') {
        const { data } = error.response.data
        setErrorLogin(data.error)
      } else if (error.response) {
        console.error('Error en la solicitud:', error)
        setErrorLogin(error.response.data.error)
      } else {
        console.error('Error en la solicitud:', error)
        setErrorLogin('Ha ocurrido un error de conexión.')
      }
    }
  })
  useEffect(() => {
    if (page !== loginPage) changePage(loginPage)
  }, [])

  return (
    <section className='min-h-screen grid place-items-center'>
      <div className='w-full max-w-sm mx-auto overflow-hidden bg-slate-100 rounded-lg shadow-md dark:bg-slate-800'>
        <div className='px-6 py-4'>
          <AuthHeader />
          <FormProvider {...methods}>
            <form
              onSubmit={e => e.preventDefault()}
              noValidate
              autoComplete='off'
            >

              <Input
                icon={<IconEmail />}
                {...emailValidation}
              />

              <Input
                icon={<IconPassword />}
                {...passwordValidation}
              />

              {errorLogin && <ErrorForms error={errorLogin} />}

              <div className='flex items-center justify-between mt-4'>
                <div href='#' className='text-sm text-gray-600 dark:text-gray-200 hover:text-slate-500'>
                  <Link
                    to={forgotPasswordPage.url}
                    onClick={() => changePage(forgotPasswordPage)}
                  >
                    <span>¿Olvidaste la contraseña?</span>
                  </Link>
                </div>
                <button
                  type='button'
                  className='px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                  onClick={onSubmit}
                >
                  Login
                </button>
              </div>
            </form>
          </FormProvider>
        </div>

        <div className='flex items-center justify-center py-4 text-center bg-slate-300'>
          <span className='text-sm text-gray-600 dark:text-gray-200'>¿No tienes cuenta? </span>

          <Link
            to={registerPage.url}
            onClick={() => changePage(registerPage)}
          >
            <span className='mx-2 text-sm font-semibold text-blue-500 dark:text-blue-400 hover:text-blue-400'>Regístrate</span>
          </Link>
        </div>
      </div>

    </section>

  )
}

export default Login
