import { useState } from "react"
import { Link } from "react-router-dom";
import {useAddUsersMutation} from "../store"

export default function Register() {

  const [addUser] = useAddUsersMutation();

  const [formData, setFormData] = useState({
    name: "",
    genero: "",
    nascimento: "",
    email: "",
    cep: "",
    banda:"",
    links:"",
    habilidades:"",
    senha:"",
    descricao:"",
    termoDeUso: true
  })

  const handleFormEdit = (event, name) => {
    setFormData((prevState) => {
      return { ...prevState, [name]: event.target.value }
    })
  }

  const handleForm = async (event) => {
    try {
      event.preventDefault()
      const data = JSON.stringify(formData)
      // console.log(addUserResults); 
      
      return await addUser(data)
    
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-gray-400 h-full">

      <div className="container mx-auto">
        <div className="flex justify-center px-6 py-12">

          <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center" >

            <div className="w-full lg:w-7/12 bg-white p-5 rounded-lg ">
              <h3 className="pt-4 text-2xl text-center">Crie uma conta !</h3>

              <form
                className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                onSubmit={handleForm}
              >
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="name">
                    Nome Completo
                  </label>
                  <input
                    className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="name"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.name}
                    required
                    onChange={(e) => handleFormEdit(e, 'name')}
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between gap-x-5">

                  <div className="mb-4 md:mb-0 w-full">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="genero">
                      Gênero
                    </label>
                    <select className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="genero" name="genero" 
                    // value={formData.genero}
                      required
                      // onClick={(e) => handleFormEdit(e, 'genero')}
                    >
                      <option value="Masculino">Masculino</option>
                      <option value="Feminino">Feminino</option>
                      <option value="Transgênero">Transgênero</option>
                      <option value="NaoInformar">Prefiro não informar</option>
                    </select>

                  </div>

                  <div className="w-full">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="dataNasc">
                      Data de Nascimento
                    </label>
                    <input
                      className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="dataNasc"
                      type="date"
                      value={formData.nascimento}
                      required
                      onChange={(e) => handleFormEdit(e, 'nascimento')}
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
                    value={formData.email}
                    required
                    onChange={(e) => handleFormEdit(e, 'email')}
                  />
                </div>

                <div className="mb-4 md:flex md:justify-between gap-x-5">


                  <div className="w-full">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="CEP">
                      CEP
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm  text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="CEP"
                      pattern="\d{5}-\d{3}"
                      placeholder="Digite seu CEP"
                      value={formData.cep}
                      required
                      onChange={(e) => handleFormEdit(e, 'cep')}
                    />
                  </div>

                  <div className="w-full">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="banda">
                      Banda
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="banda"
                      type="text"
                      placeholder="Digite o nome da sua banda"
                      value={formData.banda}
                      onChange={(e) => handleFormEdit(e, 'banda')}
                    />
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between gap-x-5">
                  <div className="mb-4 md:mr-2 md:mb-0 w-full">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="links">
                      Links
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="links"
                      type="text"
                      placeholder="Cole o seu link aqui"
                      value={formData.links}
                      required
                      onChange={(e) => handleFormEdit(e, 'links')}
                    />
                  </div>

                  <div className="mb-4 md:mr-2 md:mb-0 w-full">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="links">
                      Habilidades
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="links"
                      type="text"
                      placeholder="Liste suas Habilidades"
                      value={formData.habilidades}
                      required
                      onChange={(e) => handleFormEdit(e, 'habilidades')}
                    />
                  </div>

                </div>

                <div className="mb-4 md:flex md:justify-between gap-x-5">
                  <div className="mb-4 md:mr-2 md:mb-0 w-full">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="senha">
                      Senha
                    </label>
                    <input
                      className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="senha"
                      type="password"
                      placeholder="********"
                      value={formData.senha}
                      required
                      onChange={(e) => handleFormEdit(e, 'senha')}
                    />

                  </div>



                </div>

                <div className="mb-4 md:flex md:justify-between gap-x-5">
                  <div className="mb-4 md:mr-2 md:mb-0 w-full">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="links">
                      Descrição
                    </label>
                    <textarea className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline resize-none" id="msg" name="msg" rows="4" cols="60"  value={formData.descricao}
                    required
                    onChange={(e) => handleFormEdit(e, 'descricao')}></textarea>
                  </div>
                </div>

                <div className="mb-6 text-center">
                  <button
                    className="w-full px-4 py-2 font-bold text-white bg-blue-800 rounded-full hover:bg-blue-900 focus:shadow-outline"
                    type="submit"
                  >
                    Registre sua Conta
                  </button>
                </div>

                <div className="text-center">

                  <div className="flex items-center ">
                    <div className="flex items-center ">
                      <input id="termoDeUso" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " required/>
                    </div>
                    <div className="ml-2 text-xl">
                      <label htmlFor="termoDeUso" className="text-base font-bold text-gray-700">Eu concordo com os termos de uso</label>

                    </div>
                  </div>

                </div>

                <div className="text-center">
                  <Link 
                    className="inline-block text-sm text-blue-800 hover:text-blue-900" 
                    to={'/login'}
                  >
                    Já tem uma conta? Faça o Login!
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}