import { Link } from "react-router-dom";

export default function LoginPage(){
  return(
    <div className="bg-gradient-to-br from-blue-500 to-pink-500 h-screen flex justify-center items-center">
     
      <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center" >  
        <div className="w-full lg:w-7/12 p-5 rounded-lg ">
          <form className="px-8 pb-8 mb-4 rounded">
          
            <div className="mb-4">
              <label className="block mb-2 text-sm font-bold text-white" htmlFor="email">
                Email
              </label>
              <input
                className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
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
                  required
                  placeholder="********"
                />
                {/* <p className="text-xs italic text-red-500">Senha ou email invalido</p> */}
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