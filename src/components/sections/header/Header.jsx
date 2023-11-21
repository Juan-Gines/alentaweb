import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UiContext } from '../../../context/uiContext'
import burger from '../../../assets/img/menu.png'
import userIcon from '../../../assets/img/user.png'
import { useAuth } from '../../../context/authContext'
// todo terimar el toggle
const Header = () => {
  const { ui: { page, sections, navslice, userslice }, changePage, toggleNavSlice, toggleUserSlice } = useContext(UiContext)
  const { nav, auth: { login }, userPanel } = sections
  const [, ...navList] = Object.keys(nav)
  const navSections = navList.map(s => nav[s])
  const { home } = nav
  const [...userNavList] = Object.keys(userPanel)
  const userNavSections = userNavList.map(s => userPanel[s])
  const { auth, logout } = useAuth()

  return (
    <header className='absolute w-full top-0 max-h-screen'>
      <div className='absolute z-40 top-0 w-full flex items-center justify-between p-2 md:justify-evenly py-3 bg-gradient-to-tr from-sky-400 to-sky-800 text-slate-200'>
        <div className='flex gap-2 items-center cursor-pointer'>
          <div
            className='w-6 sm:w-8 md:hidden'
            onClick={toggleNavSlice}
          >
            <img
              src={burger}
              alt='Icono menu hamburguesa'
            />
          </div>
          <Link to={home.url}>
            <div
              className='flex gap-2 items-center'
              onClick={() => home === page && changePage(home)}
            >
              <div className='w-6 sm:w-8'>
                <img
                  src={home.icon}
                  alt='logo codigo'
                />
              </div>
              <h2 className='font-dancing text-base sm:text-2xl font-bold'>{home.title}</h2>
            </div>
          </Link>
        </div>
        <nav className='hidden md:flex justify-center gap-4 xl:gap-8 text-sm sm:text-sm lg:text-base '>
          {navSections.map((pag, i) => (
            <Link
              key={i}
              to={pag.url}
            >
              <div
                className={`${pag === page ? 'border-b-4 border-yellow-400' : ''}`}
                onClick={() => changePage(pag)}
              >
                {pag.title}
              </div>
            </Link>
          ))}
        </nav>
        <div>
          {!auth.user
            ? (
              <Link
                to={login.url}
                onClick={toggleUserSlice}
                className='flex justify-end items-center gap-2'
              >
                <div className='w-6 invert'>
                  <img
                    src={userIcon}
                    alt='Icono de usuario'
                  />
                </div>
                <button
                  className='bg-blue-700 py-0.5 px-3 sm:px-5 rounded-lg  text-sm hover:bg-blue-900 active:bg-blue-600'
                  onClick={() => changePage(login)}
                >
                  Login
                </button>
              </Link>
              )
            : (
              <div
                className='flex justify-end items-center gap-2'
                onClick={toggleUserSlice}
              >
                <div className='w-6 invert'>
                  <img
                    src={userIcon}
                    alt='Icono de usuario'
                  />
                </div>
                {auth.user.name}
              </div>
              )}
        </div>
      </div>
      <nav
        className={`absolute ${userslice === null ? 'hidden' : ''} ${userslice ? 'animate-growDown' : 'animate-growUp'} md:animate-growUp z-20 top-10 right-0 origin-top-center bg-gradient-to-br from-sky-400 to-sky-800 text-slate-200`}
      >
        <ul className='mt-10 mb-5'>
          {userNavSections.map((pag, i) => (
            <Link
              key={i}
              to={pag.url}
            >
              <li
                className={`${pag === page ? 'border-l-8 border-yellow-400 opacity-100' : ''} mb-3 cursor-pointer hover:bg-blue-800 py-1 px-3`}
                // eslint-disable-next-line no-unused-expressions
                onClick={() => { pag !== page ? changePage(pag) : null }}
              >
                {pag.title}
              </li>
            </Link>
          ))}
          <li
            className='mb-3 cursor-pointer hover:bg-blue-800 py-1 px-3'
            onClick={() => {
              logout()
              toggleUserSlice()
            }}
          >
            Logout
          </li>
        </ul>
      </nav>
      <nav
        className={`absolute ${navslice === null ? 'hidden' : ''} ${navslice ? 'animate-growDown' : 'animate-growUp'} z-20 top-10 origin-top-center bg-gradient-to-br from-sky-400 to-sky-800 text-slate-200`}
      >
        <ul className='mt-10 mb-5'>
          {navSections.map((pag, i) => (
            <Link
              key={i}
              to={pag.url}
            >
              <li
                className={`${pag === page ? 'border-l-8 border-yellow-400 opacity-100' : ''} mb-3 cursor-pointer hover:bg-blue-800 py-1 px-3`}
                // eslint-disable-next-line no-unused-expressions
                onClick={() => { pag !== page ? changePage(pag) : null }}
              >
                {pag.title}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>

  )
}

export default Header
