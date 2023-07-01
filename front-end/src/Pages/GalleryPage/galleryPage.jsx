import React, { useState } from "react";
import Navbar from "../../Components/NavBar/Navbar";
import Footer from "../../Components/Footer/Footer";
import hero from "../../Assets/galleryHero.jpg";
import imageData from "./imageData";
import "./galleryPage.scss";

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("just-worship");
  const [activeYear, setActiveYear] = useState(null);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setActiveYear(null);
  };

  const handleYearClick = (year) => {
    setActiveYear(year);
  };

  const getImagesForCategoryAndYear = (category, year) => {
    if (category && year && imageData[category] && imageData[category][year]) {
      return imageData[category][year];
    }
    return [];
  };

  return (
    <div>
      <Navbar />
      <div className="hero">
        <img src={hero} alt="Gallery Hero" />
        <div className="hero-description">
          <h2>Welcome to the Gallery</h2>
          <p>
            Explore and relive the moments of worship, outreach, and campus
            tours captured throughout the years.
          </p>
        </div>
      </div>
      <div className="gallery">
        <div className="gallery-header">
          <h2>Worship Moments</h2>
          <div className="categories">
            <button
              className={activeCategory === "outreach" ? "active" : ""}
              onClick={() => handleCategoryClick("outreach")}
            >
              Outreaches
            </button>
            <button
              className={activeCategory === "campus-tour" ? "active" : ""}
              onClick={() => handleCategoryClick("campus-tour")}
            >
              Campus Tour
            </button>
          </div>
        </div>
        <div className="subcategories">
          {activeCategory === "outreach" && (
            <div className="subcategory">
              <h3>Just Worship Outreaches</h3>
              <div className="year-buttons">
                {/* ... year buttons ... */}
                <button onClick={() => handleYearClick("2016")}>2016</button>
                <button onClick={() => handleYearClick("2018")}>2018</button>
                <button onClick={() => handleYearClick("2020")}>2020</button>
              </div>
              {activeYear && (
                <div>
                  {getImagesForCategoryAndYear(activeCategory, activeYear).map(
                    (imagePath, index) => (
                      <img
                        key={index}
                        src={imagePath}
                        alt={`Outreach ${activeYear} Image ${index + 1}`}
                      />
                    )
                  )}
                </div>
              )}
            </div>
          )}
          {/* ... other subcategories ... */}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GalleryPage;
