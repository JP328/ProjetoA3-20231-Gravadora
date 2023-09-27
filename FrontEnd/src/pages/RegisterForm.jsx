import { useState } from "react"
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { useAddUserMutation } from "../store"
import Header from "../components/Header";
import { toast } from "react-toastify";

export default function Register() {
  const [addUser] = useAddUserMutation();

  const [formData, setFormData] = useState({
    nomeCompleto: "",
    genero: "Masculino",
    dataDeNascimento: "",
    email: "",
    senha: "",
    cep: "",
    linksPortifolio: [""],
    descricao: "",
    banda: "",
    habilidades: [""],
    termoDeUso: true
  })

  const handleFormEdit = (event, name) => {
    setFormData((prevState) => {
      return { ...prevState, [name]: event }
    })
  }

  const handleForm = async (event) => {
    try {
      event.preventDefault()
      await addUser(formData).then(res => {
        toast.success(res.error.data, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          });
      })
    } catch (err) {
      toast.error("Serviço indisponível no momento! Tente mais tarde.", {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });
    }
  }

  return (
    <>
      <Header login={false} />
      <div className="bg-loginWallpaper bg-center bg-cover flex h-full pt-20">

        <div className="container mx-auto">
          <div className="flex justify-center py-12">

            <div className="w-full xl:w-3/4 lg:w-11/12 flex justify-center" >
              <div className="w-full lg:w-9/12 bg-white p-5 rounded-lg ">
                <h3 className="pt-4 text-2xl text-center">Crie sua conta!</h3>

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
                      value={formData.nomeCompleto}
                      required
                      onChange={(e) => handleFormEdit(e.target.value, 'nomeCompleto')}
                    />
                  </div>
                  <div className="mb-4 md:flex md:justify-between gap-x-5">

                    <div className="mb-4 md:mb-0 w-full">
                      <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="genero">
                        Gênero
                      </label>
                      <select className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="genero" name="genero" 
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
                        value={formData.dataDeNascimento}
                        required
                        onChange={(e) => handleFormEdit(e.target.value, 'dataDeNascimento')}
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
                        onChange={(e) => handleFormEdit(e.target.value, 'banda')}
                      />
                    </div>
                  </div>

                  <div className="mb-4 md:flex md:justify-between gap-x-6">
                    <div className="flex flex-col">
                      {formData.habilidades.map((habilidade, index) => (
                        <div key={`skills ${index}`} className={"mb-4 md:mb-0 w-full " + index === 0 ? "" : ""}>
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

                                <button type="button" className="mb-3 text-blue-700 hover:text-blue-800 text-center" onClick={() => {
                                  formData.habilidades.push("")
                                  handleFormEdit(formData.habilidades, 'habilidades')
                                }}>
                                  <AiOutlinePlusCircle className="text-3xl transition-all hover:animate-bounce"/>
                                </button>

                            {
                              index > 0 ?
                                <button type="button" className="mb-3 text-blue-700 hover:text-blue-800 text-center" onClick={() => {
                                  formData.habilidades.splice(index, 1)
                                  handleFormEdit(formData.habilidades, 'habilidades')
                                }}>
                                  <AiOutlineMinusCircle className="text-3xl transition-all hover:animate-bounce"/>
                                </button> 
                              : false
                            }

                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col">
                      {formData.linksPortifolio.map((link, index) => (
                        <div key={`link ${index}`} className="mb-4 md:mr-2 md:mb-0 w-full">
                          <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="links">
                            Links de Portfólio
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
                                formData.linksPortifolio[index] = e.target.value
                                handleFormEdit(formData.linksPortifolio, 'linksPortifolio')
                              }}
                            />

                            <button type="button" className="mb-3 text-blue-700 hover:text-blue-800 text-center" onClick={() => {
                            formData.linksPortifolio.push("")
                            handleFormEdit(formData.linksPortifolio, 'linksPortifolio')
                            }}>
                              <AiOutlinePlusCircle className="text-3xl transition-all hover:animate-bounce"/>
                            </button>

                            {
                              index > 0 ?
                                <button type="button" className="mb-3 text-blue-700 hover:text-blue-800 text-center" onClick={() => {
                                  formData.linksPortifolio.splice(index, 1)
                                  handleFormEdit(formData.linksPortifolio, 'linksPortifolio')
                                }}>
                                  <AiOutlineMinusCircle className="text-3xl transition-all hover:animate-bounce"/>
                                </button> 
                              : false
                            }

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
                        type="password"
                        placeholder="********"
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

                  {/* <div className="text-center">

                    <div className="flex items-center ">
                      <div className="flex items-center ">
                        <input id="termoDeUso" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2 " value={formData.termoDeUso}
                          required
                          checked={formData.termoDeUso}
                          onChange={() => handleFormEdit(!formData.termoDeUso, 'termoDeUso')} />
                      </div>
                      <div className="ml-2 text-xl">
                        <label htmlFor="termoDeUso" className="text-base font-bold text-gray-700">Eu concordo com os termos de uso</label>

                      </div>
                    </div>

                  </div> */}

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
    </>
  )
}