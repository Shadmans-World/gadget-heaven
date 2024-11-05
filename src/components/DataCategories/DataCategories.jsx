import React from "react";

const DataCategories = ({ productCategory, handleCategoryChange }) => {
  return (
    <div>
      <button
        onClick={() => handleCategoryChange(productCategory)}
        className="w-[150px] p-3 border-2 rounded-3xl"
      >
        {productCategory}
      </button>
    </div>
  );
};

export default DataCategories;
