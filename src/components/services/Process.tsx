export default function Process() {
    const steps = [
        {
            number: "01",
            title: "Briefing",
            description: "Conversamos sobre suas necessidades, objetivos e visão do projeto para entender exatamente o que você precisa.",
            icon: "💬"
        },
        {
            number: "02",
            title: "Planejamento",
            description: "Crio um plano detalhado com cronograma, tecnologias a serem usadas e estrutura do projeto.",
            icon: "📋"
        },
        {
            number: "03",
            title: "Design",
            description: "Desenvolvo o design visual do site, sempre alinhado com sua identidade e aprovado por você.",
            icon: "🎨"
        },
        {
            number: "04",
            title: "Desenvolvimento",
            description: "Codifico seu site utilizando as melhores práticas e tecnologias modernas do mercado.",
            icon: "💻"
        },
        {
            number: "05",
            title: "Testes",
            description: "Testo em diversos dispositivos e navegadores para garantir que tudo funcione perfeitamente.",
            icon: "🔍"
        },
        {
            number: "06",
            title: "Lançamento",
            description: "Coloco seu site no ar e te ensino como gerenciar o conteúdo. Suporte pós-lançamento incluído!",
            icon: "🚀"
        }
    ]

    return (
        <section id="process" className="experience">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Como Funciona</h2>
                    <p className="section-subtitle">Processo simples e transparente do início ao fim</p>
                </div>

                <div className="process-timeline">
                    {steps.map((step, index) => (
                        <div key={index} className="process-step">
                            <div className="step-number">{step.number}</div>
                            <div className="step-content">
                                <div className="step-icon">{step.icon}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-description">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
