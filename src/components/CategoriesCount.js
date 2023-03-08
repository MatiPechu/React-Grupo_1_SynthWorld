import React from "react";
import "../assets/css/CategoriesCount.css";

function CategoriesCount(props) {
  return (
    <div className="content cateogriesCount">
      <h3>Products by category</h3>
      {props.catNames.map((category, i) => {
        return (
          <div className="categoryTotal">
            <p>{category}</p>
            <p>{props.catCount[i]}</p>
          </div>
        );
      })}
    </div>
  );
}
export default CategoriesCount;
