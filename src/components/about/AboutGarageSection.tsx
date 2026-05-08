import './AboutGarageSection.css'

type AboutGarageSectionProps = {
  imageUrl: string
}

export function AboutGarageSection({ imageUrl }: AboutGarageSectionProps) {
  return (
    <section className="about-garage-band" style={{ backgroundImage: `url(${imageUrl})` }}>
      <article className="about-garage-panel">
        <p className="section-kicker">Codigo de conduta</p>
        <h2>Padronizacao</h2>
        <p>
          Dentro do SOBREVIVENTES MOTO CLUBE, padrao nao e detalhe, e regra.
          A forma de se portar, de vestir o colete, de representar as cores e de agir na rua segue um unico principio: disciplina. Aqui, cada membro carrega o nome do clube, e isso exige responsabilidade em cada atitude.
          Nao existe espaco para individualismo quando se usa as cores. A padronizacao mantem a ordem, fortalece a hierarquia e garante que todos caminhem na mesma direcao.
        </p>
      </article>
    </section>
  )
}
