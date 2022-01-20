import React, { Component } from "react";
import CardNota from "./CardNota";
class ListaDeNotas extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>
            <CardNota />
          </li>
        </ul>
        <ul>
          <li>
            <CardNota />
          </li>
        </ul>
      </div>
    );
  }
}
export default ListaDeNotas;
