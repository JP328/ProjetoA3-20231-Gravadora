export default function TeamCard(props) {
  return (
    <> 
      <div className="w-full z-10 transition hover:opacity-20 hover:blur-sm hover:rounded-lg ">
        <img src={props.img} alt="Membro da equipe"/>
      </div>
      <div className="w-full flex flex-col justify-center bg-blue-800 absolute inset-0 rounded-lg shadow-md shadow-black">
        <h3 className="text-center mb-6 md:mb-3 text-2xl max-lg:text-4xl max-xl:text-lg">{props.name}</h3>
        <p className="text-justify text-base sm:text-lg lg:text-sm xl:text-lg px-4">{props.description}</p>
      </div>
    </>
  )
}