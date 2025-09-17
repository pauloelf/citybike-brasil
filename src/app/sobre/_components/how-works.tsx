export function HowWorks() {
  return (
    <section className="space-y-8 mx-auto px-6 sm:px-8 py-8 sm:pt-12 md:pt-16 max-w-4xl">
      <h2 className="font-bold text-3xl text-center">Como Funciona</h2>
      <ul className="flex *:flex *:flex-col flex-wrap *:flex-1 items-center *:items-center gap-6 *:space-y-4 *:min-w-48 *:text-center">
        <li>
          <div className="flex justify-center items-center bg-primary/10 mx-auto rounded-xl w-16 h-16">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Ícone Marcação</title>
              <path
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
              <path
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
          <p className="font-semibold text-foreground text-xl">Localização</p>
          <p className="max-w-3xs text-sm">
            Encontre redes de bike sharing próximas a você em cidades
            brasileiras
          </p>
        </li>
        <li>
          <div className="flex justify-center items-center bg-primary/10 mx-auto rounded-xl w-16 h-16">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Ícone Raio</title>
              <path
                d="M13 10V3L4 14h7v7l9-11h-7z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
          <p className="font-semibold text-foreground text-xl">Tempo Real</p>
          <p className="max-w-3xs text-sm">
            Dados atualizados sobre disponibilidade de bikes e vagas nas
            estações
          </p>
        </li>
        <li>
          <div className="flex justify-center items-center bg-primary/10 mx-auto rounded-xl w-16 h-16">
            <svg
              className="w-8 h-8 text-primary"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <title>Ícone Sinal</title>
              <path
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
              />
            </svg>
          </div>
          <p className="font-semibold text-foreground text-xl">Análise</p>
          <p className="max-w-3xs text-sm">
            Visualize estatísticas e padrões de uso das redes de bicicletas
          </p>
        </li>
      </ul>
      <div className="bg-card shadow mt-12 p-8 border border-border rounded-xl">
        <h3 className="font-bold text-2xl">Tecnologia</h3>
        <p className="mt-6 mb-4 leading-relaxed">
          Nossa plataforma utiliza a API pública do CityBikes.es para coletar
          dados em tempo real de sistemas de bicicletas compartilhadas ao redor
          do mundo, com foco especial nas redes brasileiras.
        </p>
        <p className="leading-relaxed">
          Desenvolvido com Next.js, TypeScript e Tailwind CSS, oferecemos uma
          experiência rápida, responsiva e acessível em todos os dispositivos.
        </p>
      </div>
    </section>
  )
}
