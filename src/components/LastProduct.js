import React from "react";
import '../assets/css/LastProduct.css'

function LastProduct(props){
    return(
<div className="content lastProduct">
    <h3>Ultimo producto creado</h3>
        <div className='productNamePrice'>
            <p>{props.product.name}</p>
            <p>${props.product.price}</p>
        </div>
</div>
    )
}
export default LastProduct