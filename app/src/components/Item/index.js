import React from "react";

import Foto from "../Foto";

const Item = ({ enlace, titulo, descripcion }) => (
  <li>
    <Foto enlace={enlace} />
    <h2>{titulo}</h2>
    <p>{descripcion}</p>
  </li>
);

/**
function item(props){
    return (
        <li>
            <h2>Titulo</h2>
            <p>Descripcion</p>
        </li>
    )
}
*/

export default Item;
