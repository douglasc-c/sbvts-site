import imageOne from '../../assets/diretores/presidente.jpeg'
import imageTwo from '../../assets/diretores/vice-presidente.jpeg'
import imageThree from '../../assets/diretores/dir-estadual.jpeg'
import imageFour from '../../assets/diretores/dir-financeiro.jpeg'
import imageFive from '../../assets/diretores/dir-disciplina.jpeg'
import imageSix from '../../assets/diretores/dir-comunicacao.jpeg'

type Director = {
  name: string
  role: string
  imageUrl: string
  social?: {
    facebook?: string
    instagram?: string
    youtube?: string
  }
}

const directors: Director[] = [
  { name: 'Corvo', role: 'Presidente', imageUrl: imageOne, social: { instagram: 'https://www.instagram.com/douglasc.cesario?igsh=Z3dlcmg4MWg0bDlr' } },
  { name: 'Kevin', role: 'Vice-presidente', imageUrl: imageTwo, social: { instagram: 'https://www.instagram.com/kevinfillus?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
  { name: 'White', role: 'Diretor Financeiro', imageUrl: imageFour, social: { instagram: 'https://www.instagram.com/whitesbvts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
  { name: 'Fontoura', role: 'Diretor Estadual', imageUrl: imageThree, social: { instagram: 'https://www.instagram.com/douglas.fontoura.1?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
  { name: 'Gonzales', role: 'Diretor Disciplinar', imageUrl: imageFive, social: { instagram: 'https://www.instagram.com/gonzales_sbvts?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
  { name: 'Sawa', role: 'Diretor de Comunicação', imageUrl: imageSix, social: { instagram: 'https://www.instagram.com/lucas_sawa?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' } },
]

function IconFacebook() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  )
}

function IconInstagram() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function IconYoutube() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#111" />
    </svg>
  )
}

export function DirectorsSection() {
  return (
    <section className="home-directors" aria-labelledby="directors-title">
      <div className='home-directors-title'>
        <p className="home-kicker home-center">SBVTS</p>
        <h2 id="directors-title" className="home-center">Diretores</h2>
      </div>
      <div className="home-directors-grid">
        {directors.map((director) => (
          <article key={director.name} className="home-director-card">
            <div className="home-director-photo-wrap">
              <img src={director.imageUrl} alt={director.name} loading="lazy" />

              {director.social && (
                <ul className="home-director-socials" aria-label={`Redes sociais de ${director.name}`}>
                  {director.social.facebook && (
                    <li>
                      <a href={director.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                        <IconFacebook />
                      </a>
                    </li>
                  )}
                  {director.social.instagram && (
                    <li>
                      <a href={director.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                        <IconInstagram />
                      </a>
                    </li>
                  )}
                  {director.social.youtube && (
                    <li>
                      <a href={director.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube">
                        <IconYoutube />
                      </a>
                    </li>
                  )}
                </ul>
              )}

              <div className="home-director-info">
                <strong>{director.name}</strong>
                <span>{director.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
