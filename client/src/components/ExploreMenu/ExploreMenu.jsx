import React from "react";
import "./ExploreMenu.css";
import { menu_list } from "../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="exp-menu-text">
        Choose from a diverse menu featuring a delectable array of dishes
        crafted with the finest ingredients to satisfy your cravings and elevate
        your dining experience.
      </p>

      <div className="exp-menu-list">
        {menu_list.map(({ menu_name, menu_image }, index) => {
          const isActive = category === menu_name;
          return (
            <div
              key={index}
              className={`exp-menu-list-item ${isActive ? "active" : ""}`}
              onClick={() =>
                setCategory((prev) => (prev === menu_name ? "All" : menu_name))
              }
            >
              <img
                src={menu_image}
                alt={`${menu_name} category`}
                className={isActive ? "active" : ""}
              />
              <p>{menu_name}</p>
            </div>
          );
        })}
      </div>

      <hr />
    </div>
  );
};

export default ExploreMenu;
