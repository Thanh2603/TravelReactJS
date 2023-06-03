import React from "react";
import BoraBora from "../../assets/borabora.jpg";
import BoraBora2 from "../../assets/borabora2.jpg";
import Maldives from "../../assets/maldives.jpg";
import Maldives2 from "../../assets/maldives2.jpg";
import Maldives3 from "../../assets/maldives3.jpg";
import KeyWest from "../../assets/keywest.jpg";
import SelectsImg from "../selectsimg/SelectsImg";
import "./Select.css";
const Select = () => {
  return (
    <div name="views" className="selects">
      <div className="container">
        <SelectsImg bgImg={BoraBora} text="Bora Bora" />
        <SelectsImg bgImg={BoraBora2} text="Bora Bora" />
        <SelectsImg bgImg={Maldives} text="Maldives" />
        <SelectsImg bgImg={Maldives2} text="Maldives" />
        <SelectsImg bgImg={Maldives3} text="Maldives" />
        <SelectsImg bgImg={KeyWest} text="KeyWest" />
      </div>
    </div>
  );
};

export default Select;
