import nefroImage from '../assets/nefro.png'
import serviceDeskImage from '../assets/service-desk.png'
import fapgImage from '../assets/fapg.png'
import tecsusImage from '../assets/tecsus.png'
import unesImage from '../assets/unes.png'
import tripwiseImage from '../assets/tripwise.png'
import petfinderImage from '../assets/petfinder.png'
import huntImage from '../assets/hunt.png'
import huntpilotImage from '../assets/huntpilot.png'
import appelogiosImage from '../assets/appelogios.png'
import atlantisImage from '../assets/atlantis.png'
import almoxarifadoImage from '../assets/almoxarifado.png'

export default function Projects() {
    const projects = [
        {
            title: "Site Nefrologia Pediátrica",
            description:
                "Esse projeto consiste em desenvolver um site com o objetivo de ajudar mães de crianças com insuficiência renal crônica, oferecendo orientações e informações importantes. Além disso, foi criado um blog para compartilhar histórias de mães.",
            technologies: ["Figma", "HTML", "CSS", "JavaScript", "Flask", "Python", "MySQL"],
            image: nefroImage,
            category: "Site",
            status: "Concluído",
            github: "https://github.com/Sync-FATEC/API-2023.2-1SEM",
        },
        {
            title: "Service Desk",
            description:
                "Esse projeto consiste em desenvolver uma solução para gestão de chamados de serviços, com foco em funcionalidades como cadastros, registro de chamados e gerenciamento do SLA.",
            technologies: ["Figma", "HTML", "CSS", "React", "TypeScript", "Node.js", "MySQL"],
            image: serviceDeskImage,
            category: "Sistema",
            status: "Concluído",
            github: "https://github.com/Sync-FATEC/API-2024.1-2SEM",
        },
        {
            title: "Portal da Transparência",
            description:
                "Este projeto consiste em desenvolver um portal da transparência para a Fundação FAPG. O objetivo foi entregar uma plataforma eficiente, com funcionalidades que permitem o gerenciamento completo dos projetos.",
            technologies: ["Figma", "HTML", "CSS", "React", "TypeScript", "Java", "Spring", "Python", "MySQL"],
            image: fapgImage,
            github: "https://github.com/Sync-FATEC/API-2024.2-3SEM",
            category: "Sistema",
            status: "Concluído",
        },
        {
            title: "Sistema de Monitoramento Ambiental",
            description:
                "Este projeto tem como objetivo desenvolver um sistema de monitoramento ambiental para a Tecsus, permitindo a coleta, processamento e visualização de dados meteorológicos em tempo real.",
            technologies: ["Figma", "HTML", "CSS", "React", "TypeScript", "MongoDB", "MySQL"],
            image: tecsusImage,
            category: "Sistema",
            status: "Concluído",
            github: "https://github.com/Sync-FATEC/API-2025.1-4SEM"
        },
        {
            title: "Unes",
            description:
                "Site desenvolvido com o objetivo de praticar conhecimentos em desenvolvimento web, utilizando HTML, CSS e o framework Bootstrap para a construção da interface.",
            technologies: ["HTML", "CSS", "Bootstrap", "Flask", "Python", "MySQL"],
            image: unesImage,
            category: "Site",
            status: "Concluído",
            github: "https://github.com/Ana-Laura-Moratelli/site-unes"
        },
        {
            title: "Atlantis",
            description:
                "A Atlantis é uma plataforma integrada desenvolvida para auxiliar parques aquáticos, clubes e hotéis na gestão e organização de suas atividades cotidianas.",
            technologies: ["Tailwind CSS", "TypeScript", "Node.js", "React", "MySQL"],
            image: atlantisImage,
            category: "Sistema",
            status: "Concluído",
            github: "https://github.com/Ana-Laura-Moratelli/atlantis",
        },
        {
            title: "TripWise",
            description:
                "O app TripWise tem como objetivo facilitar a organização de viagens, permitindo que os usuários planejem itinerários e pesquisem voos e acomodações, entre outras funções.",
            technologies: ["TypeScript", "React Native", "Expo", "Firebase"],
            image: tripwiseImage,
            category: "Mobile",
            status: "Concluído",
            github: "https://github.com/Ana-Laura-Moratelli/tripwise",
        },
        {
            title: "Pet Finder App",
            description:
                "Aplicativo desenvolvido para ajudar na busca e adoção de animais, com sistema de geolocalização e notificações em tempo real.",
            technologies: ["Figma", "Experiência do Usuário"],
            image: petfinderImage,
            category: "Mobile",
            status: "Concluído",
        },
        {
            title: "App Elogios",
            description:
                "Aplicativo corporativo para reconhecimento e feedback entre colaboradores.",
            technologies: ["JavaScript", "React Native", "Expo", "PostgreSQL"],
            image: appelogiosImage,
            category: "Mobile",
            status: "Concluído",
        },
        {
            title: "Hunt Sales",
            description:
                "Desenvolvi o site oficial da Hunt Sales, empresa especializada na construção de processos comerciais com IA.",
            technologies: ["HTML", "CSS", "JavaScript"],
            image: huntImage,
            category: "Site",
            status: "Concluído",
            demo: "https://huntsales.com.br/",
        },
        {
            title: "Hunt Pilot",
            description:
                "Desenvolvi a landing page do Hunt Pilot, um sistema com inteligência artificial que atua via WhatsApp.",
            technologies: ["HTML", "CSS", "JavaScript"],
            image: huntpilotImage,
            category: "Landing Page",
            status: "Concluído",
            demo: "https://huntsales.com.br/huntpilot/",
        },
        {
            title: "App Gestão Almoxarifado Militar",
            description:
                "Aplicativo para gerenciar o almoxarifado militar, facilitando o controle de estoque e a logística de materiais.",
            technologies: ["Figma", "TypeScript", "CSS", "HTML", "React", "Flutter", "Python", "Firebase", "PostgreSQL"],
            image: almoxarifadoImage,
            category: "Mobile",
            status: "Andamento",
            github: "https://github.com/Sync-FATEC/API-2025.2-5SEM",
        },
    ]

    return (
        <section id="projects" className="projects">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Projetos</h2>
                    <p className="section-subtitle">Alguns dos meus trabalhos mais recentes e significativos</p>
                </div>

                <div className="projects-grid">
                    {projects.slice().reverse().map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                                {(project.demo || project.github) && (
                                    <div className="project-overlay">
                                        <div className="project-links">
                                            {project.demo && (
                                                <a
                                                    href={project.demo}
                                                    className="project-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Ver projeto"
                                                >
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                        <polyline points="15,3 21,3 21,9" />
                                                        <line x1="10" y1="14" x2="21" y2="3" />
                                                    </svg>
                                                </a>
                                            )}
                                            {project.github && (
                                                <a
                                                    href={project.github}
                                                    className="project-link"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    aria-label="Ver código"
                                                >
                                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                    </svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </div>

                            <div className="project-content">
                                <div className="project-header">
                                    <div className="project-category">{project.category}</div>
                                    <div className={`project-status ${project.status.toLowerCase().replace(" ", "-")}`}>
                                        {project.status}
                                    </div>
                                </div>

                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-technologies">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span key={techIndex} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {(project.demo || project.github) && (
                                    <div className="project-actions">
                                        {project.demo && (
                                            <a
                                                href={project.demo}
                                                className="project-action-btn demo-btn"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Ver projeto"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                                                    <polyline points="15,3 21,3 21,9" />
                                                    <line x1="10" y1="14" x2="21" y2="3" />
                                                </svg>
                                                Acesse a página
                                            </a>
                                        )}
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                className="project-action-btn github-btn"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                aria-label="Ver código"
                                            >
                                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                                Ver Código
                                            </a>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
