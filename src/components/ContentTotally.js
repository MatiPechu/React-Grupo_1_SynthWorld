import React from "react";
import Card from "./CardTotal";
import { useEffect, useState } from "react";
import LastProduct from "./LastProduct";
import CategoriesCount from "./CategoriesCount";
function ContentTotally() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);
  const [lastProduct, setLastProduct] = useState([]);
  const [categoriesCount, setCategoriesCount] = useState([])
  const [categoriesNames, setCategoriesNames] = useState([])

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3031/api/products"),
      fetch("http://localhost:3031/api/users"),
    ]).then(([resProducts, resUsers]) => {
      Promise.all([resProducts.json(), resUsers.json()]).then((res) => {
        let totCategories;
        totCategories = Object.keys(res[0].countByCategory).length;
        let cats = Object.keys(res[0].countByCategory)
      //  console.log(res[0].countByCategory[cats[0]])
         let  catsTotal = Object.values(res[0].countByCategory)
        console.log(cats)

        setCategoriesCount(catsTotal)
        setCategoriesNames(cats)


        console.log(categoriesCount)
       // console.log(res[1].meta.count);
        //  console.log(resU)
        let resProducts =  res[0].Products
        setLastProduct(resProducts[resProducts.length-1])
        setProducts(res[0].meta.count);
        setCategories(totCategories);
        setUsers(res[1].meta.count);
      });
    });
  }, []);
  return (
    <>
    <div className="content">
      <Card data={products} name="products" icon="fas fa-music"/>
      <Card data={categories} name="categories" icon="fas fa-list"/>
      <Card data={users} name="users" icon="fas fa-users"/>
      </div>
      <LastProduct product={lastProduct}/>
      <CategoriesCount catNames={categoriesNames} catCount={categoriesCount}/> 
    </>
  );
}
export default ContentTotally;
