import { useEffect, useState } from "react";
import { useFectchUserByIdQuery, useFectchFeedbackByIdQuery } from "../store";

function User() {
  
  const id = localStorage.getItem("userId")
  const { data, isFetching} = useFectchUserByIdQuery(id); 
  const { feedData, feedIsFetching} = useFectchFeedbackByIdQuery(id); 

  const [formData, setFormData] = useState({
    nomeCompleto: "",
    genero: "",
    dataDeNascimento: "",
    email: "",
    senha: "",
    cep: "",
    linksPortifolio: [""],
    descricao: "",
    banda: "",
    habilidades: [""]
  })

  const [ feedbacks, setFeedbacks ] = useState([
    {
      idFeedback: 1,
      nome: "Exemplo",
      feedback: "Esté é um exemplo de feedback! Olá fulano! Análisamos seu perfil e achamos sensacional, você tem muito talento! Porém infelizmente nosso quadro de guitarristas está completo, mas deixaremos você no nosso banco de de talentos para possíveis oportunidades futuras.",
    }
  ])
  
  useEffect(()=> {
    if(!isFetching) {
      const linksPortifolio = data[0].linksPortifolio.split("-");
      const habilidades = data[0].habilidades.split("-");

      setFormData((prevState) => {
        return { ...prevState, ...data[0], linksPortifolio, habilidades }
      })
    }  
  },[data, isFetching])

  useEffect(() => {
    console.log(feedData);
    if(!feedIsFetching && feedData !== undefined) {
      setFeedbacks((prevState) => {
        return [...feedData]
      })
    }
  },[feedData,feedIsFetching])

  const handleFormEdit = (event, name) => {
    setFormData((prevState) => {
      return { ...prevState, [name]: event.target.value }
    })
  }

  const submitForm = async (event) => {
    try {
      event.preventDefault()
      
      // return await addUser(data)
    
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="w-full h-fit bg-gradient-to-br from-blue-500 to-pink-500 flex justify-center items-center">
      <div className="w-11/12 h-fit my-14 flex max-md:flex-col">
        <div className="w-1/2 max-md:w-full">
          <p className="w-full my-5 pl-8 font-bold text-xl text-white ">
            Bem vindo {formData.nomeCompleto}! Abaixo você pode conferir suas informações pessoais e altera-las se desejar!
          </p>
          <form
            className="px-8"
            onSubmit={submitForm}
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

                  <div className="flex flex-col">
                    {formData.linksPortifolio.map((link, index) => (
                      <div key={`link ${index}`} className="mb-4 md:mr-2 md:mb-0 w-full">
                        <label className="block mb-2 text-sm font-bold text-white" htmlFor="links">
                          Links
                        </label>
                        <div className="grid grid-cols-6 gap-2">
                          <input
                            className="w-full px-3 py-2 mb-3 text-sm leading-tight bg-slate-200/30 text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline col-span-4"
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

                          <button type="button" className="mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none   rounded-lg text-center  p-1 items-center " onClick={() => {
                            formData.linksPortifolio.push("")
                            handleFormEdit(formData.linksPortifolio, 'linksPortifolio')
                          }}>
                            <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 mx-auto">
                              <path fillRule="evenodd" d="M12 3.75a.75.75 0 01.75.75v6.75h6.75a.75.75 0 010 1.5h-6.75v6.75a.75.75 0 01-1.5 0v-6.75H4.5a.75.75 0 010-1.5h6.75V4.5a.75.75 0 01.75-.75z" clipRule="evenodd" />
                            </svg>

                          </button>
                          {index > 0 ? (<button type="button" className="mb-3 text-white bg-blue-700 hover:bg-blue-800 focus:outline-none   rounded-lg text-center  p-1 items-center " onClick={() => {
                            formData.linksPortifolio.splice(index, 1)
                            handleFormEdit(formData.linksPortifolio, 'linksPortifolio')
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

        <div className="w-1/2 max-md:w-full text-white select-none">
          <h2 className="font-bold text-xl mb-4">Feedback</h2>
          <p className="font-bold mb-4">
            Seu Perfil será analisado por um de nossos especialista! E logo mais você receberá um feedback nosso. Abaixo você poderá ver os feedbacks que enviamos.
          </p>
          <div className="w-full h-4/5 border border-slate-300 flex flex-col items-start py-4">
            {
              feedbacks.map((feed) => {
                return (
                  <div key={feed.idFeedback} className="w-3/4 border border-white mx-5 my-2 p-6 pr-8 rounded-full">
                    
                    <p className="text-sm text-justify">
                      {feed.feedback}
                    </p>
                  </div>
                )
              })
            }
 
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;