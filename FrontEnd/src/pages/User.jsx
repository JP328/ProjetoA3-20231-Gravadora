import { useState } from "react";

function User() {
  
  const [formData, setFormData] = useState({

  })

  const handleFormEdit = (event, name) => {
    setFormData((prevState) => {
      return { ...prevState, [name]: event.target.value }
    })
  }

  const submitForm = async (event) => {
    try {
      event.preventDefault()
      // const data = JSON.stringify(formData)
      
      // return await addUser(data)
    
    } catch (err) {
      console.log(err);
    }
  }

  // const renderFeedbacl = () => {
  // }

  return (
    <div className="w-full h-fit bg-gradient-to-br from-blue-500 to-pink-500 flex justify-center items-center">
      <div className="w-11/12 h-fit my-14 flex max-md:flex-col">
        <div className="w-1/2 max-md:w-full">
          <form
            className="px-8"
            onSubmit={submitForm}
          >
              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-white" htmlFor="name">
                  Nome Completo
                </label>
                <input
                  className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                <label className="block mb-2 text-sm font-bold text-white" htmlFor="genero">
                  Gênero
                </label>
                <select className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="genero" name="genero" 
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
                <label className="block mb-2 text-sm font-bold text-white" htmlFor="dataNasc">
                  Data de Nascimento
                </label>
                <input
                  className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                  id="dataNasc"
                  type="date"
                  value={formData.nascimento}
                  required
                  onChange={(e) => handleFormEdit(e, 'nascimento')}
                />
              </div>
            </div>

              <div className="mb-4">
                <label className="block mb-2 text-sm font-bold text-white" htmlFor="email">
                  Email
                </label>
                <input
                  className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                    className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                    className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                  <label className="block mb-2 text-sm font-bold text-white" htmlFor="links">
                    Links
                  </label>
                  <input
                    className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="links"
                    type="text"
                    placeholder="Cole o seu link aqui"
                    value={formData.links}
                    required
                    onChange={(e) => handleFormEdit(e, 'links')}
                  />
                </div>

                <div className="mb-4 md:mr-2 md:mb-0 w-full">
                  <label className="block mb-2 text-sm font-bold text-white" htmlFor="skills">
                    Habilidades
                  </label>
                  <input
                    className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                    id="skills"
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
                  <label className="block mb-2 text-sm font-bold text-white" htmlFor="senha">
                    Senha
                  </label>
                  <input
                    className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
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
                  <textarea className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-slate-300 placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" id="msg" name="msg" rows="4" cols="60"  value={formData.descricao}
                  required
                  onChange={(e) => handleFormEdit(e, 'descricao')}></textarea>
                </div>
              </div>

              <div className="mb-6 text-center">
                <button
                  className="w-3/5 px-4 py-2 font-bold text-white text-lg border border-white rounded-full hover:text-slate-300 hover:border-slate-300 focus:shadow-outline"
                  type="submit"
                >
                  Salvar Alterações
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
 
            <div className="w-3/4 border border-white mx-5 my-2 p-6 pr-8 rounded-full">
              <p className="text-sm text-justify">
                Olá fulano! Análisamos seu perfil e achamos sensacional, você tem muito talento! Porém infelizmente nosso quadro de guitarristas está completo, mas deixaremos você no nosso banco de de talentos para possíveis oportunidades futuras.
              </p>
            </div>
 
          </div>
        </div>
      </div>
    </div>
  )
}

export default User;