import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Link } from 'react-router-dom'

export default function Header(props) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)  
  
  const handleGoToSection = (ref) => {
    setMobileMenuOpen(false)
    ref.current?.scrollIntoView({behavior: "smooth"});
  }

  const removeSession = () => {
    localStorage.removeItem("userId")
    localStorage.removeItem("admId")
  }

  return (
      <header className='w-full fixed z-40 shadow shadow-gray-500 drop-shadow-md'>
        <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-slate-100">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">

            <a href="./" className="m-auto md:m-0 flex items-center">
              <span className="self-center text-xl font-semibold whitespace-nowrap mx-2">
                Tech Records
              </span>
              <img
                src="./img/music.png"
                className="mr-3 h-6 sm:h-9"
                alt="Tech Records"
              />
            </a>

            {
              (props.aboutUs && props.ourTeam && props.contact) ? 
                <div
                  className="hidden justify-around items-center w-full lg:flex lg:w-auto"
                >
                  <ul className="flex flex-col gap-8 items-center max-lg:mt-4 font-medium lg:flex-row">
                    <li>
                      <Link
                        to={"/"}
                        className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 hover:text-blue-800 cursor-pointer"
                        aria-current="page"
                      >
                        Inicio
                      </Link>
                    </li>
                    <li 
                      onClick={() => handleGoToSection(props.aboutUs)} 
                      className="py-2 px-4 text-black lg:p-0 cursor-pointer hover:text-blue-800">
                      Sobre Nós
                    </li>
                    <li
                      onClick={() => handleGoToSection(props.ourTeam)} 
                      className="py-2 px-4 text-black lg:p-0 hover:text-blue-800 cursor-pointer">
                      Nosso Time
                    </li>
                    <li
                      onClick={() => handleGoToSection(props.contact)} 
                      className="py-2 px-4 text-black lg:p-0 hover:text-blue-800 cursor-pointer">
                      Contato
                    </li>
                  </ul>
                </div>
              : null
            }
            
            <div className="flex items-center justify-between lg:order-2 w-full md:w-auto">
              {
                props.login == null ?
                  <div className="flex items-center justify-between lg:order-2 w-full md:w-auto">
                    <Link
                      to={'/login'}
                      className="text-slate-100 bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none focus:ring-primary-800"              
                    >
                      Login
                    </Link>
                  </div>
                :
                  props.login === true ?
                    <div className="flex items-center justify-between lg:order-2 w-full md:w-auto">
                      <Link
                        to={'/'}
                        className="text-slate-100 bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none focus:ring-primary-800"
                        onClick={() => removeSession()}              
                      >
                        Logout
                      </Link>
                    </div>
                  : 
                    <div className="flex items-center justify-between lg:order-2 w-full md:w-auto">
                      <Link
                        to={'/'}
                        className="text-slate-100 bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none focus:ring-primary-800"              
                      >
                        Voltar
                      </Link>
                    </div>
              }

              {
                (props.aboutUs && props.ourTeam && props.contact) ? 
                  <button
                    type="button"
                    className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2"
                    onClick={() => setMobileMenuOpen(true)}
                  >
                    <span className="sr-only">Open main menu</span>
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                    <svg
                      className="hidden w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                : null
              }

            </div>
            
            {
              (props.aboutUs && props.ourTeam && props.contact) ? 
                <Dialog
                  as="div"
                  className="fixed z-50 lg:hidden"
                  open={mobileMenuOpen}
                  onClose={setMobileMenuOpen}
                >
                  {/* <div className="fixed inset-0 z-50" /> */}
                  <Dialog.Panel
                    focus="true"
                    className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
                  >
                    <div className="flex items-center justify-between">
                      <div className="-m-1.5 p-1.5">
                        <h1 className="">Tech Records</h1>
                      </div>
                      <button
                        type="button"
                        className="h-10 -m-2.5 rounded-md p-2.5 text-gray-900"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {/* achar um svg de X */}
                        <span className="sr-only">Close main menu</span>
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                            clipRule="evenodd"
                          />
                        </svg>
                        
                      </button>
                    </div>

                    <div className="mt-6 flow-root">
                      <div className="-my-6 divide-y divide-gray-500/10">
                        <ul className="space-y-2 py-6">
                          <li>
                            <Link
                              to={"/"}
                              onClick={() => setMobileMenuOpen(false)}
                              className="block py-2 pr-4 pl-3 text-black rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 hover:text-blue-800"
                              aria-current="page"
                            >
                              Inicio
                            </Link>
                          </li>
                          <li 
                            onClick={() => handleGoToSection(props.aboutUs)} 
                            className="py-2 px-4 text-black lg:p-0 cursor-pointer hover:text-blue-800">
                            Sobre Nós
                          </li>
                          <li
                            onClick={() => handleGoToSection(props.ourTeam)} 
                            className="py-2 px-4 text-black lg:p-0 hover:text-blue-800">
                            Nosso Time
                          </li>
                          <li
                            onClick={() => handleGoToSection(props.contact)} 
                            className="py-2 px-4 text-black lg:p-0 hover:text-blue-800">
                            Contato
                          </li>
                        </ul>
                      </div>
                    </div>
                  </Dialog.Panel>
                </Dialog>
              : null
            }
          </div>
        </nav>
      </header>
  )
}
