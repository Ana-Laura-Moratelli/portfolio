export default function ServicesHero() {
    return (
        <section id="services-hero" className="hero">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-badge">
                            <span>💼 Serviços Profissionais</span>
                        </div>
                        <h1 className="hero-title">Transforme Suas Ideias em Sites Incríveis</h1>
                        <h2 className="hero-subtitle">Desenvolvimento Web Profissional e Personalizado</h2>
                        <p className="hero-description">
                            Crio sites modernos, responsivos e otimizados que ajudam seu negócio a crescer online. 
                            Landing pages de alta conversão, sites institucionais elegantes e e-commerces completos 
                            desenvolvidos com as melhores tecnologias do mercado.
                        </p>
                        <div className="hero-actions">
                            <a href="#pricing" className="btn-primary">
                                Ver Planos
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                            <a href="#portfolio" className="btn-secondary">
                                Ver Portfólio
                            </a>
                        </div>
                        <div className="hero-stats">
                            <div className="stat-item">
                                <span className="stat-number">10+</span>
                                <span className="stat-label">Projetos Concluídos</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">100%</span>
                                <span className="stat-label">Clientes Satisfeitos</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">2+</span>
                                <span className="stat-label">Anos de Experiência</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
