export default function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">Conheça um pouco mais sobre minha trajetória e paixão por tecnologia</p>
        </div>

        <div className="about-content">
          <div className="about-text">
            <p>
              Sou uma desenvolvedora frontend apaixonada por criar experiências digitais incríveis e funcionais. Com 20
              anos, estou sempre em busca de novos desafios e oportunidades para crescer profissionalmente.
            </p>
            <p>
              Minha jornada na tecnologia começou com eletrônica, onde desenvolvi uma boa base em lógica e resolução
              de problemas. Essa experiência me proporcionou uma perspectiva única no desenvolvimento de software,
              combinando conhecimento técnico com criatividade.
            </p>
            <p>
              Atualmente, foco no desenvolvimento frontend, criando interfaces intuitivas e responsivas que proporcionam
              excelente experiência do usuário. Estou sempre aprendendo novas tecnologias e melhores práticas para
              entregar soluções de qualidade.
            </p>
          </div>

          <div className="about-highlights">
            <div className="highlight-item">
              <div className="highlight-number">2+</div>
              <div className="highlight-text">Anos de Experiência</div>
            </div>
            <div className="highlight-item">
              <div className="highlight-number">10+</div>
              <div className="highlight-text">Projetos Concluídos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
