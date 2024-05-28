import React from "react";

export default function Navbar({ filterItem, menulist }) {
  return (
    <>
      <nav className="navbar">
        <div className="nav-btn">
          {menulist.map((curElem) => {
            return (
              <>
                <button
                  className="btn-group-item"
                  onClick={() => filterItem(curElem)}
                >
                  {curElem}
                </button>
              </>
            );
          })}
        </div>
      </nav>
    </>
  );
}
