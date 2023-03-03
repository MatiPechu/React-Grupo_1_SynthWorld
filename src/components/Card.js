import React from "react";
function Card(props){
    return(
<div className="content">
    <h3> Cantidad total de "Elemento en cuestion"</h3>
        <div>
            <p>
                Total de {props.Product} 
            </p>
            <i>Icono del Elemento</i>
        </div>
</div>
    )
}
export default Card