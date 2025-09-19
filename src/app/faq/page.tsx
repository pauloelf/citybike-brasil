const faqs = [
  {
    id: 1,
    question: "O que é o CityBike Brasil?",
    answer:
      "O CityBike Brasil é uma plataforma que conecta usuários às redes de bicicletas compartilhadas em todo o Brasil, promovendo mobilidade urbana sustentável e inteligente.",
  },
  {
    id: 2,
    question: "Como funciona o sistema de bicicletas compartilhadas?",
    answer:
      "Você retira uma bicicleta em uma estação, utiliza para seu deslocamento e devolve em qualquer estação da rede. O pagamento é feito através de aplicativos ou cartões específicos de cada operadora.",
  },
  {
    id: 3,
    question: "O CityBike Brasil é gratuito?",
    answer:
      "O acesso à plataforma é gratuito, mas o uso das bicicletas pode estar sujeito a tarifas dependendo da rede escolhida.",
  },
  {
    id: 4,
    question: "As informações são atualizadas em tempo real?",
    answer:
      "Sim! Nossos dados são sincronizados continuamente com as APIs oficiais de cada rede, garantindo informações precisas sobre disponibilidade de bikes e vagas.",
  },
  {
    id: 5,
    question: "Quais cidades brasileiras possuem bike sharing?",
    answer:
      "Atualmente temos dados de várias cidades como São Paulo, Rio de Janeiro, Santos, Recife, entre outras. A lista está sempre crescendo conforme novas redes são implementadas.",
  },
  {
    id: 6,
    question: "Como identificar se uma estação tem bikes disponíveis?",
    answer:
      "No mapa, estações verdes têm bikes disponíveis, vermelhas estão lotadas (sem vagas) e cinzas estão offline ou em manutenção.",
  },
  {
    id: 7,
    question: "Posso usar qualquer bike em qualquer cidade?",
    answer:
      "Não. Cada cidade possui sua própria rede e sistema de pagamento. É necessário se cadastrar especificamente na operadora de cada cidade.",
  },
]

export default function FaqPage() {
  return (
    <main className="flex flex-col items-center mx-auto px-6 sm:px-8 py-12 max-w-4xl min-h-screen">
      <div className="space-y-6 pb-12 text-center">
        <h1 className="font-bold text-4xl md:text-6xl text-balance">
          Perguntas Frequentes
        </h1>
        <p className="mx-auto max-w-2xl text-xl text-pretty">
          Tire suas dúvidas sobre o CityBike Brasil e o sistema de bicicletas
          compartilhadas.
        </p>
      </div>

      <div className="gap-6 grid">
        {faqs.map((faq) => (
          <div
            className="bg-card hover:shadow-lg p-6 border hover:border-primary/20 border-border rounded-xl transition-all duration-300"
            key={faq.id}
          >
            <h3 className="mb-3 font-semibold text-xl text-balance">
              {faq.question}
            </h3>
            <p className="text-pretty leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
