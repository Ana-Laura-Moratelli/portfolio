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
        ('Portfólio', 'Meu portfólio que foi desenvolvido com o objetivo de ter as minhas informações pessoais, acadêmicas e meus contatos.','Acesse o repositório'),
    ]
    return render_template('projetos.html',  projetos=projetos)

@app.route('/contatos')
def contatos():
    return render_template('contatos.html')

if __name__ == "__main__":
    app.run(debug=True)
    