import React from "react";

export default function Menucard({ menudata }) {
  return (
    <>
    <div className="card-section">
      {menudata.map((curElem) => {
        return (
          <>
            <div className="card-container" key={curElem.id}>
              <div className="card">
                <div className="card-body">
                  <span className="card-number card-circle subtle">
                    {curElem.id}
                  </span>
                  <span className="card-author sbtle">{curElem.name}</span>
                  <h2 className="card-title">{curElem.name}</h2>
                  <span className="card-description subtle">
                    {curElem.description}
                  </span>
                </div>
                <img src={curElem.img} alt="" className="card-media" />
                <span className="card-tag subtle">Order Now</span>
              </div>
            </div>
           
          </>
        );
      })}
       </div>
    </>
  );
}
