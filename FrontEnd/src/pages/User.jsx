import { useEffect, useState } from "react";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from 'react-icons/ai';
import { toast } from "react-toastify";
import { useFectchUserByIdQuery, useUpdateUserMutation } from "../store";
import FeedUser from "../components/Feedback/FeedUser";
import Header from "../components/Header";

function User() {
  const id = localStorage.getItem("userId")
  const [updateUser] = useUpdateUserMutation();
  const { data, isFetching} = useFectchUserByIdQuery(id); 

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
    habilidades: [""],
    idUsuario: ""
  })
  
  useEffect(()=> {
    if(!isFetching) {
      const linksPortifolio = data[0].linksPortifolio.split("  ");
      const habilidades = data[0].habilidades.split("  ");
      linksPortifolio.splice(0,1)
      habilidades.splice(0,1)

      setFormData((prevState) => {
        return { ...prevState, ...data[0], linksPortifolio, habilidades }
      })
    }  
  },[data, isFetching])

  const handleFormEdit = (event, name) => {
    setFormData((prevState) => {
      return { ...prevState, [name]: event }
    })
  }

  const submitForm = async (event) => {
      event.preventDefault()
      await updateUser(formData)
        .then(res => {
          if (res.error.error) {
            toast.error("Serviço indisponível no momento! Tente mais tarde.", {
              position: "top-right",
              autoClose: 5000,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              })
          } else {
            toast.success(res.error.data, {
              position: "top-right",
              autoClose: 5000,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              })
          }
        })
  }

  return (
    <>
      <Header login={true} />
      <div className="w-full h-fit bg-gradient-to-br from-blue-500 to-pink-500 flex justify-center items-center">
        <div className="w-11/12 h-fit mb-14 mt-24 flex max-md:flex-col">
          <div className="w-1/2 max-md:w-full">
            <p className="w-full my-6 px-8 font-bold text-xl text-white ">
              Olá {formData.nomeCompleto}! Abaixo você pode conferir suas informações pessoais e altera-las se desejar!
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
                  onChange={(e) => handleFormEdit(e.target.value, 'nomeCompleto')}
                />
              </div>
              
              <div className="mb-4 md:flex md:justify-between gap-x-5">
                <div className="mb-4 md:mb-0 w-full">
                  <label className="block mb-2 text-sm font-bold text-white" htmlFor="genero">
                    Gênero
                  </label>
                  <select className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded appearance-none focus:outline-none focus:shadow-outline shadow-none" id="genero" name="genero" 
                    required
                    value={formData.genero}
                    onChange={(e) => handleFormEdit(e.target.value, 'genero')} >
                    {[
                      { value: 'Masculino', text: 'Masculino' },
                      { value: 'Feminino', text: 'Feminino' },
                      { value: 'Transgenero', text: 'Transgênero' },
                      { value: 'NaoInformar', text: 'Prefiro não informar' },
                    ].map(option => (
                      <option 
                        key={option.value} 
                        value={option.value} 
                        className="bg-blue-500 py-2"
                      > 
                        {option.text}
                      </option>
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
                    onChange={(e) => handleFormEdit(e.target.value, 'dataDeNascimento')}
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
                  onChange={(e) => handleFormEdit(e.target.value, 'email')}
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
                    onChange={(e) => handleFormEdit(e.target.value, 'cep')}
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
                    onChange={(e) => handleFormEdit(e.target.value, 'banda')}
                  />
                </div>
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
                          className="w-full bg-slate-200/30 px-3 col-span-4 py-2 mb-3 text-sm leading-tight text-white border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                          type="text"
                          placeholder="Digite sua habilidade"
                          value={habilidade}
                          required
                          onChange={(e) => {
                            formData.habilidades[index] = e.target.value
                            handleFormEdit(formData.habilidades, 'habilidades')
                          }}
                        />

                        {
                          index < 1 ?
                            <button type="button" className="mb-3 text-slate-200 text-center" onClick={() => {
                              formData.habilidades.push("")
                              handleFormEdit(formData.habilidades, 'habilidades')
                            }}>
                              <AiOutlinePlusCircle className="text-3xl transition-all hover:animate-bounce"/>
                            </button>
                          : null
                        }

                        {
                          formData.habilidades.length !== 1 ?
                            <button type="button" className="mb-3 text-slate-200 text-center" onClick={() => {
                              formData.habilidades.splice(index, 1)
                              handleFormEdit(formData.habilidades, 'habilidades')
                            }}>
                              <AiOutlineMinusCircle className="text-3xl transition-all hover:animate-bounce"/>
                            </button>
                          : null
                        }

                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col">
                  {formData.linksPortifolio.map((link, index) => (
                    <div key={index} className="mb-4 md:mr-2 md:mb-0 w-full">
                      <label className="block mb-2 text-sm font-bold text-white" htmlFor="links">
                        Links
                      </label>
                      <div className="grid grid-cols-6 gap-2">
                        <input
                          className="w-full px-3 py-2 mb-3 text-sm bg-slate-200/30 text-white border rounded appearance-none focus:outline-none focus:shadow-outline col-span-4"
                          type="text"
                          placeholder="Cole o seu link aqui"
                          value={link}
                          required
                          onChange={(e) => {
                            formData.linksPortifolio[index] = e.target.value
                            handleFormEdit(formData.linksPortifolio, 'linksPortifolio')
                          }}
                        />

                        {
                          index < 1 ? 
                            <button type="button" className="mb-3 text-slate-200 text-center" onClick={() => {
                              formData.linksPortifolio.push("")
                              handleFormEdit(formData.linksPortifolio, 'linksPortifolio')
                            }}>
                              <AiOutlinePlusCircle className="text-3xl transition-all hover:animate-bounce"/>
                            </button>
                          : null
                        }
                        
                        {
                          formData.linksPortifolio.length !== 1 ?
                            <button type="button" className="mb-3 text-slate-200 text-center" onClick={() => {
                              formData.linksPortifolio.splice(index, 1)
                              handleFormEdit(formData.linksPortifolio, 'linksPortifolio')
                            }}>
                              <AiOutlineMinusCircle className="text-3xl transition-all hover:animate-bounce"/>
                            </button>
                            : null
                        }

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
                    onChange={(e) => handleFormEdit(e.target.value, 'senha')}
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
                  onChange={(e) => handleFormEdit(e.target.value, 'descricao')}
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

          <FeedUser id={id} />
        </div>
      </div>
    </>
  )
}

export default User;