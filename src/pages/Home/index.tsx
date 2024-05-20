import React from 'react';
import ana from '../../assets/img/ana.svg';
import { Header } from '../../components/Header';
import { Icone } from '../../types/Icone';

const IconeLink: React.FC<Icone> = ({ link, icone }) => {
    return (
        <a href={link} target='blank'>
            <div className="btn">
                <i className={icone}></i>
            </div>
        </a>
    );
};


export const Home = () => {
    const Icones = [
        {
            icone: "fab fa-linkedin",
            link: "https://www.linkedin.com/in/anamoratelli/",
        },
        {
            icone: "fab fa-github",
            link: "https://github.com/Ana-Laura-Moratelli",
        }
    ];
    return (
        <div>
            <Header />
            <section className="home">
                <section className="home-text">
                    <p>Olá, sou a Ana Laura Moratelli, tenho 19 anos. Este é meu portfólio, onde você encontra minhas informações de contato, um pouco sobre mim e projetos realizados, além daqueles que pretendo desenvolver durante minha jornada na faculdade de desenvolvimento de software!</p>

                    <div className="container-link">
                        {Icones.map((icone, index) => (
                            <IconeLink key={index} {...icone} />
                        ))}
                    </div>
                </section>
                <img className='image-ana' src={ana} alt="ana" />
            </section>
        </div>
    );
};