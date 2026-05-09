import './AboutGarageSection.css'

type AboutGarageSectionProps = {
  imageUrl: string
}

export function AboutGarageSection({ imageUrl }: AboutGarageSectionProps) {
  return (
    <section className="about-garage-band" style={{ backgroundImage: `url(${imageUrl})` }}>
      <article className="about-garage-panel">
        <p className="section-kicker">Código de conduta</p>
        <h2>Padronização</h2>
        <p>
          Dentro do SOBREVIVENTES MOTO CLUBE, padrão não é detalhe — é regra. A forma de se portar, de vestir o colete, de representar as cores e de agir na rua segue um único princípio: disciplina. Aqui, cada membro carrega o nome do clube, e isso exige responsabilidade em cada atitude. Não existe espaço para individualismo quando se usa as cores. A padronização mantém a ordem, fortalece a hierarquia e garante que todos caminhem na mesma direção.
        </p>
      </article>
    </section>
  )
}
