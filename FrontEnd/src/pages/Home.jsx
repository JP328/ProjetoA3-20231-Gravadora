import { Link } from "react-router-dom";
import {SiLinkedin} from "react-icons/si";
import {SiGithub} from "react-icons/si"; 
import {SiFacebook} from "react-icons/si";
import {SiInstagram} from "react-icons/si";

export default function Home() {
  return (
    <div className="w-full h-full bg-white">

      <div className="w-full h-screen relative" >
        <img
          src="./img/PlanoDeFundo.jpg"
          className="h-screen w-full inset-0 absolute"
          alt="Wallpaper"
        />
        <div className=" w-full relative h-full isolate overflow-hidden px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:px-24 lg:pt-0"> 
          <div className="w-full mx-auto md:max-w-lg text-center lg:mx-0 lg:py-32 lg:text-left">
            {/* <div className="" > 

            </div> */}
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
              A música que toca corações, chega a milhões!
            </h2>

            <div className="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
              <Link 
                className="text-white bg-blue-800 hover:bg-blue-900 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none dark:focus:ring-primary-800" 
                to={'/cadastre-se'}
              >
                Cadastre-se!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col justify-center items-center px-2 bg-gradient-to-b from-blue-500 to-pink-500"> 
        <p className="w-4/5 text-lg text-justify leading-8 text-white">
          Bem-vindo à nossa gravadora inovadora, onde acreditamos no poder dos jovens entusiastas da tecnologia para revolucionar a indústria da música. Nossa missão é proporcionar um ambiente de apoio e recursos para esses talentos emergentes explorarem todo o seu potencial criativo. Combinamos a paixão pela música com a expertise tecnológica, oferecendo oportunidades únicas de experimentação e colaboração. Na nossa gravadora, você encontrará um espaço onde a inovação é valorizada e os limites são constantemente desafiados.
        </p>

        <div 
          className="w-4/5 flex flex-col justify-center mt-10 mt-text-4xl font-bold text-white sm:text-4xl md:text-6xl"
        > 
          <h1 className="text-center">Sobre Nós</h1>
          <p className="mt-6 text-lg leading-8 text-white">
            Somos uma gravadora inovadora, apaixonada por música e movida pela tecnologia. Nosso foco é descobrir e nutrir talentos emergentes, proporcionando um ambiente criativo e estimulante onde os jovens artistas podem explorar seu potencial artístico e abraçar a interseção entre a música e a tecnologia. Com nossos estúdios de última geração e uma comunidade de mentores experientes, oferecemos suporte personalizado e oportunidades de crescimento para que os artistas desenvolvam suas habilidades musicais e se destaquem na indústria. Estamos comprometidos em impulsionar a inovação, criando o futuro sonoro e deixando uma marca duradoura na indústria da música.
          </p>
        </div>
        <div className="w-4/5 flex flex-col items-center justify-center mt-10 font-bold text-white sm:text-4xl md:text-6xl"> 
          <h1 className="text-center">Nosso Time</h1>          
          {/* <p className="mt-6 text-lg leading-8 text-white"> */}
            
            
          <div className="w-full h-full my-10 text-2xl flex gap-2"> 
            <img
            src="./img/JpOFC.jpg"
            className="w-1/4 mr-4"
            alt="Jpaulo"/>
            <div className="w-full flex flex-col justify-evenly items-center">
              <p className="text-6xl">João Paulo</p>
              <p className="px-4 text-justify">
                Olá, sou o João e fui um dos responsáveis pelo desenvolvimento FrontEnd de nossa página. Como um amante da música, quero ajudar muitos músicos a mostrarem sua arte.
              </p>
            </div>
          </div>

          <div className="w-full h-full my-10 text-2xl flex gap-2">
            <div className="w-full flex flex-col justify-evenly items-center">
              <p className="text-6xl">João Pedro</p>
              <p className="px-4 text-justify">
                Me chamo João! Ao longo da minha vida a música e a tecnologia sempre fizeram parte de mim. Junto com essa equipe incrível, juntei duas das minhas paixões para desenvolver essa plataforma, atuando fortemente tanto no Front-End quanto no Back-End.
              </p>
            </div>
            <img
              src="./img/JoaoPedro.jpg"
              className="w-1/4 mr-4"
              alt="JPedro"/>  
          </div>

          <div className="snap-center mt-10"> Caio 
            <img
              src="./img/CaioOFC.jpg"
              className="h-50 w-40 flex text-center snap-center"
              alt="Caio"/>
              Olá, meu nome é Caio Ryan. Meu gênero musical favorito é o hip-hop e eu também ajudei a desenvolver a plataforma usando alguns conhecimentos do back-end 
          </div>

          <div className="snap-center mt-10">
            <img
              src="./img/Pablo.jpg"
              className="h-50 w-40 flex text-center snap-center"
              alt="Pablo"/>
            <div>
              <p>Pablo</p>
              <p className="px-4 text-justify">
                Muito prazer sou Pablo, apaixonado no ramo musical um dos integrantes dessa incrível empresa que e a Tech recordes, sou desenvolvedor na area de tecnologia e com meus conhecimentos ajudei a desenvolver esta plataforma com a parte do front-end
              </p>
            </div>
          </div>

          <div className="snap-center mt-10"> Nicolas
            <img
            src="./img/Nicolas.jpg"
            className="h-50 w-40 flex text-center"
            alt="Nicolas"/>
            <span className="flex">Olá !, me chamo Nicolas, e além de um eterno ouvinte de todo tipo de gênero musical, sou um dos desenvolvedores que contribuíram para a construção dessa incrível plataforma!</span>
          </div>

          <div 
            className="mt-10 font-bold text-white sm:text-4xl text-2xl"
          > 
            <h1>Contato</h1>
            <ul>  
              <div className="flex gap-2"> 
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </span> Telefone:
              </div>
              <p className="underline text-blue-100">(11) 20135-5457</p>
              <div className ="underline text-blue-200 flex items-center gap-2">
                <SiLinkedin/>
                <a href="https://www.linkedin.com/check/manage-account"
                className="text-white transition duration-150 ease-in-out hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200">
                  Linkedin</a>
              </div>
              <div className ="underline text-blue-200 flex items-center gap-2">
                <SiGithub/>
                <a href="https://github.com/JP328/ProjetoA3-20231-Gravadora"
                  className="text-white transition duration-150 ease-in-out hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200">  GitHub</a>
              </div> 
              <div className ="underline text-blue-200 flex items-center gap-2">
                <SiFacebook/>
                <a
                href="https://pt-br.facebook.com/"
                className="text-white transition duration-150 ease-in-out hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200"
                >Facebook</a>
              </div>
              <div className ="underline text-blue-200 flex items-center gap-2">
                  <SiInstagram/>
                <a
                href="https://www.instagram.com/"
                className="text-white transition duration-150 ease-in-out hover:text-neutral-100 focus:text-neutral-100 active:text-neutral-200"
                >Instagram</a>
              </div>
            </ul> 
          </div>
        </div>
      </div>

    </div>        
  )
}
