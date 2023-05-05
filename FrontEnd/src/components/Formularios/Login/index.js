export default function Login(){
  return(
    <div className="bg-gray-400 h-screen">
     
      <div className="container mx-auto">
        <div className="flex justify-center px-6 py-12">
         
          <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center" >
          
            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg ">
              <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
              
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
                <div className="mb-4 ">
                  <div className="mb-4 md:mb-0">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="senha">
                      Senha
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="senha"
                      type="senha"
                      placeholder="******************"
                    />
                    <p className="text-xs italic text-red-500">Senha ou email invalido</p>
                  </div>
                </div>
                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-800 rounded-full hover:bg-blue-900 focus:shadow-outline"
                    type="button"
                  >
                   Login
                  </button>
                </div>
                
                
                <div className="text-center">
                  <a
                    className="inline-block text-sm text-blue-800 hover:text-blue-900"
                  
                    // Colocar link da pagina de login aqui
                    href="./index.html"
                  >
                    Você ainda não tem uma conta ? Cadastre-se!
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