import React, { useState } from "react";
import "./galleryPage.css";

const galleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };
  return (
    <div>
      <div className="gallery">
        <div className="gallery-header">
          <h2>Gallery</h2>
          <div className="categories">
            <button
              className={
                activeCategory === "all" ? "category active" : "category"
              }
              onClick={() => handleCategoryClick("all")}
            >
              All
            </button>
            <button
              className={
                activeCategory === "nature" ? "category active" : "category"
              }
              onClick={() => handleCategoryClick("nature")}
            >
              Nature
            </button>
            <button
              className={
                activeCategory === "architecture"
                  ? "category active"
                  : "category"
              }
              onClick={() => handleCategoryClick("architecture")}
            >
              Architecture
            </button>
            <button
              className={
                activeCategory === "people" ? "category active" : "category"
              }
              onClick={() => handleCategoryClick("people")}
            >
              People
            </button>
          </div>
        </div>
        <div className="gallery-grid">{/* Gallery items */}</div>
        <div className="pagination">{/* Pagination buttons */}</div>
      </div>
    </div>
  );
};

export default galleryPage;
