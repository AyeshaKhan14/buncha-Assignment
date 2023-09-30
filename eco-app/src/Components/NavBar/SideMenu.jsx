import React from "react";
import "../../style/SideMenu.css";

const Menu = [
  { title: "Produce" },
  { title: "Prepared foods" },
  { title: "Canned foods & Soups" },
  { title: "Produce" },
  { title: "Bakery" },
  { title: "Dairy & Eggs" },
  { title: "Frozen" },
  { title: "Meat & Seafood" },
  { title: "Bakery" },
  { title: "Produce" },
  { title: "Dairy & Eggs" },
  { title: "Prepared foods" },
  { title: "Canned foods & Soups" },
  { title: "Produce" },
  { title: "Bakery" },
  { title: "Dairy & Eggs" },
];

const SideMenu = () => {
  return (
    <div className='side_div'>
      {Menu.map((el) => (
        <p style={{ fontSize: "20px" }}>{el.title}</p>
      ))}
    </div>
  );
};

export default SideMenu;
