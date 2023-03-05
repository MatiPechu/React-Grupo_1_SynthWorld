import React from "react";
import '../assets/css/LastProduct.css'
import { Link } from "react-router-dom";

function LastProduct(props){
    return(
<div className="content lastProduct">
    <h3>Ultimo producto creado</h3>
        <div className='productNamePrice'>
            <p>{props.product.name}</p>
            <p>${props.product.price}</p>
        </div>
        <div className="buttonsED buttonsLast">
            <button><Link to={{ pathname: `localhost:3031/products/${props.product.id}`}} target="blank">Edit</Link></button>
            
            <form action={`/products/delete/${props.product.id}/?_method=DELETE`} method="POST" style={{display: 'inline-block'}}>
            <button type="submit" className="btn-delete-product" style={{display: 'inline-flex'}}>
                Delete
            </button>
            </form>
        </div>
</div>
    )
}
export default LastProduct