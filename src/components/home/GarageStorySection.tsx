type GarageStorySectionProps = {
  imageUrl: string
}

export function GarageStorySection({ imageUrl }: GarageStorySectionProps) {
  return (
    <section className="home-garage-band" style={{ backgroundImage: `url(${imageUrl})` }}>
      <article className="home-garage-panel">
        <p className="home-kicker">Código de conduta</p>
        <h2>Padronização</h2>
        <p>
          Dentro do SOBREVIVENTES MOTO CLUBE, padrão não é detalhe — é regra.
          A forma de se portar, de vestir o colete, de representar as cores e de agir na rua segue um único princípio: disciplina. Aqui, cada membro carrega o nome do clube, e isso exige responsabilidade em cada atitude.
          Não existe espaço para individualismo quando se usa as cores. A padronização mantém a ordem, fortalece a hierarquia e garante que todos caminhem na mesma direção.
          Horários são respeitados. Formações são seguidas. Decisões são acatadas.
          O que é definido pelo clube não é sugestão — é compromisso.
          Ser parte dos Sobreviventes é entender que liberdade na estrada vem acompanhada de disciplina fora dela.
        </p>
      </article>
    </section>
  )
}
