import React from "react";
import "./Header.css";
import heroImage from "../../assets/hero2.png";

const Header = ({ setMenu }) => {
  const handleViewMenuClick = () => {
    document.getElementById("explore-menu")?.scrollIntoView({ behavior: "smooth" });
    if (typeof setMenu === "function") {
      setMenu("menu");
    }
  };

  return (
    <div className="header" style={{ backgroundImage: `url(${heroImage})` }}>
      <div className="header-contents">
        <h2>Order Your Favourite Food</h2>
        <p>
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients to satisfy your cravings and
          elevate your dining experience.
        </p>
        <button onClick={handleViewMenuClick}>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
