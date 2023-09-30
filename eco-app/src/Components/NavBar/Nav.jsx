import React from "react";
import "../../style/Nav.css";
import { IoMdDocument } from "react-icons/io";
import { BsFillCartFill } from "react-icons/bs";

export const Nav = () => {
  return (
    <div className='nav_container'>
      <div className='inner_nav_div'>
        <div id='eco_head'>Ecommerce</div>
        <div className='div_2nd'>
          <div id='share_log'>
            <IoMdDocument style={{ fontSize: "20px" }} /> Share Logs
          </div>
          <div id='cart_div'>
            <BsFillCartFill style={{ fontSize: "20px" }} /> 4
          </div>
        </div>
      </div>
    </div>
  );
};
