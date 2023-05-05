export default function Cadastro(){
  return(
    <div className="bg-gray-400 h-screen">
      
      <div className="container mx-auto">
        <div className="flex justify-center px-6 py-12">
   
          <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center" >
     
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg ">
              <h3 className="pt-4 text-2xl text-center">Crie uma conta !</h3>

              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
                      Nome
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="firstName"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
                      Sobrenome
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="lastName"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between">
                  <div className="mb-4 md:mr-2 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="Senha">
                      Senha
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="Senha"
                      type="Senha"
                      placeholder="******************"
                    />
                    <p className="text-xs italic text-red-500">Por favor, escolha uma senha válida</p>
                  </div>
                  <div className="md:ml-2">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_Senha">
                      Confirme sua Senha
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm  text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="c_Senha"
                      type="Senha"
                      placeholder="******************"
                    />
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-800 rounded-full hover:bg-blue-900 focus:shadow-outline"
                    type="button"
                  >
                    Registre sua Conta
                  </button>
                </div>
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-800 hover:text-blue-900"
                  
                    // Colocar link da pagina de login aqui
                    href="./index.html"
                  >
                    Já tem uma conta ? faça o Login !
                  </a>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}