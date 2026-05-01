import type { MembershipPlan } from '../types/site'

type MembershipSectionProps = {
  plans: MembershipPlan[]
}

export function MembershipSection({ plans }: MembershipSectionProps) {
  return (
    <section className="section-shell" id="membership">
      <div className="section-heading-row">
        <div>
          <p className="section-kicker">Membership</p>
          <h2>Choose Your Lane</h2>
        </div>
      </div>

      <div className="membership-grid stagger-grid">
        {plans.map((plan) => (
          <article className={`plan-card ${plan.isHighlighted ? 'is-highlighted' : ''}`} key={plan.name}>
            <h3>{plan.name}</h3>
            <p className="plan-price">{plan.price}</p>
            <ul>
              {plan.perks.map((perk) => (
                <li key={perk}>{perk}</li>
              ))}
            </ul>
            <button type="button" className="cta-button plan-button">
              Select Plan
            </button>
          </article>
        ))}
      </div>
    </section>
  )
}
