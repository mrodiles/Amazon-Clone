import React from "react";
import "./Header.css";
function Header() {
  return (
    <div className="header">
      <img
        alt=""
        className="header__logo"
        src="http://png.com/uploads/amazon/amazon_PNG11.png"
      />

      <div className="header__search">
        <input className="header__searchIn" type="text" />
      </div>
      <div className="header__nav"></div>
    </div>
  );
}

export default Header;
