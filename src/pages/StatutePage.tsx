import './StatutePage.css'

interface StatuteArticle {
  number: string
  content: string
  paragraphs?: string[]
  items?: string[]
}

interface StatuteChapter {
  id: string
  title: string
  articles: StatuteArticle[]
}

const chapters: StatuteChapter[] = [
  {
    id: 'cap-1',
    title: 'Capítulo I — Denominação, Sede, Foro e Finalidades',
    articles: [
      {
        number: 'Art. 1º',
        content:
          'O SOBREVIVENTES MOTO CLUBE, doravante denominado "Moto Clube", é uma associação civil, de direito privado e sem fins lucrativos, com prazo de duração indeterminado.',
        paragraphs: [
          '§ 1º A sede principal do Moto Clube está localizada na Rua Gabriel Damas, S/N, Bairro Tranqueira, Município de Almirante Tamandaré, Estado do Paraná, CEP 83.514-456.',
          '§ 2º O foro jurídico do Moto Clube é na Rua Pretextato Taborda Júnior, nº 1311, Bairro Portão, Município de Curitiba, Estado do Paraná, CEP 80.330-090.',
        ],
      },
      {
        number: 'Art. 2º',
        content:
          'O Moto Clube iniciou suas atividades no dia 1 de maio de 2011 e terá um número ilimitado de membros.',
        paragraphs: [
          'Parágrafo único. O Moto Clube poderá abrir unidades em qualquer parte do Território Nacional, mediante aprovação por Assembleia Geral.',
        ],
      },
      {
        number: 'Art. 3º',
        content: 'As finalidades do Moto Clube são:',
        items: [
          'Promover a fraternidade entre motociclistas.',
          'Realizar viagens, reuniões e eventos ligados ao motociclismo no Brasil e no exterior.',
          'Utilizar a sede para encontros regulares, atividades recreativas e administrativas.',
        ],
      },
    ],
  },
  {
    id: 'cap-2',
    title: 'Capítulo II — Administração e Recursos',
    articles: [
      {
        number: 'Art. 4º',
        content: 'A administração do Moto Clube será exercida por uma Diretoria, composta pelos seguintes cargos:',
        items: [
          'Presidente',
          'Vice-Presidente',
          'Diretor Estadual',
          'Diretor Financeiro',
          'Diretor de Disciplina',
          'Diretor de Comunicação',
        ],
      },
      {
        number: 'Art. 5º',
        content: 'O mandato de todos os membros da Diretoria será de 1 (um) ano. Não há limite para reeleições.',
        paragraphs: [
          'Parágrafo único. A eleição para a nova Diretoria ocorrerá ordinariamente na Assembleia Geral do último domingo de janeiro.',
        ],
      },
      {
        number: 'Art. 6º',
        content:
          'Qualquer membro da Diretoria poderá ser destituído do cargo por decisão da maioria dos votos dos associados presentes em Assembleia Geral ou Extraordinária, convocada especificamente para esse fim.',
      },
      {
        number: 'Art. 7º',
        content:
          'O exercício de qualquer cargo diretivo não será remunerado, sendo vedado a qualquer membro da Diretoria utilizar-se de sua posição para obter benefícios para si ou para terceiros.',
      },
      {
        number: 'Art. 8º',
        content:
          'Terão direito a voto em Assembleias e poderão se candidatar a cargos diretivos apenas os membros que estiverem em dia com suas obrigações sociais.',
      },
      {
        number: 'Art. 9º',
        content: 'As fontes de recursos do Moto Clube serão:',
        items: [
          'Contribuição mensal dos membros.',
          'Doações, legados e subvenções de pessoas físicas ou jurídicas.',
          'Receitas eventuais.',
          'Bens, móveis e imóveis que lhes forem destinados e/ou adquiridos.',
        ],
        paragraphs: [
          'Parágrafo único. O valor da contribuição mensal será reajustado anualmente a partir de janeiro, com o objetivo de acompanhar a inflação e garantir a sustentabilidade financeira do Moto Clube. O novo valor será decidido em reunião.',
        ],
      },
    ],
  },
  {
    id: 'cap-3',
    title: 'Capítulo III — Das Competências da Diretoria',
    articles: [
      {
        number: 'Art. 10º',
        content: 'Compete ao Presidente:',
        items: [
          'Representar o Moto Clube, ativa e passivamente, em juízo e fora dele.',
          'Presidir Reuniões Periódicas, Assembleias Gerais e Assembleias Extraordinárias.',
        ],
      },
      {
        number: 'Art. 11º',
        content: 'Compete ao Vice-Presidente:',
        items: [
          'Substituir o Presidente em seus impedimentos ou ausências, inclusive na sua representação em juízo e fora dele.',
          'Coordenar e fiscalizar as atividades da sede e das unidades do Moto Clube.',
        ],
      },
      {
        number: 'Art. 12º',
        content: 'Compete ao Diretor Estadual:',
        items: [
          'Administrar a unidade à qual pertence.',
          'Realizar a integração entre a unidade e a sede.',
          'Coordenar o andamento e a promoção dos membros e integrantes.',
          'Representar os interesses da unidade perante a Diretoria.',
          'Trazer sugestões e reclamações da unidade para a sede.',
        ],
      },
      {
        number: 'Art. 13º',
        content: 'Compete ao Diretor Financeiro:',
        items: [
          'Gerenciar a conta bancária do Moto Clube e elaborar um controle mensal das receitas e despesas.',
          'Promover a arrecadação das contribuições mensais.',
          'Monitorar as despesas de compras e possíveis vendas.',
          'Manter sob sua guarda e responsabilidade toda a documentação financeira, assim como o Livro Ata atualizado.',
        ],
      },
      {
        number: 'Art. 14º',
        content: 'Compete ao Diretor de Disciplina:',
        items: [
          'Fiscalizar o cumprimento de todas as regras contidas neste Estatuto e no Regimento Interno.',
          'Regular a frequência dos membros e integrantes nas atividades do Moto Clube.',
          'Orientar e aplicar as sanções necessárias para o bom andamento do Moto Clube.',
        ],
      },
      {
        number: 'Art. 15º',
        content: 'Compete ao Diretor de Comunicação:',
        items: [
          'Gerenciar a comunicação entre os membros, garantindo que todos estejam informados sobre eventos e reuniões.',
          'Gerenciar as plataformas de mídia social.',
          'Desenvolver materiais de comunicação (flyers, folders, vídeos etc.).',
        ],
      },
    ],
  },
  {
    id: 'cap-4',
    title: 'Capítulo IV — Dos Integrantes e Sua Hierarquia',
    articles: [
      {
        number: 'Art. 16º',
        content: 'A admissão de um novo integrante dependerá de uma apresentação prévia em reunião por um membro.',
        paragraphs: [
          '§ 1º Cada padrinho poderá apadrinhar três integrantes ao mesmo tempo. Quando um afilhado "fechar o colete", o padrinho estará disponível para uma nova afiliação.',
          '§ 2º O padrinho que se afastar, se desligar ou for expulso do Moto Clube terá a tutela de seus afilhados transferida para o Diretor de Disciplina. No caso de retorno do padrinho, a tutela é imediatamente restaurada.',
        ],
      },
      {
        number: 'Art. 17º',
        content: 'O processo de admissão e graduação dos integrantes seguirá os seguintes níveis hierárquicos:',
        items: [
          'Candidato: Fase de conhecimento mútuo, com duração de seis meses, em que o candidato não usa colete nem assume custos. A admissão como integrante ocorre após a participação em três reuniões; na quarta, ele indica um padrinho e recebe as cores do Moto Clube, tornando-se Próspero. É também requisito obrigatório a visita a, no mínimo, três sedes de moto clubes distintos.',
          'Próspero: O integrante oficializa sua entrada no Moto Clube, devendo contribuir com a mensalidade e usar colete. O colete conterá o nome do integrante e o patch "SobreviventeS MC BrasiL" na parte frontal esquerda.',
          'Meia Tarja: O colete recebe um bordado na parte inferior das costas com a nomenclatura do estado de origem. O integrante pode auxiliar os padrinhos na orientação de novos integrantes.',
          'Meio Escudo: O colete recebe um bordado de identificação na parte superior das costas com a nomenclatura "SobreviventeS".',
          'Escudo Fechado (Membro): O integrante deixa de ser afilhado e passa a responder por si, tornando-se um membro do Moto Clube. O colete recebe o brasão do Velho nas costas. O membro permanecerá nesta fase por tempo indeterminado, a menos que seja rebaixado por falta grave.',
        ],
        paragraphs: [
          '§ 1º Constitui requisito obrigatório para a graduação que o integrante tenha conhecido, de forma oficial, ao menos uma das sedes das Unidades do Moto Clube. O integrante vinculado a qualquer Unidade deverá comparecer e conhecer oficialmente a sede Matriz.',
          '§ 2º Estabelece-se o período mínimo de 1 (um) ano de permanência em cada graduação como requisito obrigatório para a próxima progressão.',
          '§ 3º Para que o integrante seja considerado apto à graduação, é condição obrigatória que tenha comparecido, ao menos uma vez, a uma sede de outro moto clube, promovendo a fraternidade e a integração entre moto clubes.',
        ],
      },
    ],
  },
  {
    id: 'cap-5',
    title: 'Capítulo V — Dos Direitos e Deveres dos Membros e Integrantes',
    articles: [
      {
        number: 'Art. 18º',
        content: 'São direitos dos membros e integrantes:',
        items: [
          'Integrar comissões criadas pela Diretoria.',
          'Sugerir a admissão de novos motociclistas.',
          'Sugerir projetos em favor do Moto Clube.',
          'Participar e usufruir das atividades e serviços promovidos pelo Moto Clube.',
          'Usufruir das prerrogativas fixadas neste Estatuto e no Regimento Interno.',
        ],
      },
      {
        number: 'Art. 19º',
        content: 'São deveres dos membros e integrantes:',
        items: [
          'Acatar e zelar pelo cumprimento deste Estatuto e do Regimento Interno.',
          'Respeitar e cumprir as determinações da Diretoria.',
          'Pagar pontualmente a mensalidade.',
          'Manter o cadastro atualizado.',
          'Respeitar os demais membros e integrantes.',
          'Usar o colete com responsabilidade e respeito em reuniões e eventos.',
          'Portar-se de forma conveniente sempre que estiver na condição de membro, usando as cores do Moto Clube.',
          'Usar camisetas de cor preta, cinza ou branca por baixo do colete.',
          'Preservar a boa imagem do motociclista do Moto Clube, respeitando as leis de trânsito.',
          'Não participar de corridas ilegais, arruaças ou atividades que contrariem o Estatuto e a legislação vigente.',
          'Não divulgar informações internas do Moto Clube sem autorização da Diretoria.',
          'Não visitar moto clubes 1% sem a presença de um membro do Sobreviventes MC.',
          'Comparecer a pelo menos uma sede de moto clubes por mês para fortalecer os laços de fraternidade.',
          'Obter aprovação prévia da Diretoria para confeccionar ou modificar qualquer material de divulgação (camisetas, bonés, bandeiras, etc.).',
          'Não emprestar materiais oficiais do Moto Clube.',
          'Não conduzir mulheres na garupa de suas motocicletas que estejam usando coletes de outros moto clubes, com a exceção de que o colete seja levado e utilizado apenas no local de destino.',
        ],
      },
    ],
  },
  {
    id: 'cap-6',
    title: 'Capítulo VI — Das Reuniões e Assembleias',
    articles: [
      {
        number: 'Art. 20º',
        content:
          'As Reuniões Periódicas acontecerão no último domingo de cada mês, com 15 minutos de tolerância para o início.',
        paragraphs: [
          '§ 1º As reuniões serão presididas por um membro designado (Presidente da mesa) e secretariadas por outro (Secretário).',
          '§ 2º Em caso de necessidade, poderão ser convocadas Reuniões Extraordinárias.',
          '§ 3º Todas as deliberações e decisões serão registradas em ata, que deverá ser assinada por todos os presentes.',
        ],
      },
      {
        number: 'Art. 21º',
        content: 'As Assembleias Gerais ocorrerão ordinariamente no último domingo de janeiro.',
        paragraphs: [
          '§ 1º A Assembleia Geral se destina a: (I) votar e eleger a nova Diretoria; (II) decidir sobre a dissolução do Moto Clube e a destinação de seu patrimônio, se for o caso.',
          '§ 2º As Assembleias serão presididas pela Diretoria ou por um membro designado. O Presidente da mesa terá o "voto de Minerva" em caso de empate.',
        ],
      },
    ],
  },
  {
    id: 'cap-7',
    title: 'Capítulo VII — Das Penalidades e Sanções',
    articles: [
      {
        number: 'Art. 22º',
        content: 'Os membros e integrantes estão sujeitos às seguintes penalidades:',
        items: [
          'Penalidade Administrativa: Aplica-se a infrações gerenciais, como atraso em mensalidades, ausência em reuniões e eventos de convocação geral sem justificativa.',
          'Penalidade Comportamental: Aplica-se a atitudes inadequadas, como desrespeito a outro membro, divulgação de assuntos internos, atentado à imagem do Moto Clube ou provocação de brigas.',
        ],
      },
      {
        number: 'Art. 23º',
        content: 'As punições para as penalidades administrativas poderão ser:',
        items: [
          'Advertência verbal ou escrita.',
          'Retenção do colete por no mínimo 30 dias.',
        ],
      },
      {
        number: 'Art. 24º',
        content: 'As punições para as penalidades comportamentais poderão ser:',
        items: [
          'Retenção do colete por prazo definido pela Diretoria.',
          'Rebaixamento hierárquico.',
          'Desligamento do Moto Clube.',
        ],
      },
      {
        number: 'Art. 25º',
        content:
          'Em caso de comportamento inadequado de um membro com graduação superior contra um de menor graduação, o agressor será rebaixado ao mesmo nível hierárquico do ofendido, devendo reiniciar o processo de graduação.',
        paragraphs: [
          'Parágrafo único. Em caso de infração cometida por um membro de menor graduação contra um de maior, a Diretoria poderá prolongar o período necessário para avanço nas fases de graduação.',
        ],
      },
      {
        number: 'Art. 26º',
        content:
          'Em caso de desligamento, o membro ou integrante perde o direito de usar qualquer atributo do Moto Clube e deve devolvê-los no ato do desligamento.',
        paragraphs: [
          'Parágrafo único. Após o desligamento, o ex-membro deverá permanecer em luto por 3 (três) meses, para que sua imagem seja desassociada do Moto Clube.',
        ],
      },
      {
        number: 'Art. 27º',
        content:
          'A Diretoria será responsável por aplicar as penalidades, assegurando o direito de ampla defesa ao membro ou integrante infrator.',
      },
    ],
  },
  {
    id: 'cap-8',
    title: 'Capítulo VIII — Disposições Gerais',
    articles: [
      {
        number: 'Art. 28º',
        content:
          'O Moto Clube não se responsabiliza por danos materiais ou à integridade física de seus membros, integrantes ou terceiros.',
      },
      {
        number: 'Art. 29º',
        content:
          'Nenhum membro ou integrante é agente, empregado, representante ou procurador do Moto Clube, sendo vedado assumir quaisquer compromissos em nome do Sobreviventes Moto Clube.',
      },
      {
        number: 'Art. 30º',
        content:
          'O Moto Clube não admite como integrantes motociclistas oriundos de outros clubes, exceto nos casos de clubes que tenham encerrado suas atividades ou de integrantes que ainda estejam na etapa de Próspero. A aceitação dependerá de aprovação unânime da Diretoria.',
      },
      {
        number: 'Art. 31º',
        content:
          'O Moto Clube não admite mulheres como integrantes. A esposa do membro é considerada dependente, mas não pode participar de Reuniões Periódicas, Assembleias Gerais ou Extraordinárias.',
      },
      {
        number: 'Art. 32º',
        content:
          'É proibido a membros e integrantes participarem de eventos motociclísticos utilizando carro, a fim de preservar a identidade do Moto Clube.',
        paragraphs: [
          'Parágrafo único. Exceções serão avaliadas caso a caso pela Diretoria, mediante justificativa relacionada a compromissos familiares, profissionais ou de saúde.',
        ],
      },
      {
        number: 'Art. 33º',
        content: 'O presente Estatuto passa a vigorar a partir da data de sua aprovação.',
      },
    ],
  },
]

export function StatutePage() {
  return (
    <main className="page-enter statute-page">
      <section className="section-shell statute-hero">
        <p className="section-kicker">Documento Oficial</p>
        <h1>Estatuto Social</h1>
        <p className="statute-hero__subtitle">
          SobreviventeS Moto Clube — Fundado em 1 de maio de 2011. Sede em Almirante Tamandaré, Paraná.
        </p>
      </section>

      <section className="section-shell statute-nav">
        <nav aria-label="Capítulos do Estatuto">
          <ul className="statute-nav__list">
            {chapters.map((chapter) => (
              <li key={chapter.id}>
                <a href={`#${chapter.id}`} className="statute-nav__link">
                  {chapter.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      <section className="section-shell statute-content">
        <div className="statute-article">
          {chapters.map((chapter) => (
            <div key={chapter.id} id={chapter.id} className="statute-chapter">
              <h2 className="statute-chapter__title">{chapter.title}</h2>

              {chapter.articles.map((article) => (
                <div key={article.number} className="statute-block">
                  <p className="statute-block__body">
                    <strong>{article.number}</strong> {article.content}
                  </p>

                  {article.items && (
                    <ol className="statute-block__list">
                      {article.items.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ol>
                  )}

                  {article.paragraphs && (
                    <div className="statute-block__paragraphs">
                      {article.paragraphs.map((p, index) => (
                        <p key={index} className="statute-block__paragraph">
                          {p}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
