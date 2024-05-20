import React from 'react';
import { Header } from '../../components/Header';
import { Formacao } from '../../types/Formacao';
import { Medalha } from '../../types/Medalha';
import { Experiencia } from '../../types/Experiencia';
import { Conhecimento } from '../../types/Conhecimento';

const FormacaoItem: React.FC<Formacao> = ({ titulo, conclusao, instituicao }) => {
    return (
        <div className="card">
            <div className="card1">
                <p className="card-title">
                    <span className="material-symbols-outlined">school</span>
                    {titulo}
                </p>
                <p className="card-text">
                    {conclusao}
                    <br />
                    {instituicao}
                </p>
            </div>
        </div>
    );
};
const ExperienciaItem: React.FC<Experiencia> = ({ titulo, empresa, periodo, texto }) => {
    return (
        <section className="sobre">
            <div className="card-medalha">
                <span className="icone-medalha">
                    <i className="fa-solid fa-headset"></i>
                </span>
                <h3 className="sub-titulo-card">{titulo}</h3>
                <ul>
                    <li>Empresa: {empresa}</li>
                    <li>{periodo}</li>
                    <p>{texto}</p>
                </ul>
            </div>
        </section>
    );
};

const MedalhaItem: React.FC<Medalha> = ({ texto }) => {
    return (
        <section className="sobre">
            <div className="card-medalha">
                <span className="icone-medalha">
                    <i className="fa-solid fa-medal"></i>
                </span>
                <p>{texto}</p>
            </div>
        </section>
    );
};
const ConhecimentoItem: React.FC<Conhecimento> = ({ icone, titulo, titulo1, titulo2, lista, lista1, lista2, lista3, lista4 }) => {
    return (
        <div className="card-sobre">
        <span className="icone"><i className={icone}></i></span>
        <p className="texto-card">
            <h3 className="sub-titulo-card">{titulo}</h3>
            <ul>
                <li>{lista}</li>
                <li>{lista1}</li>
                <li>{lista2}</li>
            </ul>
            <h3 className="sub-titulo-card">{titulo1}</h3>
            <ul>
                <li>{lista3}</li>
            </ul>
            <h3 className="sub-titulo-card">{titulo2}</h3>
            <ul>
                <li>{lista4}</li>
            </ul>
        </p>
    </div>
    );
};
export const SobreMim = () => {
    const formacoes = [
        {
            'titulo': 'Ensino médio e técnico em eletrônica',
            'conclusao': 'Concluído em 2022',
            'instituicao': 'Instituição: Colégios Univap',
        },
        {
            'titulo': 'Desenvolvimento de software multiplataforma',
            'conclusao': 'Conclusão prevista em agosto de 2026',
            'instituicao': 'Instituição: Fatec Prof. Jessen Vidal',
        },
        {
            'titulo': ' Curso de Inglês Intermediário',
            'conclusao': 'Concluído em 2021',
            'instituicao': 'Instituição: ELEC School',
        },
    ];
    const medalhas = [
        {
            'texto': '2º lugar Olimpíada Canguru de matemática em 2018',
        },
        {
            'texto': '2º lugar Olimípiada Brasileira de Astronomia em 2022',
        },
    ];
    const experiencias = [
        {
            'titulo': 'Suporte Técnico',
            'empresa': 'Colégios Univap',
            'periodo': 'Março 2021 até Junho 2022',
            'texto': 'Durante meu estágio em eletrônica, tive a oportunidade de trabalhar em projetos de desenvolvimento de circuitos eletrônicos. Aprendi técnicas de soldagem e teste de componentes eletrônicos, além de ter a oportunidade de programar microcontroladores utilizando linguagem C++.',
        },
        {
            'titulo': 'Suporte Técnico',
            'empresa': 'Micro Assit Informática',
            'periodo': 'Janeiro 2024 até o momento',
            'texto': 'No meu trabalho de suporte técnico, desempenho um papel fundamental na gestão de TI para empresas. Minhas responsabilidades incluem a administração de servidores, a implementação e manutenção de serviços de virtualização, e a gestão de serviços em nuvem.',
        },
    ];
    const conhecimentos = [
        {
            'icone': 'fa-solid fa-code',
            'titulo': 'Front-end',
            'lista': 'HTML 5',
            'lista1': 'CSS 3',
            'lista2': 'JavaScript',
            'titulo1': 'Frameworks',
            'lista3': 'Bootstrap',  
            'titulo2': '',
            'lista4': 'React',  
        },
        {
            'icone': 'fa-solid fa-laptop-code',
            'titulo': 'Back-end',
            'lista': 'Python',
            'lista1': 'Node',
            'lista2': 'TypeScript',
            'titulo1': 'Frameworks',
            'lista3': 'Flask',   
            'titulo2': 'Database',
            'lista4': 'MySQL',  
        },
        {
            'icone': 'fa-brands fa-dev',
            'titulo': 'DevOps',
            'lista': 'Linux',
            'lista1': 'Windows',
            'lista2': '',
            'titulo1': 'Cloud',
            'lista3': 'AWS',   
            'titulo2': 'Virtualização',
            'lista4': 'Docker',  
        },
    ];
    return (
        <div>
            <Header />
            <h1 className="titulo-pag">Formação acadêmica</h1>
            <div className="container-card">
                {formacoes.map((formacao, index) => (
                    <FormacaoItem key={index} {...formacao} />
                ))}
            </div>
            <section>
                <h2 className="sub-titulo">Experiência Profissional</h2>
                <section className="container-sobre">
                    {experiencias.map((experiencia, index) => (
                        <ExperienciaItem key={index} {...experiencia} />
                    ))}
                </section>
            </section>
            <h2 className="sub-titulo">Medalhas</h2>
            <section className="container-sobre">
                {medalhas.map((medalha, index) => (
                    <MedalhaItem key={index} {...medalha} />
                ))}
            </section>
            <h2 className="sub-titulo">Conhecimentos</h2>
            <section className="container-sobre1">
            {conhecimentos.map((conhecimento, index) => (
                    <ConhecimentoItem key={index} {...conhecimento} />
                ))}
            </section>
        </div>
    );
};