import React from "react";
import "./NavBar.css";
import CATEGORY from "../../data/category";
import { useDispatch, useSelector } from "react-redux";
import actions from "../../actions";
const NavBar = () => {
  const dispatch = useDispatch();
  const selectCategory = (category) => {
    category &&
      dispatch(actions.setCategory(category)) &&
      dispatch(actions.setSelectedTab(category)) &&
      dispatch(actions.setNews(category));
    return;
  };

  const selectedTab = useSelector((state) => state.selectedTab);
  return (
    <div className="navbar">
      {CATEGORY.sort().map((category, index) => {
        return (
          <h1
            className={selectedTab === category ? "navbar--active" : ""}
            key={index}
            onClick={() => selectCategory(category)}
          >
            {category}
          </h1>
        );
      })}
    </div>
  );
};
export default NavBar;
