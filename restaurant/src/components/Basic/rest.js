import React, { useState } from "react";
import "./rest.css";
import Menu from "./Menu.js";
import Menucard from "./Menucard.js";
import Navbar from "./Navbar.js";

const uniqueList = [
  ...new Set(
    Menu.map((curElem) => {
      return curElem.category;
    })
  ),
  "All",
];
console.log(uniqueList);

export default function Rest() {
  const [menudata, setMenudata] = useState(Menu);
  const [menulist, setMenulist] = useState(uniqueList);

  const filterItem = (category) => {
    if (category === "All") {
      return setMenudata(Menu);
    }
    const updateList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setMenudata(updateList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menulist={menulist} />
      <Menucard menudata={menudata} />
    </>
  );
}
