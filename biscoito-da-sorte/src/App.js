import React, { Component } from 'react';
import './style.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      textoFrase : ''
    };

    this.quebraBiscoito = this.quebraBiscoito.bind(this);

    this.frases = ['É a verdade que acaba com todos os relacionamentos. É a mentira que mantém o casal junto.(Choque de cultura)', 'Achou que ia encontrar motivação aqui?Achou errado, otário!', 'A gente faz terapia pra se apaixonar por si mesmo.(Choque de cultura)', 'Quando você é uma criança bonita, você se torna um adulto esquisito. Você não pode ser bonito a vida inteira.(Choque de cultura)', 'Hoje é o primeiro dia do resto da sua vida. Mas ontem também foi, e veja como acabou.', 'Se você quiser, se você se esforçar, se você treinar, se você entrar de cabeça, se você se concentrar... Nada garante que você vai conseguir.(Craque Daniel)', 'Cada dia é uma nova chance para você errar novamente.','Sempre há espaço na vida para fazer mais merda. Sempre.', 'Sou naturalmente engraçado porque minha vida é uma piada.', 'Quando a vida te derrubar, fique aí e tire uma soneca.', 'Todos os dias é sexta-feira quando você está desempregado.', 'Aqui não é pôr-do-sol pra idiota ficar batendo palma.'];
  }

  quebraBiscoito(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "';
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require('./assets/biscoito.png')} className="img"/>
        <Botao nome="Pegue sua frase desmotivacional" acaoBtn={this.quebraBiscoito} />
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
      </div>
    );
  }
}

class Botao extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.acaoBtn} className="btn">{this.props.nome}</button>
      </div>
    );
  }
}

export default App;