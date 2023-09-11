import { Link } from "react-router-dom";
import TeamCard from "../components/TeamCard";
import Header from "../components/Header";
import {SiLinkedin, SiGithub, SiFacebook, SiInstagram} from "react-icons/si";
import {BsFillTelephoneFill} from "react-icons/bs";
import { useRef } from "react";

export default function Home() {

  const timeMembers = [
    {
      name: "João Pedro",
      img: "./img/JoaoPedro.jpeg",  
      description: "Me chamo João! Ao longo da minha vida a música e a tecnologia sempre fizeram parte de mim. Junto com essa equipe incrível, juntei duas das minhas paixões para desenvolver essa plataforma, atuando fortemente tanto no Front-End quanto no Back-End."      
    },
    {
      name: "João Paulo",
      img: "./img/JpOFC.jpg",
      description: "Olá, sou o João e fui um dos responsáveis pelo desenvolvimento FrontEnd de nossa página. Como um amante da música, quero ajudar muitos músicos a mostrarem sua arte."
    },
    {
      name: "Caio Ryan",
      img: "./img/CaioOFC.jpg",
      description: "Olá, meu nome é Caio Ryan. Meu gênero musical favorito é o hip-hop e eu também ajudei a desenvolver a plataforma usando alguns conhecimentos do back-end "
    },
    {
      name: "Pablo",
      img: "./img/Pablo.jpg",
      description: "Muito prazer sou Pablo, apaixonado no ramo musical um dos integrantes dessa incrível empresa que e a Tech recordes, sou desenvolvedor na area de tecnologia e com meus conhecimentos ajudei a desenvolver esta plataforma com a parte do front-end."
    },
    {
      name: "Nicolas",
      img: "./img/Nicolas.jpg",
      description: "Olá!, me chamo Nicolas, e além de um eterno ouvinte de todo tipo de gênero musical, sou um dos desenvolvedores que contribuíram para a construção dessa incrível plataforma! "
    }
  ]

  const ourTeam = useRef();
  const aboutUs = useRef();
  const contact = useRef();

  const {innerWidth: width} = window;
  let wallpaper = "w-full h-screen relative bg-no-repeat bg-center bg-cover ";

  width > 600 ? 
    wallpaper += "bg-wallpaper" :
    wallpaper += "bg-wallpaperMobile"

  return (
    <div className="w-full h-full">
      <Header ourTeam={ourTeam} aboutUs={aboutUs}  contact={contact}/>

      <div className={wallpaper} >        
        <div className="w-full h-screen bg-gradient-to-t from-blue-500 to-pink-500/60">
          <div className="w-full relative h-full overflow-hidden px-6 pt-16 max-md:pt-52 sm:px-16 md:pt-24 lg:flex lg:px-24 lg:pt-0"> 
            <div className="w-full mx-auto text-center xl:pt-52 lg:py-32 lg:pr-20 md:text-left text-slate-200">
              <h2 className="text-3xl font-bold max-md:text-4xl md:text-6xl">
                A música que toca corações! Alcançando milhões!
              </h2>

              <p
                className=" w-full lg:w-3/5 mr-56 mt-12 mb-12 lg:mb-30 max-md:px-12 text-xl font-bold sm:text-4xl md:text-3xl">
                Venha Fazer parte da nossa equipe de talentos!
              </p>
              <div className="flex items-center justify-center gap-x-6 md:justify-start">
                <Link 
                  className="text-slate-200 bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-primary-800" 
                  to={'/cadastre-se'}
                >
                  Cadastre-se!
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full h-72 bg-waves bg-no-repeat bg-center bg-cover aspect-900/250"/>
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center pt-80 overflow-hidden bg-slate-200"> 
        <div 
          ref={aboutUs}
          className="w-3/4 flex flex-col justify-center mt-text-4xl font-bold text-gray-900 md:text-6xl"
        > 
          <h1 className="text-4xl lg:text-6xl text-center mt-16 mb-4">Sobre Nós</h1>
          <p className="mt-6 text-lg text-justify leading-7 font-medium">
          Bem-vindo à nossa gravadora, onde acreditamos no poder dos entusiastas da tecnologia para revolucionar a indústria da música! Nossa missão é proporcionar um ambiente de apoio e recursos para esses talentos emergentes explorarem todo o seu potencial criativo. Combinamos a paixão pela música com a expertise tecnológica, oferecendo oportunidades únicas de experimentação e colaboração. Na nossa gravadora, você encontrará um espaço onde a inovação é valorizada e os limites são constantemente desafiados.
          <br />
          Somos uma gravadora inovadora, apaixonada por música e movida pela tecnologia. Nosso foco é descobrir e nutrir talentos emergentes, proporcionando um ambiente criativo e estimulante onde os jovens artistas podem explorar seu potencial artístico e abraçar a interseção entre a música e a tecnologia. Com nossos estúdios de última geração e uma comunidade de mentores experientes, oferecemos suporte personalizado e oportunidades de crescimento para que os artistas desenvolvam suas habilidades musicais e se destaquem na indústria. Estamos comprometidos em impulsionar a inovação, criando o futuro sonoro e deixando uma marca duradoura na indústria da música.
          </p>
        </div>

        <div
          ref={ourTeam} 
          className="w-4/5 flex flex-col mt-10"
        > 
          <h1 className="text-center text-6xl font-bold my-14">Nosso Time</h1>          
          <div className="w-full flex flex-wrap justify-around gap-8 mb-20">
            {
              timeMembers.map((member, index) => {
                return (
                  <div 
                    key={index}  
                    className="w-full md:w-1/2 lg:w-1/3 h-full my-5 flex max-md:flex-col items-center justify-center relative text-slate-200 select-none"
                  >
                    <TeamCard name={member.name} img={member.img} description={member.description} />
                  </div>
                )
              })
            }
          </div>
        </div>

        <div className="w-full h-72 bg-waves bg-no-repeat bg-center bg-cover aspect-900/250 rotate-180"/>

        <div 
          ref={contact}
          className="h-full w-full pb-5 pl-20 font-bold text-slate-300 text-xl bg-blue-500"
        > 
            <h2 className="font-bold text-4xl mb-4">Contatos</h2>
            
            <div className="flex my-2 items-center gap-2"> 
              <BsFillTelephoneFill/>
              <p>(11) 20135-5457</p>
            </div>

            <div className ="my-2">
              <a href="https://www.linkedin.com/check/manage-account" className="flex items-center gap-2">
                <SiLinkedin/>
                Linkedin
              </a>
            </div>

            <div className ="my-2">
              <a href="https://github.com/JP328/ProjetoA3-20231-Gravadora" className="flex items-center gap-2">
                <SiGithub/>
                GitHub
              </a>
            </div> 

            <div className ="my-2">
              <a href="https://pt-br.facebook.com/" className="flex items-center gap-2">
                <SiFacebook/>
                Facebook
              </a>
            </div>

            <div className ="my-2">
              <a href="https://www.instagram.com/" className="flex items-center gap-2">
                <SiInstagram/>
                Instagram
              </a>
            </div>

        </div>
      </div>

    </div>        
  )
}
