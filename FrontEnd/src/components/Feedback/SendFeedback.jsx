import { useState } from "react";
import { toast } from "react-toastify";
import { useAddFeedbackMutation } from "../../store";

function SendFeedback() {
  const id = localStorage.getItem("userId")
  const [ addFeedback ] = useAddFeedbackMutation(); 
  
  const [feedbackInfos, setfeedbackInfos] = useState({
    nome: "",
    feedback: "",
    idUsuario: id
  })

  const handleFormEdit = (event, name) => {
    setfeedbackInfos((prevState) => {
      return { ...prevState, [name]: event.target.value }
    })
  }

  const handleForm = async (event) => {
    try {
      event.preventDefault()
      await addFeedback(feedbackInfos).then(res =>
        toast.success(res.error.data, {
          position: "top-right",
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          })
      )

    } catch (err) {
      toast.error(err, {
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
    <div className="w-1/2 max-md:w-full px-8 text-white select-none">
      <h2 className="font-bold text-xl mt-7 mb-4">Envio de Feedbacks</h2>
      <p className="font-semibold">
        Aqui você pode enviar mensagens, de mão única, para o usuário atual. Basta escrever e enviar! 
      </p>
      
      <form className="w-full flex flex-col items-center py-4" onSubmit={handleForm}>
              <input
                className="w-full bg-slate-200/30 px-3 py-2 mb-3 text-sm text-white placeholder:text-slate-300 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Digite seu nome completo"
                value={feedbackInfos.nome}
                required
                onChange={(e) => handleFormEdit(e, 'nome')}
              />
        <textarea 
          className="w-full px-2 py-1 my-6 bg-slate-200/30 text-white placeholder:text-slate-300 border border-white appearance-none focus:outline-none"
          placeholder="Digite seu feedback..."
          value={feedbackInfos.feedback}
          onChange={(e) => handleFormEdit(e, 'feedback')}
          cols={10} rows={5} type="text"/>

        <button
          className="w-1/2 py-2 font-bold text-white text-lg border border-white rounded-full hover:text-slate-300 hover:border-slate-300 focus:shadow-outline"
          type="submit"
        >
          Enviar Feedback
        </button>
      </form>
    </div>
  )
}

export default SendFeedback;