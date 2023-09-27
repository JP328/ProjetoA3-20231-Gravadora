import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useValidationByPasswordMutation } from "../store";
import Header from "../components/Header";

export default function LoginPage() {
  const navigate = useNavigate()
  const [ validationByPassword ] = useValidationByPasswordMutation()

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    standardUser: true
  })

  useEffect(() => {
    if (localStorage.getItem("admId")){
      navigate("/admin-home")
    } else if (localStorage.getItem("userId")) {
      navigate("/usuario")
    }
  },[navigate]);
  

  const handleForm = (event, name) => {
    setLoginData((prevState) => {
      return { ...prevState, [name] : event}
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await validationByPassword(loginData).then(res => {

      if (res.data.length !== 0) {
        const id = res.data[0].idUsuario
        
        if(res.data.length !== 0) {
          if(loginData.standardUser === true) {
            localStorage.setItem("userId", id)
            return navigate("/usuario")
          }
    
          localStorage.setItem("admId", id)
          return navigate("/admin-home")
        }      
      } else {
        toast.error("Email ou Senha incorretos!", {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          }); 
      }
    }).catch(err => {
      toast.error("Serviço indisponível no momento! Tente mais tarde.", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    })
  }

  return(
    <>
      <Header login={false} />
      <div className="bg-loginWallpaper bg-center bg-cover lg:aspect-2500/1800 h-full w-full flex justify-center">
        <div className="w-full xl:w-3/4 lg:w-11/12 md:w-4/5 relative my-20 flex justify-center">  
          <div className="w-full lg:w-7/12 p-5 rounded-lg mt-5">
            <h1 className="text-4xl max-sm:text-2xl text-white text-center mb-2">
            {loginData.standardUser ? "Bem vindo a Tech Records!" : "Bem vindo administrador!"}
            </h1>
            <h2 className="text-3xl max-sm:text-xl text-white text-center mb-12 ">Faça seu Login na plataforma!</h2>

            <div className="flex items-end">
              <button 
                className="w-1/2 h-10 font-bold max-sm:text-sm text-white border border-white backdrop-filter backdrop-blur-xl" disabled>
                {loginData.standardUser ? "Usuário" : "Administrador"}
              </button>
              
              <button 
                className="ml-auto w-2/6 h-8 font-bold max-sm:text-xs text-gray-300 border border-gray-200 bg-gray-200/10 backdrop-filter backdrop-blur-xl appearance-none focus:outline-none"
                onClick={() => handleForm(!loginData.standardUser, 'standardUser')}>
                {loginData.standardUser ? "Administrador" : "Usuário"}
              </button>
            </div>
            
            <form className="px-8 pb-8 mb-4 border border-white rounde backdrop-filter backdrop-blur-lg shadow-sm shadow-white drop-shadow-xl" onSubmit={handleSubmit}>
              <div className="my-4">
                <label className="block mb-2 text-sm font-bold text-white" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white font-bold placeholder:font-normal placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="email"
                  type="email"
                  value={loginData.email}
                  onChange={(e) => handleForm(e.target.value, "email")}
                  autoComplete="off"
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

              <div className="my-4 text-center">
                <button
                  className="w-full px-4 py-2 font-bold text-white border border-white rounded-full hover:border-blue-200 hover:text-blue-200 focus:shadow-outline"
                  type="submit"                
                >
                  Entrar
                </button>
              </div>
              
              <div className="text-center">
                <Link 
                  className="inline-block text-sm font-semibold text-white hover:text-slate-200 hover:font-normal appearance-none focus:outline-none" 
                  to={'/cadastre-se'}
                >
                  Você ainda não tem uma conta? Cadastre-se!
                </Link>
              </div>
            </form>

          </div>
        </div>
      </div>
    </>
  )
}