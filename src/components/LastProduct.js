import React from "react";
import '../assets/css/LastProduct.css'
import { Link } from "react-router-dom";

function LastProduct(props){
    let categories = props.product.category;
    let categoriesShow;
    if(categories && categories[0]) {
        if (categories[1]) {
            categoriesShow = `${props.categoriesNames[categories[0].category_id-1]},  ${props.categoriesNames[categories[1].category_id-1]}`
        }
        else {
            categoriesShow = `${props.categoriesNames[categories[0].category_id-1]}`
            }
    }


    return(
<div className="content lastProduct">
    <h3>Last created product</h3>
        <div className='productNamePrice'>
            <p>{props.product.name}</p>
            <p>${props.product.price}</p>
        </div>
        <div className="lastProductBtnCategories">
        <div className="buttonsED buttonsLast">
            <button><Link to={{ pathname: `localhost:3031/products/${props.product.id}`}} target="blank">Edit</Link></button>
            
            <form action={`/products/delete/${props.product.id}/?_method=DELETE`} method="POST" style={{display: 'inline-block'}}>
            <button type="submit" className="btn-delete-product" style={{display: 'inline-flex'}}>
                Delete
            </button>
            </form>
        </div>
        <p className="lastProductCategories">{categoriesShow} </p> 
        </div>
</div>
    )
}
export default LastProduct