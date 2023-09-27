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
      const dataLinks = data[0].linksPortifolio.split("  ")
      dataLinks.splice(0,1)
      setLinksPortifolio(dataLinks);
      
      const habilidades = data[0].habilidades.split("  ");
      habilidades.splice(0,1)

      setFormData((prevState) => {
        return { ...prevState, ...data[0], habilidades }
      })
    }  
  },[data, isFetching, setLinksPortifolio])

  return (
    <>
      <Header login={true} />
      <div 
        className="w-full h-fit text-white bg-gradient-to-br from-blue-500 to-pink-500 flex flex-col justify-center items-center"
      >
        <h1 className="text-4xl max-sm:text-3xl mb-10 mt-24 max-sm:mt-32" >Olá administrador!</h1>
        <p className="max-xl:w-4/5 text-xl pr-10 mb-4 text-justify max-md:text-lg">
          Bem vindo! Aqui você pode conferir os vídeos do usuário e suas informações pessoais, além de poder enviar feedbacks para o usuário.
        </p>
        <div className="w-11/12 max-sm:w-full max-md:w-full h-full px-10 grid grid-cols-2 max-sm:grid-cols-1">

          {
            linksPortifolio.map((link) => {
              return(
                <div key={link} className="h-48 w-72 max-sm:w-64 lg:w-11/12 lg:h-80 my-4 ">
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
              className="px-8 select-none"
            >
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-white" htmlFor="name">
                    Nome Completo
                  </label>
                  <input
                    className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline select-none"
                    id="name"
                    type="text"
                    placeholder="Digite seu nome completo"
                    value={formData.nomeCompleto}
                    readOnly
                  />
                </div>
                  
                <div className="mb-4 md:flex md:justify-between gap-x-5">
                  <div className="mb-4 md:mb-0 w-full">
                    <label className="block mb-2 text-sm font-bold text-white" htmlFor="genero">
                      Gênero
                    </label>
                    <input
                      className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded appearance-none focus:outline-none focus:shadow-outline shadow-none select-none"
                      id="genero"
                      type="text"
                      placeholder="Digite seu nome completo"
                      value={formData.genero}
                      readOnly
                    />
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
                      readOnly
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-white" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline select-none"
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    readOnly
                  />
                </div>

                <div className="mb-4 md:flex md:justify-between gap-x-5">
                  <div className="w-full">
                    <label className="block mb-2 text-sm font-bold text-white" htmlFor="CEP">
                      CEP
                    </label>
                    <input
                      className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline select-none"
                      id="CEP"
                      pattern="\d{5}-\d{3}"
                      placeholder="Digite seu CEP"
                      value={formData.cep}
                      readOnly
                    />
                  </div>

                  {
                    formData.banda !== "" ?
                      <div className="w-full">
                        <label className="block mb-2 text-sm font-bold text-white" htmlFor="banda">
                          Banda
                        </label>
                        <input
                          className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline select-none"
                          id="banda"
                          type="text"
                          placeholder="Digite o nome da sua banda"
                          value={formData.banda}
                          readOnly
                        />
                      </div>
                    : null
                  }
                </div>

                <div className="mb-4 md:flex md:justify-between gap-x-6">
                  <div className="flex flex-col">
                    {formData.habilidades.map((habilidade, index) => (
                      <div key={index} className="mb-4 md:mb-0 w-full">
                        <label className="block mb-2 text-sm font-bold text-white" htmlFor="habilidades">
                          Habilidade
                        </label>
                        <div className="grid grid-cols-6 gap-2">
                          <input
                            className="w-full bg-slate-200/30 px-3 col-span-4 py-2 mb-3 text-sm leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline select-none"
                            id="habilidades"
                            type="text"
                            placeholder="Digite sua habilidade"
                            value={habilidade}
                            readOnly
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-4 md:flex md:justify-between gap-x-5">
                  <div className="mb-4 md:mr-2 md:mb-0 w-full">
                    <label className="block mb-2 text-sm font-bold text-white" htmlFor="links">
                      Descrição
                    </label>
                    <textarea className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline select-none" id="links" name="msg" rows="4" cols="60"  value={formData.descricao}
                    readOnly
                    />
                  </div>
                </div>

                {/* <div className="mb-6 text-center">
                  <button
                    className="w-4/5 px-4 py-2 font-bold text-white border border-white rounded-full hover:text-slate-300 hover:border-slate-300 focus:shadow-outline"
                    type="submit"
                  >
                    Deletar Cadastro
                  </button>
                </div> */}
            </form>
          </div>
          <SendFeedback/>
        </div>

        <div className="w-full px-20 max-sm:px-12 mb-8">
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