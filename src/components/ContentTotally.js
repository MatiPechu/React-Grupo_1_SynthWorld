import React from "react";
import Card from "./Card";
import {useEffect,useState} from "react";
function ContentTotally(){

const [Product, setProduct] = useState([])
useEffect (()=>{fetch ('http://localhost:3031/api/products')
.then(res => res.json())
.then(resultado => {
    console.log("aca toy",resultado)
    setProduct(resultado.meta.count)})
},[])
return(
<div className="content">
    <Card Product={Product}/>
</div>
    )
}
export default ContentTotally