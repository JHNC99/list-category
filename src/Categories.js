import React from "react";

const Categories = ({ filterItems }) => {
  console.log(filterItems);
  return (
    <div className="btn-container">
    <button className="filter-btn" onClick={() => filterItems("all")}>
        All
      </button>
      <button className="filter-btn" onClick={() => filterItems("breakfast")}>
        breakfast
      </button>
    </div>
  );
};

export default Categories;
