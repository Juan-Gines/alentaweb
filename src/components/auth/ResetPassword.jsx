import { useContext, useEffect, useState } from 'react'
import { UiContext } from '../../context/uiContext'
import { useNavigate } from 'react-router-dom'
import { api } from '../../constants/api'
import axios from 'axios'
import ErrorForms from '../forms/ErrorForms'
import { IconPassword } from '../forms/icons/iconsForm'
import { Input } from '../forms/Input'
import { passwordValidation } from '../../utils/inputValidations'
import { FormProvider, useForm } from 'react-hook-form'
import AuthHeader from '../forms/headers/AuthHeader'
import { createAuth } from '../../context/authContext'

const ResetPassword = ({ token }) => {
  const { ui: { page, sections }, changePage } = useContext(UiContext)
  const methods = useForm()
  const resetPasswordPage = sections.auth.resetPassword
  const [errorLogin, setErrorLogin] = useState(false)
  const navigate = useNavigate()
  const headers = createAuth(token)

  const onSubmit = methods.handleSubmit(async (data) => {
    setErrorLogin(false)

    // TODO: Enviar el token en la auth y la nueva contraseña
    try {
      const response = await axios.post(api.resetPassword, data, headers)
      if (response.data && response.data.status === 'OK') {
        navigate('/login')
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
    if (page !== resetPasswordPage) {
      changePage(resetPasswordPage)
    }
  }, [])

  return (
    <section className='min-h-screen grid place-items-center'>
      <div className='w-full max-w-sm mx-auto overflow-hidden bg-slate-100 rounded-lg shadow-md dark:bg-slate-800'>
        <div className='px-6 py-4'>
          <AuthHeader />
          <div className='mt-3'>
            <span className='text-base font-medium text-gray-600'>{page.description}</span>
          </div>
          <FormProvider {...methods}>
            <form
              onSubmit={e => e.preventDefault()}
              noValidate
              autoComplete='off'
            >
              <Input
                icon={<IconPassword />}
                {...passwordValidation}
                id='newPassword'
              />

              {errorLogin && <ErrorForms error={errorLogin} />}

              <div className='flex items-center justify-between mt-4'>
                <button
                  type='button'
                  className='w-full px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                  onClick={onSubmit}
                >
                  Renovar contraseña
                </button>
              </div>
            </form>
          </FormProvider>
        </div>

        <div className='flex items-center px-6 py-4 bg-slate-300'>
          <span className='text-base text-gray-600 dark:text-gray-200'>AlentaDev®</span>

        </div>
      </div>

    </section>

  )
}

export default ResetPassword
