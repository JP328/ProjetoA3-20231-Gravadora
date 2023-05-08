import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="bg-white">
      <div className="w-full h-screen">
        <div className="relative h-full isolate overflow-hidden bg-gray-900 px-6 pt-16 sm:px-16 md:pt-24 lg:flex lg:px-24 lg:pt-0"> 
          <div className="mx-auto max-w-md md:max-w-lg text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-6xl">
              A música que toca corações, chega a milhões!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.
            </p>
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
    </div>        
  )
}
