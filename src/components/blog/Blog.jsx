import MainHeader from '../sections/header/MainHeader'
import console from '../../assets/img/Consola.png'
import { useContext } from 'react'
import { UiContext, UiDispatchContext } from '../../context/uiContext'

const Blog = () => {
  const { page, sections } = useContext(UiContext)
  const blog = sections.find((sec) => sec.title === 'Blog')
  const dispatch = useContext(UiDispatchContext)
  if (page !== blog) {
    dispatch({
      type: 'changedpage',
      page: blog
    })
  }
  return (
    <main className='min-h-screen'>
      <MainHeader />
      <section className='p-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        <article className='p-5 md:col-span-3 sm:col-span-2'>
          <img src={console} />
        </article>
        <article className='p-5'>
          <img src={console} />
        </article>
        <article className='p-5'>
          <img src={console} />
        </article>
        <article className='p-5'>
          <img src={console} />
        </article>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
        <div>13</div>
        <div>14</div>
        <div>15</div>
        <div>16</div>
        <div>17</div>
        <div>18</div>
        <div>19</div>
        <div>20</div>
      </section>
    </main>
  )
}

export default Blog
