import { useEffect, useState } from "react";
import { useFectchFeedbackByIdQuery } from "../../store";


function FeedUser({ id }) {
  const { data, isFetching} = useFectchFeedbackByIdQuery(id); 
  const [ feedbacks, setFeedbacks ] = useState([])

  useEffect(() => {
    if(!isFetching && data !== undefined) {
      setFeedbacks([...data])
    }
  },[data, isFetching])


  return (
    <div className="w-1/2 max-md:w-full max-md:mt-4 text-white select-none">
      <h2 className="font-bold text-xl mb-4">Feedback</h2>
      <p className="font-bold mb-4">
        Seu Perfil será analisado por um de nossos especialista! E logo mais você receberá um feedback nosso. Abaixo você poderá ver os feedbacks que enviamos.
      </p>
      <div className="w-full h-4/5 border border-slate-300 flex flex-col items-start py-4">
        {
          feedbacks.map((feed) => {
            return (
              <div key={feed.idFeedback} className="w-3/4 border border-white mx-5 my-2 p-3  rounded-xl text-sm text-justify">
                <p>
                  {feed.feedback}
                </p>
                <cite>
                  Ass: {feed.nome}</cite>
              </div>
            )
          })
        }

      </div>
    </div>
  )
}

export default FeedUser;