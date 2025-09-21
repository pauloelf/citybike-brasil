import Link from "next/link"

export function Footer() {
  return (
    <footer className="space-y-6 bg-neutral-900 px-6 sm:px-8 pt-12 pb-6 border-t border-border">
      <div className="gap-8 grid grid-cols-1 md:grid-cols-4 mx-auto max-w-7xl">
        <div className="space-y-6 md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="flex justify-center items-center bg-gradient-to-br from-primary to-accent rounded-lg w-8 h-8">
              <svg
                className="w-5 h-5 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <title>Logo gradiente</title>
                <path d="M15.5 5.5c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zM5 12c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 8.5c-1.9 0-3.5-1.6-3.5-3.5s1.6-3.5 3.5-3.5 3.5 1.6 3.5 3.5-1.6 3.5-3.5 3.5zm5.8-10l2.4-2.4.8.8c1.3 1.3 3.1 2.1 5.1 2.1V9c-1.5 0-2.7-.6-3.6-1.5l-1.9-1.9c-.5-.4-1.2-.6-2-.6s-1.5.2-2 .6L7.9 7.3C7.2 8 6.4 8.4 5.5 8.4v1.5c1.3 0 2.5-.5 3.5-1.4l1.8-1.8c.5-.4 1.1-.6 1.8-.6s1.3.2 1.8.6z" />
              </svg>
            </div>
            <span className="font-bold text-white text-xl">
              CityBike Brasil
            </span>
          </div>
          <p className="max-w-md text-neutral-300! leading-relaxed">
            Conectando você às melhores opções de mobilidade urbana sustentável
            em todo o Brasil. Encontre, compare e utilize sistemas de bicicletas
            compartilhadas de forma inteligente.
          </p>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-white">Navegação</h3>
          <ul className="space-y-3 **:focus:outline-none **:hover:text-primary **:focus:text-primary **:text-neutral-300 transition-colors duration-300">
            <li>
              <Link href="/">Início</Link>
            </li>
            <li>
              <Link href="/sobre">Sobre</Link>
            </li>
            <li>
              <Link href="/faq">FAQ</Link>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h3 className="font-semibold text-white">Recursos</h3>
          <ul className="space-y-3 **:focus:outline-none **:hover:text-primary **:focus:text-primary **:text-neutral-300 transition-colors duration-300">
            <li>
              <a
                href="https://api.citybik.es/v2"
                rel="noopener noreferrer"
                target="_blank"
              >
                API CityBikes
              </a>
            </li>
            <li>
              <a
                href="https://leafletjs.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                Leaflet
              </a>
            </li>
            <li>
              <a
                href="https://react-leaflet.js.org/"
                rel="noopener noreferrer"
                target="_blank"
              >
                React Leaflet
              </a>
            </li>
          </ul>
        </div>
      </div>

      <hr className="md:col-span-4 mx-auto border-t border-border/20 max-w-7xl" />

      <div className="flex max-md:flex-col justify-center items-center gap-2 md:gap-6 w-full text-neutral-400 text-sm md:">
        <span>© {new Date().getFullYear()} CityBike Brasil</span>
        <span className="hidden md:inline">•</span>
        <span>Dados fornecidos pela API CityBikes</span>
      </div>
    </footer>
  )
}
