import React, { useEffect } from 'react';
import logo from '../../assets/img/logo.svg';

export const Header: React.FC = () => {
    useEffect(() => {
        const hamburguer = document.querySelector<HTMLDivElement>(".hamburguer");
        const navMenu = document.querySelector<HTMLUListElement>(".nav-menu");

        const handleClick = () => {
            if (hamburguer && navMenu) {
                hamburguer.classList.toggle('active');
                navMenu.classList.toggle('active');
            }
        };

        hamburguer?.addEventListener("click", handleClick);

        return () => {
            hamburguer?.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div className="navbar">
            <a href="/">
                 <img className='logo' src={logo} alt="logo" />
            </a>
           
            <ul className="nav-menu">
                <li className="nav-item"><a href="/sobremim" className="nav-link">Sobre mim</a></li>
                <li className="nav-item"><a href="/projetos" className="nav-link">Projetos</a></li>
                <li className="nav-item"><a href="/contatos" className="nav-link">Contatos</a></li>
            </ul>
            <div className="hamburguer">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </div>
    );
};
