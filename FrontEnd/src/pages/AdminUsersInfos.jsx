import { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import { useFectchUserByIdQuery } from "../store";
import SendFeedback from "../components/Feedback/SendFeedback";
import Header from "../components/Header";

function Admin() {
  const id = localStorage.getItem("userId")
  const { data, isFetching } = useFectchUserByIdQuery(id); 
  
  const [formData, setFormData] = useState({
    nomeCompleto: "",
    genero: "",
    dataDeNascimento: "",
    email: "",
    senha: "",
    cep: "",
    descricao: "",
    banda: "",
    habilidades: [""]
  })

  let [linksPortifolio, setLinksPortifolio] = useState([])

  useEffect(()=> {
    if(!isFetching && data !== undefined) {
      setLinksPortifolio(data[0].linksPortifolio.split("  "));
      const habilidades = data[0].habilidades.split("  ");

      setFormData((prevState) => {
        return { ...prevState, ...data[0], habilidades }
      })
    }  
  },[data, isFetching, setLinksPortifolio])

  const handleFormEdit = (event, name) => {
    setFormData((prevState) => {
      return { ...prevState, [name]: event.target.value }
    })
  }
  
  // const handleFormEdit = (event, name) => {
  //   setFormData((prevState) => {
  //     return { ...prevState, [name]: event.target.value }
  //   })
  // }

  // const submitForm = async (event) => {
  //   try {
  //     event.preventDefault()
  //     // const data = JSON.stringify(formData)
      
  //     // return await addUser(data)
    
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  return (
    <>
      <Header login={true} />
      <div 
        className="w-full h-fit text-white bg-gradient-to-br from-blue-500 to-pink-500 flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl my-10" >Olá administrador!</h1>
        <p className="max-md:text-xl px-4 mb-4">
          Bem vindo! Aqui você pode conferir os vídeos do usuário e suas informações pessoais, além de poder enviar feedbacks para o usuário.
        </p>
        <div className="w-11/12 max-md:w-full h-full px-10 grid grid-cols-2 items-center">

          {
            linksPortifolio.map((link) => {
              return(
                <div key={link} className="h-48 w-80 md:w-full lg:w-11/12 lg:h-72 my-4 ">
                  <ReactPlayer width='100%' height="100%" url={link}/>
                </div>
              )
            })
          }
        </div>

        <div className="w-11/12 h-fit my-14 flex max-md:flex-col">
          <div className="w-1/2 max-md:w-full">
            <h2 className="font-bold text-xl ml-7 mb-3 mt-7">Dados do Usuário</h2>
            <p className="mb-4 ml-7 font-bold">
              Aqui você pode visualizar as informações pessoais do usuário. 
            </p>
            <form
              className="px-8"
            >
                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-white" htmlFor="name">
                      Nome Completo
                    </label>
                    <input
                      className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                      id="name"
                      type="text"
                      placeholder="Digite seu nome completo"
                      value={formData.nomeCompleto}
                      required
                      onChange={(e) => handleFormEdit(e, 'nomeCompleto')}
                    />
                  </div>
                  
                <div className="mb-4 md:flex md:justify-between gap-x-5">

                      <div className="mb-4 md:mb-0 w-full">
                        <label className="block mb-2 text-sm font-bold text-white" htmlFor="genero">
                          Gênero
                        </label>
                        <select className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="genero" name="genero" 
                          required
                          value={formData.genero}
                          onChange={(e) => handleFormEdit(e, 'genero')} >
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
                        <label className="block mb-2 text-sm font-bold text-white" htmlFor="dataNasc">
                          Data de Nascimento
                        </label>
                        <input
                          className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          id="dataNasc"
                          type="date"
                          value={formData.dataDeNascimento}
                          required
                          onChange={(e) => handleFormEdit(e, 'dataDeNascimento')}
                        />
                      </div>
                </div>

                  <div className="mb-4">
                    <label className="block mb-2 text-sm font-bold text-white" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                      <label className="block mb-2 text-sm font-bold text-white" htmlFor="CEP">
                        CEP
                      </label>
                      <input
                        className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="CEP"
                        pattern="\d{5}-\d{3}"
                        placeholder="Digite seu CEP"
                        value={formData.cep}
                        required
                        onChange={(e) => handleFormEdit(e, 'cep')}
                      />
                    </div>

                    <div className="w-full">
                      <label className="block mb-2 text-sm font-bold text-white" htmlFor="banda">
                        Banda
                      </label>
                      <input
                        className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        id="banda"
                        type="text"
                        placeholder="Digite o nome da sua banda"
                        value={formData.banda}
                        onChange={(e) => handleFormEdit(e, 'banda')}
                      />
                    </div>
                  </div>

                  <div className="mb-4 md:flex md:justify-between gap-x-6">
                    <div className="flex flex-col">
                      {formData.habilidades.map((habilidade, index) => (
                        <div key={`skills ${index}`} className={"mb-4 md:mb-0 w-full " + index === 0 ? "" : ""}>
                          <label className="block mb-2 text-sm font-bold text-white" htmlFor="habilidades">
                            Habilidades
                          </label>
                          <div className="grid grid-cols-6 gap-2">
                            <input
                              className="w-full bg-slate-200/30 px-3 col-span-4 py-2 mb-3 text-sm leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                  </div>

                  <div className="mb-4 md:flex md:justify-between gap-x-5">
                    <div className="mb-4 md:mr-2 md:mb-0 w-full">
                      <label className="block mb-2 text-sm font-bold text-white" htmlFor="senha">
                        Senha
                      </label>
                      <input
                        className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                      <label className="block mb-2 text-sm font-bold text-white" htmlFor="links">
                        Descrição
                      </label>
                      <textarea className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="msg" name="msg" rows="4" cols="60"  value={formData.descricao}
                      required
                      onChange={(e) => handleFormEdit(e, 'descricao')}
                      />
                    </div>
                  </div>

                  <div className="mb-6 text-center">
                    <button
                      className="w-4/5 px-4 py-2 font-bold text-white border border-white rounded-full hover:text-slate-300 hover:border-slate-300 focus:shadow-outline"
                      type="submit"
                    >
                      Atualizar Cadastro
                    </button>
                  </div>
            </form>
          </div>

          <SendFeedback/>
        </div>

        <div className="w-full px-20 mb-8">
        <Link
          className="w-1/4 text-center flex items-center justify-center p-2 font-bold text-white text-lg border border-white rounded-full hover:text-slate-300 hover:border-slate-300"
          to={"/admin-home"}
        >
          Voltar
        </Link>
        </div>
      </div>
    </>
  )
}

export default Admin;