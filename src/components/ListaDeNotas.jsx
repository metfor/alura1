import React, { Component } from "react";
import CardNota from "./CardNota";
class ListaDeNotas extends Component {
  render() {
    return (
      <div>
        <ul>
          {Array.of("Trabalho", "Trabalho", "Estudos").map((categoria) => {
            return (
              <li>
                <div>{categoria}</div>
                <CardNota />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
export default ListaDeNotas;
