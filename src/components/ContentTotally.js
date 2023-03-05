import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
function ContentTotally() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3031/api/products"),
      fetch("http://localhost:3031/api/users"),
    ]).then(([resProducts, resUsers]) => {
      Promise.all([resProducts.json(), resUsers.json()]).then((res) => {
        let totCategories;
        totCategories = Object.keys(res[0].countByCategory).length;
        console.log(res[1].meta.count);
        //  console.log(resU)
        setProducts(res[0].meta.count);
        setCategories(totCategories);
        setUsers(res[1].meta.count);
      });
    });
  }, []);
  return (
    <>
      <Card data={products} name="products" icon="fas fa-music"/>
      <Card data={categories} name="categories" icon="fas fa-list"/>
      <Card data={users} name="users" icon="fas fa-users"/>
    </>
  );
}
export default ContentTotally;
