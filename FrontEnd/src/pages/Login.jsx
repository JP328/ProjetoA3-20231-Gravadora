import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useValidationByPasswordMutation } from "../store";

export default function LoginPage() {
  const navigate = useNavigate()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    standardUser: false
  })

  const [ validationByPassword ] = useValidationByPasswordMutation()

  const handleForm = (event, name) => {
    setLoginData((prevState) => {
      return { ...prevState, [name] : event}
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const result = await validationByPassword(loginData)
    
    if(result.data.length !== 0) {
      const id = result.data[0].idUsuario
      localStorage.setItem("userId", id)
      return loginData.standardUser ? navigate("/usuario") : navigate("/admin-home")
    }
  }

  return(
    <div className="bg-gradient-to-br from-blue-500 to-pink-500 h-screen flex justify-center items-center">
      <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center" >  
        <div className="w-full lg:w-7/12 p-5 rounded-lg ">
          <form className="px-8 pb-8 mb-4 rounded" onSubmit={handleSubmit}>
          
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-white" htmlFor="email">
                Email
              </label>
              <input
                className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                value={loginData.email}
                onChange={(e) => handleForm(e.target.value, "email")}
                required
                placeholder="Digite seu e-mail"
              />
            </div>

            <div className="mb-4 ">
              <div className="mb-4 md:mb-0">
                <label className="block mb-2 text-sm font-bold text-white" htmlFor="senha">
                  Senha
                </label>
                <input
                  className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="senha"
                  type="password"
                  value={loginData.password}
                  onChange={(e) => handleForm(e.target.value, "password")}
                  required
                  placeholder="********"
                />
                {/* <p className="text-xs italic text-red-500">Senha ou email invalido</p> */}
              </div>
            </div>

            <div className="flex items-center ml-2 mb-5">
              <div className="flex items-center">
                <input id="standardUser" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 mt-1" value={loginData.standardUser}
                  checked={loginData.standardUser}
                  onChange={() => handleForm(!loginData.standardUser, 'standardUser')} />
              </div>
              <div className="ml-2 text-xl">
                <label htmlFor="standardUser" className="text-base font-bold text-white">
                  Sou um Talento.
                </label>
              </div>
            </div>

            <div className="mb-6 text-center">
              <button
                className="w-1/2 px-4 py-2 font-bold text-white border border-white rounded-full hover:border-blue-200 hover:text-blue-200 focus:shadow-outline"
                type="submit"                
              >
                Entrar
              </button>
            </div>
            
            <div className="text-center">
              <Link 
                className="inline-block text-sm text-white hover:text-blue-700 hover:underline" 
                to={'/cadastre-se'}
              >
                Você ainda não tem uma conta ? Cadastre-se!
              </Link>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}