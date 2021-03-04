  
import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(){
    this.titulo = "";
  }

  handleMudancaTitulo(evento){
    this.titulo = console.log(evento.target.value);
  }

  render() {
    return (
      <form className="form-cadastro "
      onSubmit={}>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handleMudancaTitulo}

        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;