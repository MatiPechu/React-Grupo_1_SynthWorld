import React from "react";
import '../assets/css/LastProduct.css'

function ProductList(props) {
    let productList = props.productList
    console.log('aaaa', productList)
  return (
    <div className="content lastProduct">
      <h3>Listado de productos</h3>
     { productList.map((product, i) => {
        return (
      <div className="productNamePrice" key={i}>
        <p key={i+10000}>{product.name}</p>
        <p key={i+20000}>${product.price}</p>
      </div>
        )
})}
    </div>
  );
}
export default ProductList;
