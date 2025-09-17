export function Mission() {
  return (
    <section className="gap-8 grid grid-cols-1 md:grid-cols-2 mx-auto px-6 sm:px-8 pt-8 sm:pt-12 md:pt-16 pb-4 max-w-4xl">
      <div className="space-y-6">
        <h2 className="font-bold text-3xl">Nossa Missão</h2>
        <p className="leading-relaxed">
          O CityBike Brasil nasceu da necessidade de centralizar informações
          sobre sistemas de bicicletas compartilhadas no país. Nossa plataforma
          oferece dados em tempo real sobre disponibilidade, localização e
          status das estações, facilitando o uso da mobilidade sustentável nas
          cidades brasileiras.
        </p>
        <p className="leading-relaxed">
          Acreditamos que a tecnologia pode transformar a forma como nos movemos
          pelas cidades, tornando o transporte mais verde, eficiente e acessível
          para todos os brasileiros.
        </p>
      </div>
      <div className="self-center gap-6 *:space-y-2 grid grid-cols-2 bg-card shadow p-8 border border-border rounded-xl h-max *:text-center">
        <div>
          <p className="font-bold text-primary! text-2xl sm:text-3xl">12+</p>
          <p className="text-sm">Cidades Conectadas</p>
        </div>
        <div>
          <p className="font-bold text-primary! text-2xl sm:text-3xl">500+</p>
          <p className="text-sm">Estações Monitoradas</p>
        </div>
        <div>
          <p className="font-bold text-primary! text-2xl sm:text-3xl">24/7</p>
          <p className="text-sm">Dados em Tempo Real</p>
        </div>
        <div>
          <p className="font-bold text-primary! text-2xl sm:text-3xl">100%</p>
          <p className="text-sm">Gratuito</p>
        </div>
      </div>
    </section>
  )
}
