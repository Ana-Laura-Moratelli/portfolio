from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    icones = [
        {
            'link': 'https://www.linkedin.com/in/anamoratelli/',
            'icone': 'fab fa-linkedin',
        },
          {
            'link': 'https://github.com/Ana-Laura-Moratelli',
            'icone': 'fab fa-github',
        },
        
    ]     
    return render_template('home.html', icones=icones)

@app.route('/sobremim')
def sobremim():
    formacoes = [
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
    ]
    medalhas = [
        {
            'texto': '2º lugar Olimpíada Canguru de matemática em 2018',
        },
         {
            'texto': '2º lugar Olimípiada Brasileira de Astronomia em 2022',
        },
     ]
    conhecimentos = [
        {
            'icone': 'fa-solid fa-code',
            'titulo': 'Front-end',
            'lista': 'HTML 5',
            'lista1': 'CSS 3',
            'lista2': 'Java Script',
            'titulo1': 'Frameworks',
            'lista3': 'Bootstrap',  
            'titulo2': '',
            'lista4': '',  
        },
        {
            'icone': 'fa-solid fa-laptop-code',
            'titulo': 'Back-end',
            'lista': 'Python',
            'lista1': '',
            'lista2': '',
            'titulo1': 'Frameworks',
            'lista3': 'Flask',   
            'titulo2': 'Database',
            'lista4': 'MySQL',  
        },
        {
            'icone': 'fa-brands fa-dev',
            'titulo': 'DevOps',
            'lista': 'Linux',
            'lista1': '',
            'lista2': '',
            'titulo1': 'Cloud',
            'lista3': 'AWS',   
            'titulo2': 'Virtualização',
            'lista4': 'Docker',  
        },
     ]
    return render_template('sobremim.html', formacoes=formacoes, medalhas=medalhas, conhecimentos=conhecimentos)

@app.route('/projetos')
def projetos():
    projetos = [
        {
            'img': '../static/img/img_api.png',
            'titulo': 'Nefrologia Pediátrica',
            'texto': 'Site desenvolvido para auxiliar mães com filhos que sofrem de doença renal crônica e notícias importantes sobre Nefrologia Pediátrica.',
            'link': 'https://github.com/Sync-FATEC/API-NEFRO',
            'acesse': 'Acesse o repositório',
        },
        {
            'img': '../static/img/img_site_unes.png',
            'titulo': 'Universidade Unes',
            'texto': 'O site simula informações acadêmicas,desenvolvido para praticar para minhas habilidades de desenvolvimento web.',
            'link': 'https://github.com/Ana-Laura-Moratelli/site-unes',
            'acesse': 'Acesse o repositório',
        },
         {
            'img': '../static/img/img_port.png',
            'titulo': 'Portfólio',
            'texto': 'Meu portfólio que foi desenvolvido com o objetivo de ter as minhas informações pessoais, acadêmicas e meus contatos.',
            'link': 'https://github.com/Ana-Laura-Moratelli/portfolio',
            'acesse': 'Acesse o repositório',
        },
        {
            'img': '../static/img/img_logs.png',
            'titulo': 'Gerenciador de Logs',
            'texto': 'Uma tela para um sistema de autenticação e cadeia de custódia, para o gerenciamento do histórico de logs em um site de compras. ',
            'link': 'https://github.com/Ana-Laura-Moratelli/gerenciador-logs',
            'acesse': 'Acesse o repositório',
        },
    ]
    return render_template('projetos.html', projetos=projetos)

@app.route('/contatos')
def contatos():
    contatos = [
        {
            'link': 'mailto:ana.silva2237@fatec.sp.gov.br',
            'icone': 'far fa-envelope',
            'texto': 'ana.silva2237@fatec.sp.gov.br',
        },
         {
            'link': 'https://www.linkedin.com/in/anamoratelli/',
            'icone': 'fab fa-linkedin',
            'texto': 'linkedin',
        },
         {
            'link': 'https://github.com/Ana-Laura-Moratelli',
            'icone': 'fab fa-github',
            'texto': 'Git hub',
        },
    ]
    return render_template('contatos.html', contatos=contatos)

if __name__ == "__main__":
    app.run(debug=True)
    