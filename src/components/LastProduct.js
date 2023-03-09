import React, { useEffect, useState } from "react";
import '../assets/css/LastProduct.css'

import { Link } from "react-router-dom";

function LastProduct(props){
    let categories = props.product.category;
    let categoriesShow;
    let brandShow = [];
    if(categories && categories[0]) {
        if (categories[1]) {
            categoriesShow = `${props.categoriesNames[categories[0].category_id-1]},  ${props.categoriesNames[categories[1].category_id-1]}`
        }
        else {
            categoriesShow = `${props.categoriesNames[categories[0].category_id-1]}`
            }
    }
    const [brand, setBrand] = useState('');
   useEffect(() => {
    if(props.brand) {
     setBrand(props.brand[0].name);
    }

   // console.log(props.brand[0])

   
   }, [props.brand])


    return(
<div className="content lastProduct">
    <h3>Last created product</h3>
        <div className='productNamePrice'>
            <p>{props.product.name}</p>
            <p>${props.product.price}</p>
        </div>
        <div className="lastProductBtnCategories">
        <div className="buttonsED buttonsLast">
            <button><Link target="_blank" to={{ pathname: `localhost:3031/products/${props.product.id}` }}>Detail</Link></button>
            <button><Link to={{ pathname: `localhost:3031/products/edit/${props.product.id}`}} target="_blank">Edit</Link></button> 
            <form action={`/products/delete/${props.product.id}/?_method=DELETE`} method="POST" style={{display: 'inline-block'}}>
            <button type="submit" className="btn-delete-product" style={{display: 'inline-flex'}}>
                Delete
            </button>
            </form>
        </div>
        <p className="lastProductCategories">{categoriesShow} </p> 
        </div>
        <div className="imgBrandContainer lastImgBrand">
          <img className="lastProductImg" src={`http://localhost:3031${props.product.image}`} alt='last product' />
          <p className="productBrand">{brand}</p> 
        </div>
</div>
    )
}
export default LastProduct