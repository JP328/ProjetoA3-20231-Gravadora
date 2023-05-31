import { useState } from "react";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";

function Admin() {
  const [formData, setFormData] = useState({

  })

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
    <div className="w-full h-fit text-white bg-gradient-to-br from-blue-500 to-pink-500 flex flex-col justify-center items-center">
      <h1 className="text-4xl my-10" >Olá administrador!</h1>
      <p className="text-xl mb-4">
        Bem vindo! Aqui você pode conferir os vídeos do usuário e suas informações pessoais, além de poder enviar feedbacks para o usuário.
      </p>
      <div className="w-4/5 h-full px-10 grid grid-cols-2 items-center">
        <div className="w-11/12 my-4">
          <ReactPlayer width='100%'  url={"https://www.youtube.com/watch?v=K5O_a9zdJnI"}/>
        </div>
        <div className="w-11/12 my-4">
          <ReactPlayer width='100%' url={"https://www.youtube.com/watch?v=2mFZrDTapmY"}/>
        </div>
        <div className="w-11/12 my-4">
          <ReactPlayer width='100%' url={"https://www.youtube.com/watch?v=JVMgaMSJUl0"}/>
        </div>
      </div>

      <div className="w-11/12 h-fit my-14 flex max-md:flex-col">
        <div className="w-1/2 max-md:w-full">
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
                  value={formData.name}
                  required
                />
              </div>
              
            <div className="mb-4 md:flex md:justify-between gap-x-5">
              <div className="mb-4 md:mb-0 w-full">
                <label className="block mb-2 text-sm font-bold text-white" htmlFor="genero">
                  Gênero
                </label>
                <select className="w-full bg-slate-200/30 focus:bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="genero" name="genero" 
                // value={formData.genero}
                  required
                  // onClick={(e) => handleFormEdit(e, 'genero')}
                >
                  <option value="Masculino" className="bg-slate-200/30" >Masculino</option>
                  <option value="Feminino" className="bg-slate-200/30" >Feminino</option>
                  <option value="Transgênero" className="bg-slate-200/30" >Transgênero</option>
                  <option value="NaoInformar" className="bg-slate-200/30" >Prefiro não informar</option>
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
                  value={formData.nascimento}
                  required
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
                  />
                </div>
              </div>

              <div className="mb-4 md:flex md:justify-between gap-x-5">
                <div className="mb-4 md:mr-2 md:mb-0 w-full">
                  <label className="block mb-2 text-sm font-bold text-white" htmlFor="links">
                    Links
                  </label>
                  <input
                    className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="links"
                    type="text"
                    placeholder="Cole o seu link aqui"
                    value={formData.links}
                    required
                  />
                </div>

                <div className="mb-4 md:mr-2 md:mb-0 w-full">
                  <label className="block mb-2 text-sm font-bold text-white" htmlFor="skills">
                    Habilidades
                  </label>
                  <input
                    className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="skills"
                    type="text"
                    placeholder="Liste suas Habilidades"
                    value={formData.habilidades}
                    required
                  />
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
                  />
                </div>
              </div>
          </form>
        </div>

        <div className="w-1/2 max-md:w-full text-white select-none">
          <h2 className="font-bold text-xl mb-4">Envio de Feedbacks</h2>
          <p className="font-bold">
            Aqui você pode enviar mensagens, de mão única, para o usuário atual. Basta escrever e enviar! 
          </p>
          <form className="w-full flex flex-col items-center py-4">
            <textarea className="w-full px-2 py-1 my-6 bg-slate-200/30 text-white placeholder:text-slate-300 border border-white appearance-none focus:outline-none" cols={10} rows={5} type="text"/>

            <button
              className="w-1/2 py-2 font-bold text-white text-lg border border-white rounded-full hover:text-slate-300 hover:border-slate-300 focus:shadow-outline"
              type="submit"
            >
              Enviar Feedback
            </button>
          </form>
        </div>
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
  )
}

export default Admin;