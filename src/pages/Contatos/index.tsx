import React from 'react';
import { Header } from '../../components/Header';
import { Contato } from '../../types/Contato';

// Componente Contato individual
const ContatoItem: React.FC<Contato> = ({ icone, link, texto }) => {
    return (
        <section className="contato">
            <a href={link} target='blank' rel="noopener noreferrer">
                <div className="btn">
                    <i className={icone}></i>
                </div>
            </a>
            <p className="text-contato">{texto}</p>
        </section>
    );
};

// Componente principal dos Contatos
export const Contatos: React.FC = () => {
    const Contatos = [
        {
            icone: "far fa-envelope",
            link: "mailto:ana.silva2237@fatec.sp.gov.br",
            texto: "ana.silva2237@fatec.sp.gov.br"
        },
        {
            icone: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/anamoratelli/",
            texto: "linkedin"
        },
        {
            icone: "fab fa-github",
            link: "https://github.com/Ana-Laura-Moratelli",
            texto: "GitHub"
        }
    ];

    return (
        <div>
            <Header />
            <h1 className="titulo-pag">Contatos</h1>
            <section className="container-contatos">
                {Contatos.map((contato, index) => (
                    <ContatoItem key={index} {...contato} />
                ))}
            </section>
        </div>
    );
};
