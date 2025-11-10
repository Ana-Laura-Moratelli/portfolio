export default function ServicesOffered() {
    const services = [
        {
            icon: "🚀",
            title: "Landing Pages",
            description: "Páginas de captura otimizadas para conversão, perfeitas para campanhas de marketing, lançamentos de produtos e geração de leads.",
            features: [
                "Design responsivo e moderno",
                "Otimização para SEO",
                "Formulários de captura integrados",
                "Análise de performance",
                "Carregamento ultra-rápido"
            ],
            price: "A partir de R$ 800"
        },
        {
            icon: "🏢",
            title: "Sites Institucionais",
            description: "Sites corporativos elegantes e profissionais que transmitem credibilidade e fortalecem a presença digital da sua empresa.",
            features: [
                "Design personalizado",
                "Sistema de gerenciamento de conteúdo",
                "Galeria de imagens",
                "Formulário de contato",
                "Integração com redes sociais"
            ],
            price: "A partir de R$ 1.500"
        },
        {
            icon: "🛒",
            title: "E-commerce",
            description: "Lojas virtuais completas e seguras para vender seus produtos online com eficiência e profissionalismo.",
            features: [
                "Catálogo de produtos",
                "Carrinho de compras",
                "Integração com pagamento",
                "Painel administrativo",
                "Controle de estoque",
                "Sistema de cupons"
            ],
            price: "A partir de R$ 3.000"
        }
    ]

    return (
        <section id="services-offered" className="about">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Serviços Oferecidos</h2>
                    <p className="section-subtitle">Soluções completas para sua presença digital</p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <ul className="service-features">
                                {service.features.map((feature, idx) => (
                                    <li key={idx}>
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                            <polyline points="20 6 9 17 4 12" />
                                        </svg>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <div className="service-price">{service.price}</div>
                            <a href="#cta" className="service-cta">
                                Solicitar Orçamento
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M5 12h14M12 5l7 7-7 7" />
                                </svg>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
