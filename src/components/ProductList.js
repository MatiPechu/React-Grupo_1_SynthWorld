import React from "react";
import '../assets/css/LastProduct.css'
import {Link} from 'react-router-dom'

function ProductList(props) {
    let productList = props.productList
    console.log('aaaa', props.categoriesNames)
  return (
    <div className="content lastProduct">
      <h3>Listado de productos</h3>
     { productList.map((product, i) => {
        
        let categories = product.category;
        let categoriesShow;
        if(categories[0]) {
        if (categories[1]) {
            categoriesShow = `${props.categoriesNames[categories[0].category_id-1]},  ${props.categoriesNames[categories[1].category_id-1]}`
        }
        else {
            categoriesShow = `${props.categoriesNames[categories[0].category_id-1]}`
        }
    }

        return (
      <div className="productNamePrice borderBottomTable" key={i}>
        <p className='pNameList' key={i+10000}>{product.name}</p>
        <p key={i+20000}>${product.price}</p>
        <div className="productNamePrice categoriesInList">
        <div className="buttonsED">
            <button><Link to={{ pathname: `localhost:3031/products/${product.id}`}} target="blank">Edit</Link></button>
            
            <form action={`/products/delete/${product.id}/?_method=DELETE`} method="POST" style={{display: 'inline-block'}}>
            <button type="submit" className="btn-delete-product" style={{display: 'inline-flex'}}>
                Delete
            </button>
            </form>
        </div>
        {categories[0] ? 
        <>
        <p>{categoriesShow} </p> 
        
        </>
        :
        ''
     }
     </div>
      </div>
        )
})}
    </div>
  );
}
export default ProductList;
