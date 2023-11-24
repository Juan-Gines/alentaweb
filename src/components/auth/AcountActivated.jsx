import { useContext, useEffect } from 'react'
import { UiContext } from '../../context/uiContext'
import AuthHeader from '../forms/headers/AuthHeader'

const ActivatedAcount = () => {
  const { ui: { page, sections }, changePage } = useContext(UiContext)
  const acountActivatedPage = sections.auth.acountActivated

  useEffect(() => {
    if (page !== acountActivatedPage) {
      changePage(acountActivatedPage)
    }
  }, [])

  return (
    <section className='min-h-screen grid place-items-center'>
      <div className='w-full max-w-sm mx-auto overflow-hidden bg-slate-100 rounded-lg shadow-md'>
        <div className='px-6 py-4'>
          <AuthHeader />
          <div className='mt-3'>
            <span className='text-base font-medium text-gray-600'>{page.description}</span>
          </div>
        </div>
        <div className='flex items-center px-6 py-4 bg-slate-300'>
          <span className='text-base text-gray-600'>Revisa tu bandeja de spam</span>
        </div>
      </div>

    </section>

  )
}

export default ActivatedAcount
