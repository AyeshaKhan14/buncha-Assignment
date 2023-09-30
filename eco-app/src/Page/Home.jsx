import React from "react";
import "../style/Home.css";
import SideMenu from "../Components/NavBar/SideMenu";
import { Produce } from "../Components/Home Component/Produce";
import { Preoare } from "../Components/Home Component/Prepare";
import { Bakery } from "../Components/Home Component/Bakery";

export const Home = () => {
  return (
    <div className='home_parent_Conatiner'>
      <div className='sideP'>
        {" "}
        <SideMenu />
      </div>

      <div className='maping_div'>
        <Produce />
        <Preoare />
        <Bakery /> <Produce />
        <Preoare />
        <Bakery />
      </div>
    </div>
  );
};
