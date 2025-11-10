import { useState } from "react"

export default function CTASection() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    })

    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const form = new FormData()
            form.append('name', formData.name)
            form.append('email', formData.email)
            form.append('phone', formData.phone)
            form.append('service', formData.service)
            form.append('message', formData.message)
            form.append('_subject', `Novo orçamento de ${formData.name} - ${formData.service}`)
            form.append('_captcha', 'false')
            form.append('_template', 'table')

            const response = await fetch('https://formsubmit.co/daf2b75e64fb846c63068f320fa8dc94', {
                method: 'POST',
                body: form
            })

            if (response.ok) {
                setIsSubmitted(true)
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                })
            } else {
                throw new Error('Erro ao enviar formulário')
            }
        } catch (error) {
            console.error('Erro:', error)
            alert('Erro ao enviar mensagem. Tente novamente.')
        } finally {
            setIsSubmitting(false)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    return (
        <section id="cta" className="contact">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Vamos Começar Seu Projeto?</h2>
                    <p className="section-subtitle">Solicite um orçamento sem compromisso</p>
                </div>

                <div className="contact-form-container">
                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="contact-form">
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Nome *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">E-mail *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="seu@email.com"
                                    />
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="phone">Telefone *</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="service">Serviço de Interesse *</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Selecione um serviço</option>
                                        <option value="Landing Page">Landing Page</option>
                                        <option value="Site Institucional">Site Institucional</option>
                                        <option value="E-commerce">E-commerce</option>
                                        <option value="Projeto Personalizado">Projeto Personalizado</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Conte-me sobre seu projeto *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    placeholder="Descreva seu projeto, objetivos e prazos..."
                                />
                            </div>

                            <button type="submit" className="form-submit" disabled={isSubmitting}>
                                <span>{isSubmitting ? 'Enviando...' : 'Solicitar Orçamento'}</span>
                                {!isSubmitting && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M5 12h14M12 5l7 7-7 7" />
                                    </svg>
                                )}
                            </button>
                        </form>
                    ) : (
                        <div className="success-message">
                            <div className="success-icon">
                                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                    <polyline points="22,4 12,14.01 9,11.01" />
                                </svg>
                            </div>
                            <h3 className="success-title">Orçamento Solicitado com Sucesso! 🎉</h3>
                            <p className="success-description">
                                Obrigada pelo interesse! Analisarei seu projeto e entrarei em contato em até 24 horas com uma proposta personalizada.
                            </p>
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="btn-primary"
                            >
                                Solicitar novo orçamento
                            </button>
                        </div>
                    )}
                </div>

                <div className="contact-info-grid">
                    <div className="contact-card">
                        <div className="contact-icon">📧</div>
                        <h3>E-mail</h3>
                        <p>ana.moratelli@fatec.sp.gov.br</p>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon">💼</div>
                        <h3>LinkedIn</h3>
                        <a href="https://linkedin.com/in/anamoratelli" target="_blank" rel="noopener noreferrer">
                            /anamoratelli
                        </a>
                    </div>
                    <div className="contact-card">
                        <div className="contact-icon">💻</div>
                        <h3>GitHub</h3>
                        <a href="https://github.com/Ana-Laura-Moratelli" target="_blank" rel="noopener noreferrer">
                            /Ana-Laura-Moratelli
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
