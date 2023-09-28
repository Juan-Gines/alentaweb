import { useContext, useEffect, useState } from 'react'
import { UiContext, UiDispatchContext } from '../../context/uiContext'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { api } from '../../constants/api'
import ErrorForms from '../forms/errorForms'

const Register = () => {
  const { page, sections } = useContext(UiContext)
  const register = sections.find((sec) => sec.title === 'Registro')
  const login = sections.find((sec) => sec.title === 'Login')
  const dispatch = useContext(UiDispatchContext)
  const [errorLogin, setErrorLogin] = useState(false)
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    repassword: ''
  })

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (formData.password === formData.repassword) delete formData.repassword
    try {
      await axios.post(api.register, formData)
      setFormData({
        name: '',
        email: '',
        password: '',
        repassword: ''
      })
      navigate('/login')
    } catch (error) {
      if (error.response.data.status === 'FAILED') {
        const { data } = error.response.data
        setErrorLogin(data.error)
      } else {
        console.error('Error en la solicitud:', error)
        setErrorLogin('<p>* Ha habido un error de conexión</p>')
      }
    }
  }
  useEffect(() => {
    if (page !== register) {
      dispatch({
        type: 'changedpage',
        page: register
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

          <form className='w-ful max-w-md'>
            <div className='relative flex items-center mt-8'>
              <span className='absolute'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z' />
                </svg>
              </span>

              <input
                type='text'
                className='block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                placeholder='Nombre'
                id='name'
                name='name'
                aria-label='Nombre'
                value={formData.name}
                onChange={handleInputChange}
              />
            </div>

            <div className='relative flex items-center mt-6'>
              <span className='absolute'>
                <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 mx-3 text-gray-300 dark:text-gray-500' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' />
                </svg>
              </span>

              <input
                type='email'
                className='block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                placeholder='Correo electrónico'
                name='email'
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
                type='password'
                className='block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                placeholder='Contraseña'
                name='password'
                aria-label='Contraseña'
                value={formData.password}
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
                type='password'
                className='block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40'
                placeholder='Repite contraseña'
                name='repassword'
                aria-label='Repite contraseña'
                value={formData.repassword}
                onChange={handleInputChange}
              />
            </div>

            {errorLogin && <ErrorForms error={errorLogin} />}

            <div className='mt-6'>
              <button
                className='w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-lg hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50'
                onClick={handleSubmit}
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
          <div>{formData.name}</div>
        </div>
      </div>
    </section>
  )
}

export default Register
