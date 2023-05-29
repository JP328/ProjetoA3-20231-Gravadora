import { useState } from "react"
import requisition from "../api"
// import axios from "axios";

// Termos de uso
// Dividir links e habilidades, array no formData
// Arrumar o genero

export default function Register() {
  const [formData, setFormData] = useState({
    name: "",
    genero: "",
    nascimento: "",
    email: "",
    cep: "",
    banda: "",
    links: [""],
    habilidades: [""],
    senha: "",
    descricao: "",
    termosDeUso: false
  })

  const handleFormEdit = (event, name) => {
    console.log(event)
    setFormData((prevState) => {
      return { ...prevState, [name]: event }
    })
  }

  const handleForm = async (event) => {
    try {
      event.preventDefault()
      const data = JSON.stringify(formData)

      console.log(data);
      return requisition(data, "postUser")
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="bg-gray-400 h-full">

      <div className="container mx-auto">
        <div className="flex justify-center py-12">

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
                    onChange={(e) => handleFormEdit(e.target.value, 'name')}
                  />
                </div>
                <div className="mb-4 md:flex md:justify-between gap-x-5">

                  <div className="mb-4 md:mb-0 w-full">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="genero">
                      Gênero
                    </label>
                    <select className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="genero" name="genero" value={formData.genero}
                      required
                      onChange={(e) => handleFormEdit(e.target.value, 'genero')} >
                      {[
                        { value: 'Masculino', text: 'Masculino' },
                        { value: 'Feminino', text: 'Feminino' },
                        { value: 'Transgênero', text: 'Transgênero' },
                        { value: 'NaoInformar', text: 'Prefiro não informar' },
                      ].map(option => (
                        <option key={option.value} value={option.value}>{option.text}</option>
                      ))}
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
                      onChange={(e) => handleFormEdit(e.target.value, 'nascimento')}
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
                    onChange={(e) => handleFormEdit(e.target.value, 'email')}
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
                      onChange={(e) => handleFormEdit(e.target.value, 'cep')}
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
                      required
                      onChange={(e) => handleFormEdit(e.target.value, 'banda')}
                    />
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between gap-x-6">

                  <div className="flex flex-col">
                    {formData.habilidades.map((habilidade, index) => (
                      <div key={`link ${index}`} className={"mb-4 md:mb-0 w-full " + index === 0 ? "" : ""}>
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="habilidades">
                          Habilidades
                        </label>
                        <div className="grid grid-cols-6 gap-2">
                          <input
                            className="w-full px-3 col-span-4 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                            id="habilidades"
                            type="text"
                            placeholder="Digite sua habilidade"
                            value={habilidade}
                            required

                            onChange={(e) => {
                              formData.habilidades[index] = e.target.value
                              handleFormEdit(formData.habilidades, 'habilidades')
                            }}
                          />

                          <button type="button" className="mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none   rounded-lg text-center  p-1 items-center " onClick={() => {
                            formData.habilidades.push("")
                            handleFormEdit(formData.habilidades, 'habilidades')
                          }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mx-auto">
                              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                            </svg>

                          </button>
                          {index > 0 ? (<button type="button" className="mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none rounded-lg text-center  p-1 items-center " onClick={() => {
                            formData.habilidades.splice(index, 1)
                            handleFormEdit(formData.habilidades, 'habilidades')
                          }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mx-auto">
                              <path fillRule="evenodd" d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                          </button>) : (false)}

                        </div>
                      </div>
                    ))}
                  </div>



                  <div className="flex flex-col">
                    {formData.links.map((link, index) => (
                      <div key={`link ${index}`} className="mb-4 md:mr-2 md:mb-0 w-full">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="links">
                          Links
                        </label>
                        <div className="grid grid-cols-6 gap-2">
                          <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline col-span-4"
                            id="links"
                            type="text"
                            placeholder="Cole o seu link aqui"
                            value={link}
                            required

                            onChange={(e) => {
                              formData.links[index] = e.target.value
                              handleFormEdit(formData.links, 'links')
                            }}
                          />

                          <button type="button" className="mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none   rounded-lg text-center  p-1 items-center " onClick={() => {
                            formData.links.push("")
                            handleFormEdit(formData.links, 'links')
                          }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mx-auto">
                              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                            </svg>

                          </button>
                          {index > 0 ? (<button type="button" className="mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none   rounded-lg text-center  p-1 items-center " onClick={() => {
                            formData.links.splice(index, 1)
                            handleFormEdit(formData.links, 'links')
                          }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mx-auto">
                              <path fillRule="evenodd" d="M5.25 12a.75.75 0 01.75-.75h12a.75.75 0 010 1.5H6a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                            </svg>
                          </button>) : (false)}

                        </div>
                      </div>
                    ))}
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
                      type="Senha"
                      placeholder="******************"
                      value={formData.senha}
                      required
                      onChange={(e) => handleFormEdit(e.target.value, 'senha')}
                    />

                  </div>



                </div>

                <div className="mb-4 md:flex md:justify-between gap-x-5">
                  <div className="mb-4 md:mr-2 md:mb-0 w-full">
                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="links">
                      Descrição
                    </label>
                    <textarea className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline resize-none" id="msg" name="msg" rows="4" cols="60" value={formData.descricao}
                      required
                      onChange={(e) => handleFormEdit(e.target.value, 'descricao')}></textarea>
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
                      <input id="termosDeUso" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " value={formData.termosDeUso}
                        required
                        checked={formData.termosDeUso}
                        onChange={() => handleFormEdit(!formData.termosDeUso, 'termosDeUso')} />
                    </div>
                    <div className="ml-2 text-xl">
                      <label htmlFor="termosDeUso" className="text-base font-bold text-gray-700">Eu concordo com os termos de uso</label>

                    </div>
                  </div>

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