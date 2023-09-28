import { useContext, useEffect, useState } from 'react'
import { UiContext, UiDispatchContext } from '../../context/uiContext'
import { Link, useNavigate } from 'react-router-dom'
import { api } from '../../constants/api'
import axios from 'axios'
import { useAuth } from '../../context/authContext'
import ErrorForms from '../forms/errorForms'

const Login = () => {
  const { page, sections } = useContext(UiContext)
  const loginPage = sections.find((sec) => sec.title === 'Login')
  const register = sections.find((sec) => sec.title === 'Registro')
  const dispatch = useContext(UiDispatchContext)
  const { login } = useAuth()
  const [errorLogin, setErrorLogin] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const navigate = useNavigate()

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      const { data } = await axios.post(api.login, formData)
      if (data && data.status === 'OK') {
        login(data.data)
        navigate('/home')
      }
    } catch (error) {
      if (error.response && error.response.data.status === 'FAILED') {
        const { data } = error.response.data
        // console.log(data.error)
        setErrorLogin(data.error)
      } else {
        console.error('Error en la solicitud:', error)
        setErrorLogin('error')
      }
    }
  }
  useEffect(() => {
    if (page !== loginPage) {
      dispatch({
        type: 'changedpage',
        page: loginPage
      })
    }
  }, [])

  return (
    <section className='min-h-screen grid place-items-center'>
      <div className='w-full max-w-sm mx-auto overflow-hidden bg-slate-100 rounded-lg shadow-md dark:bg-slate-800'>
        <div className='px-6 py-4'>
          <div className='flex justify-center mx-auto'>
            <img className='w-auto h-7 sm:h-8' src={page.icon} alt='' />
          </div>
          <h3 className='mt-3 text-xl font-medium text-center text-gray-600 dark:text-gray-200'>Alenta Dev</h3>
          <form>
            <div className='relative flex items-center mt-4'>
              <span className='absolute'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </span>
              <input
                className='block w-full px-10 py-3 text-gray-700 placeholder-gray-400 bg-white border rounded-lg dark:bg-slate-800 dark:border-slate-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 invalid:ring-red-300 invalid:border-red-400'
                type='email'
                id='email'
                name='email'
                placeholder='Correo electrónico'
                aria-label='Correo electrónico'
                value={formData.email}
                onChange={handleInputChange}
              />
            </div>

            <div className='relative flex items-center mt-4'>
              <span className='absolute'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' />
                </svg>
              </span>
              <input
                className='block w-full px-10 py-3 text-gray-700 placeholder-gray-400 bg-white border rounded-lg dark:bg-slate-800 dark:border-slate-600 dark:placeholder-gray-400 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-blue-300 invalid:border-red-400'
                type='password'
                id='password'
                name='password'
                placeholder='Contraseña'
                aria-label='Contraseña'
                value={formData.password}
                onChange={handleInputChange}
              />
            </div>

            {errorLogin && <ErrorForms error={errorLogin} />}

            <div className='flex items-center justify-between mt-4'>
              <div href='#' className='text-sm text-gray-600 dark:text-gray-200 hover:text-slate-500'>
                <span>¿Olvidaste la contraseña?</span>
              </div>
              <button
                type='button'
                className='px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                onClick={handleSubmit}
              >
                Login
              </button>
            </div>
          </form>
        </div>

        <div className='flex items-center justify-center py-4 text-center bg-slate-300 dark:bg-slate-700'>
          <span className='text-sm text-gray-600 dark:text-gray-200'>¿No tienes cuenta? </span>

          <Link
            to={register.url}
            onClick={() => {
              dispatch({
                type: 'changedpage',
                page: register
              })
            }}
          >
            <span className='mx-2 text-sm font-semibold text-blue-500 dark:text-blue-400 hover:text-blue-400'>Regístrate</span>
          </Link>
        </div>
      </div>

    </section>

  )
}

export default Login
