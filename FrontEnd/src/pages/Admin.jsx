// import { useState } from "react";
import { Link } from "react-router-dom";
import { useFectchUsersQuery } from "../store"

function AdminHome() {
  // const dispatch = useDispatch();
  const { data } = useFectchUsersQuery();

  const handleLink = (id) => {
    console.log(id);
    localStorage.setItem("userId", id )
  } 

  return (
    <div className="w-full h-screen text-white bg-gradient-to-br from-blue-500 to-pink-500 flex flex-col  items-center">
      <h1 className="text-4xl my-10" >Olá administrador!</h1>
      <p className="text-xl mb-4">
        Bem vindo! Aqui você pode conferir os usuários cadastrados e selecionar um de sua escolha, para visualizar as informações do mesmo.
      </p>
      <div className="w-5/6 h-4/5 grid md:grid-cols-2  mb-10 text-white border border-white rounded-md" >
  
        {
          data && data.map((user) => {
            return (
              <Link to={"/admin-user-infos"} key={user.idUsuario} className="md:text-xl mx-4 my-2 hover:font-bold" onClick={handleLink(user.idUsuario)}>
                  {user.nomeCompleto}
              </Link>
            )
          })
        }

      </div>
    </div>
  )
}

export default AdminHome;