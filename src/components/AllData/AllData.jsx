import React, { useContext, useState, useEffect } from "react";
import { GadgetsContext } from "../../context/GadgetsContext";
import DataCategories from "../DataCategories/DataCategories";
import Products from "../Products/Products";
import { useNavigate, useParams } from "react-router-dom";

const AllData = () => {
  const { items } = useContext(GadgetsContext);
  const navigate = useNavigate();
  const { category } = useParams();

  // Ensure "Accessories" is included in categories
  const uniqueCategories = [
    "Accessories",
    ...new Set(items.map((product) => product.category)),
  ];

  // Set selected category based on URL or default to "All"
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Update category based on URL path change
  useEffect(() => {
    // Replace hyphens in the category from the URL with spaces for proper display
    setSelectedCategory(category ? category.replace(/-/g, ' ') : "All");
  }, [category]);

  // Function to handle category change and update the URL
  const handleCategoryChange = (category) => {
    // Replace spaces in the category with hyphens
    const formattedCategory = category.replace(/\s+/g, '-');
    setSelectedCategory(category);
    navigate(`/allData/${formattedCategory === "All" ? "" : formattedCategory}`);
  };

  // Filter items based on the selected category
  const filteredItems = items.filter((product) =>
    selectedCategory === "All" ? true : product.category === selectedCategory
  );

  return (
    <div>
      
      <h3 className="text-4xl font-bold mb-10 text-center mt-5">
        Explore Cutting-Edge Gadgets
      </h3>

      <div className="flex gap-3">
        {/* Sidebar with Category Buttons */}
        <div className="w-[20%] flex flex-col gap-y-4 bg-white justify-center items-center p-5 h-max rounded-xl">
          <button
            onClick={() => handleCategoryChange("All")}
            className="w-[150px] p-3 border-2 rounded-3xl"
          >
            All Products
          </button>
          {uniqueCategories.map((categoryName, idx) => (
            <DataCategories
              key={idx}
              handleCategoryChange={handleCategoryChange}
              productCategory={categoryName}
            />
          ))}
        </div>

        {/* Product Display Section */}
        <div className="w-[80%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {filteredItems.length > 0 ? (
            filteredItems.slice(0, 9).map((product) => (
              <Products key={product.product_id} product={product} />
            ))
          ) : (
            <p className="col-span-3 text-center text-4xl font-bold text-gray-500">
              No data found
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllData;
