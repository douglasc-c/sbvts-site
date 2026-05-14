import './PrivacyPolicyPage.css'

export function PrivacyPolicyPage() {
  const currentYear = new Date().getFullYear()

  return (
    <main className="page-enter privacy-page">
      <section className="section-shell privacy-hero">
        <p className="section-kicker">Transparência e Segurança</p>
        <h1>Política de Privacidade</h1>
        <p className="privacy-hero__subtitle">
          Última atualização: {currentYear}. Leia com atenção como tratamos seus dados.
        </p>
      </section>

      <section className="section-shell privacy-content">
        <div className="privacy-article">

          <div className="privacy-block">
            <h2>1. Quem Somos</h2>
            <p>
              O SobreviventeS Moto Clube® é uma organização sem fins lucrativos com atuação nacional. Este site é operado exclusivamente para fins informativos e de comunicação com membros, integrantes e simpatizantes do moto clube.
            </p>
          </div>

          <div className="privacy-block">
            <h2>2. Dados que Coletamos</h2>
            <p>Podemos coletar as seguintes informações quando você utiliza nosso site:</p>
            <ul>
              <li>Dados de navegação (páginas visitadas, tempo de acesso, dispositivo e navegador), coletados de forma anônima por ferramentas de analytics.</li>
              <li>Informações fornecidas voluntariamente por meio de formulários de contato, como nome e e-mail.</li>
            </ul>
          </div>

          <div className="privacy-block">
            <h2>3. Como Usamos os Dados</h2>
            <p>As informações coletadas são utilizadas para:</p>
            <ul>
              <li>Analisar o desempenho e a experiência de navegação do site.</li>
              <li>Responder a mensagens e solicitações enviadas por meio dos formulários.</li>
              <li>Melhorar continuamente o conteúdo e a usabilidade do site.</li>
            </ul>
          </div>

          <div className="privacy-block">
            <h2>4. Cookies</h2>
            <p>
              Utilizamos cookies estritamente necessários para o funcionamento do site e cookies de analytics para entender o comportamento dos visitantes. Ao aceitar os cookies, você concorda com o uso dessas tecnologias. Você pode revogar seu consentimento a qualquer momento limpando os dados de navegação do seu browser.
            </p>
          </div>

          <div className="privacy-block">
            <h2>5. Compartilhamento de Dados</h2>
            <p>
              Não vendemos, alugamos nem compartilhamos seus dados pessoais com terceiros para fins comerciais. Podemos compartilhar informações agregadas e anonimizadas para fins estatísticos. Ferramentas de terceiros integradas ao site (como Vercel Analytics) seguem suas próprias políticas de privacidade.
            </p>
          </div>

          <div className="privacy-block">
            <h2>6. Armazenamento e Segurança</h2>
            <p>
              Os dados coletados são armazenados com medidas de segurança adequadas. Aplicamos boas práticas para proteger as informações contra acesso não autorizado, perda ou divulgação indevida.
            </p>
          </div>

          <div className="privacy-block">
            <h2>7. Seus Direitos</h2>
            <p>Conforme a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018), você tem direito a:</p>
            <ul>
              <li>Saber quais dados pessoais seus são tratados por nós.</li>
              <li>Solicitar a correção de dados incompletos ou incorretos.</li>
              <li>Solicitar a eliminação dos seus dados pessoais.</li>
              <li>Revogar o consentimento dado a qualquer momento.</li>
            </ul>
            <p>Para exercer esses direitos, entre em contato conosco pelo e-mail disponível na seção de contato do site.</p>
          </div>

          <div className="privacy-block">
            <h2>8. Alterações nesta Política</h2>
            <p>
              Esta política pode ser atualizada periodicamente. Recomendamos que você revise esta página regularmente. O uso continuado do site após alterações implica na aceitação dos novos termos.
            </p>
          </div>

          <div className="privacy-block">
            <h2>9. Contato</h2>
            <p>
              Em caso de dúvidas sobre esta política ou sobre o tratamento dos seus dados, entre em contato conosco por meio da seção de contato disponível no site.
            </p>
          </div>

        </div>
      </section>
    </main>
  )
}
