import React, { Component } from 'react';

import './assets/App.css';
import FormularioCadastro from './components/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas';

class App extends Component {
  render() {
    return (
      <div>
        <section className="conteudo">
          <FormularioCadastro className="div" />
          <ListaDeNotas />
        </section>
      </div >

    );
  }
}

export default App;
