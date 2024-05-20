import React from 'react';
import { Header } from '../../components/Header';
import api from '../../assets/img/img_api.png';
import siteUnes from '../../assets/img/img_site_unes.png';
import portfolio from '../../assets/img/img_port.png';
import logs from '../../assets/img/img_logs.png';
import apiDesk from '../../assets/img/img_api_desk.png';

import { Projetos } from '../../types/Projeto';

const ProjetoItem: React.FC<Projetos> = ({ img, titulo, texto, link, acesse }) => {
    return (
        <div className="card-projetos">
            <div className="caixaImg">
                <img className='logo' src={img} alt="api" />
            </div>
            <div className="conteudo-projetos">
                <h3>{titulo}</h3>
                <p>{texto}</p>
                <a href={link} target='blank'>
                    <button className='buttonAcesseRepositorio'>{acesse}</button>
                </a>
            </div>

        </div>
    );
};


export const Projeto = () => {
    const Projetos = [
        {
            'img': api,
            'titulo': 'Nefrologia Pediátrica',
            'texto': 'Site desenvolvido para auxiliar mães com filhos que sofrem de doença renal crônica e notícias importantes sobre Nefrologia Pediátrica.',
            'link': 'https://github.com/Sync-FATEC/API-NEFRO',
            'acesse': 'Acesse o repositório',
        },
        {
            'img': siteUnes,
            'titulo': 'Universidade Unes',
            'texto': 'O site simula informações acadêmicas,desenvolvido para praticar para minhas habilidades de desenvolvimento web.',
            'link': 'https://github.com/Ana-Laura-Moratelli/site-unes',
            'acesse': 'Acesse o repositório',
        },
        {
            'img': portfolio,
            'titulo': 'Portfólio',
            'texto': 'Meu portfólio que foi desenvolvido com o objetivo de ter as minhas informações pessoais, acadêmicas e meus contatos.',
            'link': 'https://github.com/Ana-Laura-Moratelli/portfolio',
            'acesse': 'Acesse o repositório',
        },
        {
            'img': logs,
            'titulo': 'Gerenciador de Logs',
            'texto': 'Uma tela para um sistema de autenticação e cadeia de custódia, para o gerenciamento do histórico de logs em um site de compras. ',
            'link': 'https://github.com/Ana-Laura-Moratelli/gerenciador-logs',
            'acesse': 'Acesse o repositório',
        },
        {
            'img': apiDesk,
            'titulo': 'Service Desk',
            'texto': ' Site desenvolvido para oferecer registro de chamados. Seu foco é melhorar a experiência do usuário, facilitando o planejamento e controle do atendimento do suporte.',
            'link': 'https://github.com/Sync-FATEC/API-DESK',
            'acesse': 'Acesse o repositório',
        },
    ];
    return (
        <div>
            <Header />
            <h1 className="titulo-pag">Projetos</h1>
            <section className="text-projetos">
                <p>
                    Esses são os projetos acadêmicos que eu ja realizei durante o primeiro semestre da faculdade de desenvolvimento de software multiplataforma
                </p>
            </section>
            <section className="container-projetos">
                {Projetos.map((projeto, index) => (
                    <ProjetoItem key={index} {...projeto} />
                ))}
            </section>
        </div >

    );
};