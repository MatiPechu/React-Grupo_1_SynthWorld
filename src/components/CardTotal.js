import React from "react";
import '../assets/css/CardTotal.css'

function Card(props){
    return(
<div className="content totals">
    <h3> Total {props.name}</h3>
        <div className='total'>
            <p>{props.data}</p>
            <i className={props.icon}></i>
        </div>
</div>
    )
}
export default Card