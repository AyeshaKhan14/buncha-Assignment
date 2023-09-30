import React from "react";
import { food } from "../../Data/data";
import "../../style/Produce.css";

export const Produce = () => {
  return (
    <div className='pro_parent'>
      <h2>Produce</h2>
      <div className='slid_data'>
        {food.map((el) => (
          <div
            style={{
              width: "250px",
              height: "220px",
            }}
            key={el.id}
          >
            <div>
              <img
                style={{ width: "120px", height: "120px" }}
                src={el.image}
                alt=''
              />
            </div>
            <p
              style={{
                textAlign: "left",
                color: "gray",
              }}
            >
              {el.price}
            </p>
            <p
              style={{
                textAlign: "left",
                marginTop: "-16px",
              }}
            >
              {el.title}
            </p>
            <p
              style={{
                textAlign: "left",
                marginTop: "-16px",
              }}
            >
              {el.dorzen}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
