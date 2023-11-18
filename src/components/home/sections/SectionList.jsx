import { useContext } from 'react'
import Section from './Section'
import { UiContext } from '../../../context/uiContext'

const SectionList = () => {
  const { ui: { sections: { nav } } } = useContext(UiContext)

  const [, ...sectionList] = Object.keys(nav)
  return (
    <section className=' px-5 py-16 sm:px-10 md:p-16 max-w-7xl m-auto font-semibold text-gray-700'>
      <div className='grid gap-6 grid-cols-1 lg:grid-cols-2'>
        {sectionList.map((sec, i) => <Section key={i} section={nav[sec]} />)}
      </div>
    </section>
  )
}

export default SectionList
