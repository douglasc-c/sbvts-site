import type { ValueItem } from '../../types/home'

type ContactSectionProps = {
  values: ValueItem[]
}

export function ContactSection({ values }: ContactSectionProps) {
  return (
    <section className="home-contact" id="membership">
      <article className="home-contact-form-card">
        <p className="home-kicker">Interessou-se</p>
        <h3>Entre em contato para saber mais</h3>

        <form className="home-contact-form" onSubmit={(event) => event.preventDefault()}>
          <input type="text" placeholder="Nome" name="name" />
          <input type="text" placeholder="Sobrenome" name="lastName" />
          <input type="email" placeholder="Email" name="email" />
          <input type="text" placeholder="Telefone" name="phone" />
          <textarea placeholder="Notas" name="notes" rows={4} />
          <button type="submit" className="home-primary-button home-full-width-button">
            Enviar
          </button>
        </form>
      </article>

      <article className="home-values-card">
        <p className="home-kicker">Por que nós</p>
        <h3>Ontem é história, amanhã é um conto.</h3>

        <ul>
          {values.map((value) => (
            <li key={value.title}>
              <strong>{value.title}</strong>
              <p>{value.description}</p>
            </li>
          ))}
        </ul>
      </article>
    </section>
  )
}
