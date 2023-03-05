import React from "react";
import '../assets/css/Cards.css'

function Card(props){
    return(
<div className="content">
    <h3> Total de {props.name}</h3>
        <div class='total'>
            <p>{props.data}</p>
            <i class={props.icon}></i>
        </div>
</div>
    )
}
export default Card