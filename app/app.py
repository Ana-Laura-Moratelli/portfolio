from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def home():
    return render_template('home.html')

@app.route('/sobremim')
def sobremim():
    return render_template('sobremim.html')

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
            'link': 'https://github.com/Ana-Laura-Moratelli',
            'acesse': 'Acesse o repositório',
        },
        # Adicione mais projetos aqui
    ]
    return render_template('projetos.html', projetos=projetos)


@app.route('/contatos')
def contatos():
    return render_template('contatos.html')

if __name__ == "__main__":
    app.run(debug=True)
    